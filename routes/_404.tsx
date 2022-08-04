/** @jsx h */
import { h } from 'preact';
import { UnknownPageProps } from '$fresh/server.ts';

export default function NotFoundPage({ url }: UnknownPageProps) {
  return <div>404 NOT FOUND!!!!{url.pathname}</div>;
}
