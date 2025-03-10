import Script from "next/script"

export function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_MEASUREMENT_ID}`}
      />

      <Script id="" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
            });
        `}
      </Script>
    </>
  )
}
