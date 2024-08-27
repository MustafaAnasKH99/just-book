import { NextResponse } from 'next/server';
import Nylas from 'nylas';
import { config } from "~/../config";

const nylas = new Nylas({
    apiKey: config.nylasAPI,
    apiUri: config.apiUri,
});

export async function GET() {
    console.log("Received callback from Nylas");
    const code = new URLSearchParams(location.search).get("code");

    if (!code) {
        return NextResponse.json({ error: 'Did not get data from nylas' }, { status: 400 });
    }

    const codeExchangePayload = {
        clientSecret: config.nylasAPI,
        clientId: config.clientId,
        redirectUri: config.callbackUri,
        code,
    };

    try {
        const response = await nylas.auth.exchangeCodeForToken(codeExchangePayload);
        const { grantId } = response;
    
        // NB: This stores in RAM
        // In a real app you would store this in a database, associated with a user
        console.log("Got grant token: ", grantId);
        process.env.NYLAS_GRANT_ID = grantId;
    
        NextResponse.json({ message: "OAuth2 flow completed successfully for grant ID: " + grantId });
      } catch (error) {
        NextResponse.json({ error: "Failed to exchange authorization code for token" }, { status: 500 });
      }
}
