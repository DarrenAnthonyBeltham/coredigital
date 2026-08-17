export const metadata = {
  title: 'Digital Engine | Powered by CoreDigital',
  description: 'Turn traffic into revenue. High-conversion landing pages, elite SEO, and automated lead generation engineered for modern businesses.',
  openGraph: {
    title: 'Digital Engine | Powered by CoreDigital',
    description: 'Turn traffic into revenue with engineered marketing.',
    type: 'website',
  }
};

export default function GrowthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}