import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const getUpstreamUrl = (): string => {
	const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
	if (!baseUrl) {
		throw new Error('Missing NEXT_PUBLIC_API_BASE_URL');
	}
	// normalize base URL: drop trailing slashes and optional /api suffix
	const normalized = baseUrl.replace(/\/+$/, '');
	const cleaned = normalized.replace(/\/api$/, '');
	const finalUrl = `${cleaned}/admin/rooms/list/by_filters_v2_zip`;
	console.log('[proxy] upstream baseUrl:', baseUrl, '→ cleaned:', cleaned);
	console.log('[proxy] upstream URL:', finalUrl);
	return finalUrl;
};

export async function POST(request: NextRequest) {
	try {
		console.log('[proxy] /api/proxy/room/by_filters_v2_zip POST hit');
		const upstreamUrl = getUpstreamUrl();
		const requestBody = await request.text();
		console.log('[proxy] forwarding to', upstreamUrl, 'payload bytes:', requestBody.length);

		const upstreamResponse = await fetch(upstreamUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'accept': 'application/json'
			},
			body: requestBody,
			cache: 'no-store'
		});

		const contentType = upstreamResponse.headers.get('content-type') || 'application/json';
		const responseText = await upstreamResponse.text();

		if (!upstreamResponse.ok) {
			console.error('[proxy] upstream error', upstreamResponse.status, upstreamResponse.statusText);
			return new NextResponse(responseText || JSON.stringify({ error: 'Upstream error' }), {
				status: upstreamResponse.status,
				headers: { 'content-type': contentType }
			});
		}

		return new NextResponse(responseText, {
			status: upstreamResponse.status,
			headers: { 'content-type': contentType }
		});
	} catch (error) {
		console.error('[proxy] error', error);
		return NextResponse.json(
			{
				error: 'Failed to proxy request',
				details: error instanceof Error ? error.message : 'Unknown error'
			},
			{ status: 502 }
		);
	}
}


