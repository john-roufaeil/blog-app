import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from '@/context/SnackbarContext';
import theme from '../theme';
import ScrollToTopBtn from './components/ScrollToTopBtn';

const inter = Inter({ subsets: ['latin'] });
const ApolloProvider = dynamic(() => import('../../lib/ApolloProvider'), { ssr: false });
export const metadata: Metadata = {
    title: 'BlogBytes',
    description: 'Sharing thoughts',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="../../../logo.png" />
            </head>
            <body className={`${inter.className} bg-primary`}>
                <ApolloProvider>
                    <ThemeProvider theme={theme}>
                        <SnackbarProvider>
                            {children}
                            <ScrollToTopBtn />
                        </SnackbarProvider>
                    </ThemeProvider>
                </ApolloProvider>
            </body>
        </html>
    );
}
