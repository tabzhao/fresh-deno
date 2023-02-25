import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  let random = Math.floor(Math.random() * 11) + 1
  const url = `https://static.jishu6.com/thumb-img/${random}.png`
  return new Response(null, {
    status: 302,
    headers: {
      Location: url
    }
  })
}