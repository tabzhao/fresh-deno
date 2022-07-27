/** @jsx h */
import { h } from 'preact';
import { PageProps, Handlers } from '$fresh/server.ts';

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}


export const handler: Handlers = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get('q') || '';
    const results = NAMES.filter(name => name.includes(query));
    return ctx.render({ results, query })
  }
}

export default function Page({ data }: PageProps<Data>) {
  const { query, results } = data;
  return (
    <div>
      <form>
        <input type='text' name='q' value={query} />
        <button type="submit">search</button>
      </form>
      <ul>
        {results.map((name) => <li key={name}>{name}</li>)}
      </ul>
    </div>
  )
}