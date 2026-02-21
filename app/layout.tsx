import type { Metadata } from "next";
import "./starter-kit.css";

export const metadata: Metadata = {
    title: "無限の叡智スターターキット",
    description: "あなたの無限の叡智にアクセスするためのスターターキット",
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
