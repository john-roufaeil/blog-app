import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import "./globals.css";
import theme from './../theme';
import { ThemeProvider } from '@mui/material/styles';

const inter = Inter({ subsets: ["latin"] });
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
                    <ThemeProvider theme={theme}>
                        {children}
                    </ThemeProvider>,
                </ApolloProvider>
            </body>
        </html>
    );
}
