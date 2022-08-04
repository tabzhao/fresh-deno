/** @jsx h */
import { h } from 'preact';
import { ErrorPageProps } from '$fresh/server.ts';

export default function NotFoundPage({ error }: ErrorPageProps) {
  return <div>500 internal error: {(error as Error).message}</div>;
}
