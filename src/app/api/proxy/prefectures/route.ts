import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const upstreamPaths: Record<string, string> = {
    'prefectures': '/region/prefectures',
    'get_room_number': '/api-background-process/get_room_number'
};

export async function GET(request: NextRequest) {
    try {
        const upstreamBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        if (!upstreamBaseUrl) {
            return NextResponse.json({ error: 'Missing NEXT_PUBLIC_API_BASE_URL' }, { status: 500 });
        }

        const upstreamUrl = new URL(`${upstreamBaseUrl}/region/prefectures`);
        request.nextUrl.searchParams.forEach((value, key) => {
            upstreamUrl.searchParams.append(key, value);
        });
        

        const upstreamResponse = await fetch(upstreamUrl.toString(), {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            },
            cache: 'no-store'
        });

        const contentType = upstreamResponse.headers.get('content-type') || 'application/json';
        const body = await upstreamResponse.text();

        return new NextResponse(body, {
            status: upstreamResponse.status,
            headers: { 'content-type': contentType }
        });
    } catch (error) {
        return NextResponse.json({ error: 'Upstream request failed' }, { status: 502 });
    }
}


