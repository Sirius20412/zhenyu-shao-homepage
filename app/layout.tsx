import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zhenyu Shao (邵震宇) · Personal Homepage',
  description:
    'The official personal homepage of Zhenyu Shao (邵震宇), with verified contact information.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
