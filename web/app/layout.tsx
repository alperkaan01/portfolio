import './globals.css';
import './brand.css';
import Navbar from '@/components/navbar/navbar';
import { siteMetadata } from '@/lib/metadata';

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
