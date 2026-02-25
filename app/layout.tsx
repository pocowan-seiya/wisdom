import type { Metadata } from "next";
import "./starter-kit.css";

export const metadata: Metadata = {
    title: "無限の叡智を生きるスターターキット",
    description: "無限の叡智を生きるためのスターターキット",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body>{children}</body>
        </html>
    );
}
