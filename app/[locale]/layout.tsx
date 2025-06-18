import { i18n, type Locale } from "@/i18n-config";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LocaleProvider } from "@/components/locale-provider";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <LocaleProvider locale={locale}>
      <Navigation locale={locale} />
      <main className="min-h-screen">{children}</main>
      <Footer locale={locale} />
    </LocaleProvider>
  );
}
