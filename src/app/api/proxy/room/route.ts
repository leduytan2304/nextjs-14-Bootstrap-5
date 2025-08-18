import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Cấu hình endpoint cố định
const AREALTY_ENDPOINT = 'https://arealty.jp/api-background-process/get_room_number';

export async function GET(request: NextRequest) {
    try {
        const upstreamResponse = await fetch(AREALTY_ENDPOINT, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            cache: 'no-store'
        });

        if (!upstreamResponse.ok) {
            console.error('Upstream error:', {
                status: upstreamResponse.status,
                statusText: upstreamResponse.statusText
            });
            return NextResponse.json({ 
                error: `Upstream server returned ${upstreamResponse.status}` 
            }, { status: upstreamResponse.status });
        }

        const body = await upstreamResponse.text();

        return new NextResponse(body, {
            status: upstreamResponse.status,
            headers: { 
                'content-type': 'application/json',
            }
        });
    } catch (error) {
        console.error('Proxy error:', error);
        return NextResponse.json({ error: 'Failed to fetch from upstream' }, { status: 502 });
    }
}

export async function POST(request: NextRequest) {
    try {
        // Log incoming request
        const requestBody = await request.text();
        // console.log('Incoming request body:', requestBody);

        const upstreamResponse = await fetch(AREALTY_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: requestBody,
            cache: 'no-store'
        });

        // Log upstream response details
        // console.log('Upstream response status:', upstreamResponse.status);

        if (!upstreamResponse.ok) {
            console.error('Upstream error:', {
                status: upstreamResponse.status,
                statusText: upstreamResponse.statusText
            });
            return NextResponse.json({ 
                error: `Upstream server returned ${upstreamResponse.status}` 
            }, { status: upstreamResponse.status });
        }

        const responseBody = await upstreamResponse.text();
        // console.log('Upstream response body:', responseBody);

        return new NextResponse(responseBody, {
            status: 200,
            headers: { 
                'content-type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Proxy error:', error);
        return NextResponse.json({ 
            error: 'Failed to proxy request',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 502 });
    }
}