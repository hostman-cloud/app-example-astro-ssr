import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
	return Response.json({
		message: 'Hello from the Astro API (runs on the server)',
		at: new Date().toISOString(),
	});
};
