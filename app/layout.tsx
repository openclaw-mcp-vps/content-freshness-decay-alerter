import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Content Freshness Decay Alerter — Alert When Content Goes Stale",
  description: "Monitor content age, search rankings, and traffic to get alerted when your content needs updating before it hurts your SEO."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a5119280-1479-4fa4-939e-e2f75a02b014"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
