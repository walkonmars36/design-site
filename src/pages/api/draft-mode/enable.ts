import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = ({ cookies, url }) => {
  const isLocalhost = url.hostname === "localhost" || url.hostname === "127.0.0.1";
  cookies.set("sanity-draft-mode", "true", {
    httpOnly: true,
    sameSite: isLocalhost ? "lax" : "none",
    secure: !isLocalhost,
    path: "/",
  });

  const redirectTo = url.searchParams.get("redirect") || "/";
  return new Response(null, {
    status: 302,
    headers: { Location: redirectTo },
  });
};
