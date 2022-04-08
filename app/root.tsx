import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Kuliahku.id",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script src="https://cdn.tiny.cloud/1/q4v8isq2oyybsqyiyk2kk4vmc209uzmdhpzhk1mwhh3kslel/tinymce/6/tinymce.min.js" referrerPolicy="origin"></script>
      </head>
      <body className="bg-black">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
