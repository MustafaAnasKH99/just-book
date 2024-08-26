import { NextResponse } from 'next/server';
import getDateFromText from '~/app/utils/text_to_date';

export async function GET() {
    return NextResponse.json({ message: 'Hello' });
}

export async function POST(request: Request) {
    const data = await request.json();
    const response = await getDateFromText(data.text);
    return NextResponse.json(response);
}