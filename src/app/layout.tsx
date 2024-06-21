import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Dynamically import ApolloProvider with no SSR
const ApolloProvider = dynamic(() => import('../../lib/ApolloProvider'), { ssr: false });

export const metadata: Metadata = {
    title: "BlogByte",
    description: "Sharing thoughts",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-primary`}>
                <ApolloProvider>
                    {children}
                </ApolloProvider>
            </body>
        </html>
    );
}
