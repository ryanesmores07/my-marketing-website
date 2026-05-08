import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

export const GoogleAnalytics = () => (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function gtag(){dataLayer.push(arguments);}
        window.gtag('js', new Date());
        window.gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        window.gtagReady = true;
        window.dispatchEvent(new Event('gtag-ready'));
      `}
    </Script>
  </>
);
