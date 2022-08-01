/** @jsx h */
import { h } from "preact";
import { PageProps, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_, ctx) {
    console.log(ctx.params.name)
    return new Response(JSON.stringify("hello world,"+ ctx.params.name+ " !"), {
      headers: { "Content-Type": "application/json" }
    });
  }
}

export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}
