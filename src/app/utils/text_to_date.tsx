import OpenAI from "openai";
import { ChatCompletion } from "openai/resources";
import { env } from "~/env";

const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
});

export default async function getDateFromText(req: string): Promise<ChatCompletion> {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: "Say this is a test" }],
        model: "gpt-4o-mini",
    });

    return chatCompletion;
};