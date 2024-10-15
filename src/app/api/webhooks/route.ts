import { db, stripe } from "@/lib";
import Stripe from "stripe";

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: Request) {

    const body = await request.text();
    const sig = request.headers.get("Stripe-Signature") || "";
    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, sig, WEBHOOK_SECRET);
    } catch (error) {
        console.error("Webhook Error:", error);
        return new Response("Webhook Error: Invalid payload", { status: 400 });
    }

    try {
        switch (event.type) {
            case "checkout.session.completed":
                const session = event.data.object as Stripe.Checkout.Session;

                if (session.mode === "payment" && session.payment_status === "paid") {
                    const customerId = session.customer as string;

                    const user = await db.user.findFirst({
                        where: { stripeCustomerId: customerId },
                    });

                    if (user) {
                        await db.user.update({
                            where: { id: user.id },
                            data: { stripeCustomerId: customerId },
                        });
                        console.log(`User ${user.id} updated with Stripe Customer ID: ${customerId}`);
                    } else {
                        console.warn(`User with Stripe Customer ID: ${customerId} not found.`);
                    }
                }
                break;

            default:
                console.log(`Unhandled event type: ${event.type}`);
                return new Response("Unhandled event type", { status: 400 });
        }

        return new Response("Webhook received", { status: 200 });
    } catch (error) {
        console.error("Error processing webhook event:", error);
        return new Response("Webhook processing error", { status: 500 });
    }
}
