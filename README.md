<img src="https://github.com/user-attachments/assets/c3b89ac6-7a45-4e73-8d34-5d379cef2c69" alt="Cura App Logo" width="50" height="50">

# 🩺 Cura - Your Personal AI Health Assistant

![Cover](https://github.com/user-attachments/assets/65d7f2bd-f371-4518-8f5f-5661ca700694)

## 🌟 Introduction
Cura is a cutting-edge AI-powered health assistant designed to help you monitor and manage your well-being. Built with Next.js, Clerk, Stripe, Prisma, and MongoDB, Cura provides real-time insights and personalized recommendations to keep you on top of your health.

## 🚀 Features

- **Real-time Health Monitoring:** Track your symptoms, medications, and overall wellness in one place.
- **AI-Powered Chat:** Get instant answers and health tips from your AI assistant.
- **Premium Features:** Unlock additional tools and functionalities with a one-time payment of $9.
- **Seamless Integration:** Built with modern tech stack for smooth performance and scalability.

## 🔗 Live Preview

Check out the live demo of Cura here: [Live Preview](https://cura-med.vercel.app) <!-- Replace with your actual live preview link -->


## 💻 Tech Stack

* Tailwind CSS
* Shadcn UI
* Headless UI
* Clerk
* Tanstack Query
* Framer Motion
* Stripe
* Zustand
* Zod
* Gemini API
* Prisma 
* MongoDB

## 🛠️ Installation
To run Cura locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Username/cura.git
    ```
2. Install dependencies:
    ```bash
    pnpm install
    ```
3. Set up environment variables in a `.env` file:
      ```
     # app
    NEXT_PUBLIC_APP_NAME=
    NEXT_PUBLIC_APP_URL=
    
    # database
    DATABASE_URL=
    
    # clerk
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    
    # google
    NEXT_PUBLIC_GOOGLE_API_KEY=
    
    # stripe
    STRIPE_SECRET_KEY=
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
    STRIPE_WEBHOOK_SECRET=
    ```
4. Push the Prisma schema:
    ```bash
    pnpm dlx prisma db push
    ```
5. Run the development server:
    ```bash
    pnpm dev
    ```

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


---

Built with ❤️ by [Pushpank Dhruw](https://github.com/PushpankDhruw)
