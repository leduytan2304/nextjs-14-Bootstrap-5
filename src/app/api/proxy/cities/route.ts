import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    try {
        const upstreamBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        if (!upstreamBaseUrl) {
            return NextResponse.json({ error: 'Missing NEXT_PUBLIC_API_BASE_URL' }, { status: 500 });
        }

        const searchParams = request.nextUrl.searchParams;
        const prefectures = searchParams.get('prefectures');

        if (!prefectures) {
            return NextResponse.json({ error: 'Missing prefecture IDs' }, { status: 400 });
        }

        // Sửa lại URL để match với API gốc (bỏ /api)
        const upstreamUrl = new URL(`${upstreamBaseUrl}/region/cities_by_prefectures`);
        upstreamUrl.searchParams.set('prefectures', prefectures);

        const upstreamResponse = await fetch(upstreamUrl, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            cache: 'no-store'
        });

        if (!upstreamResponse.ok) {
            return NextResponse.json({ error: 'Upstream error' }, { status: upstreamResponse.status });
        }

        const contentType = upstreamResponse.headers.get('content-type') || 'application/json';
        const body = await upstreamResponse.text();

        return new NextResponse(body, {
            status: upstreamResponse.status,
            headers: { 'content-type': contentType }
        });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
