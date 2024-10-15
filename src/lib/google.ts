import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(
  process.env.GOOGLE_API_KEY as string
);

export default ai;
