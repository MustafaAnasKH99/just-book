import OpenAI from "openai";
// import { env } from "~/env";
import { config } from "../../../config";

const openai = new OpenAI({
    apiKey: config.apiKey,
});

let date: Date = new Date();
const prompt = `
You are an assistant who listens to customers and tries to give them an appointment. 
Today's date is ${date} Take the following text and only return the exact date down to the minute. 
Depending on the user's input, either return a date or a range of dates. 
For ranges, return two dates that cover the range the user is asking about. 
Return the result in a date format and not speech.
`;

export default async function getDateFromText(text: string): Promise<any> {
    console.log("your api key", config.apiKey);
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: `${prompt} Input: ${text}` }],
        model: "gpt-4o-mini",
    });

    return chatCompletion;
};