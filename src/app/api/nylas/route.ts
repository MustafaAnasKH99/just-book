import { NextResponse } from 'next/server';
import Nylas from 'nylas';
import { config } from "~/../config";

const nylas = new Nylas({
    apiKey: config.nylasAPI,
    apiUri: config.apiUri,
});

export async function GET() {
    const authUrl = nylas.auth.urlForOAuth2({
        clientId: config.clientId,
        redirectUri: config.callbackUri,
    });
    return NextResponse.redirect(authUrl);
}

