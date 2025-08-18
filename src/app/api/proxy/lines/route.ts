import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    try {
        const upstreamBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        if (!upstreamBaseUrl) {
            return NextResponse.json({ error: 'Missing NEXT_PUBLIC_API_BASE_URL' }, { status: 500 });
        }

        // Lấy query params từ request
        const searchParams = request.nextUrl.searchParams;
        
        // Tạo URL cho API gốc
        const upstreamUrl = new URL(`${upstreamBaseUrl}/api/routes/lines/by_prefectures`);
        
        // Forward tất cả query params
        searchParams.forEach((value, key) => {
            upstreamUrl.searchParams.append(key, value);
        });

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
