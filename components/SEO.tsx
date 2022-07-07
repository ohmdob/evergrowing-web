import Head from 'next/head';

interface SEOProps {
    title: string
    description?: string
}

export const SEO = ({ title, description="The more understanding you are, the happieness you got" }: SEOProps) => {

  return (
    <Head>
    <title>{`${title} | Ever Growing`}</title>
    <link rel="icon" href="/logo32.png" sizes="32x32" />
    <link rel="icon" href="/logo192.png" sizes="192x192" />
    <meta name="theme-color" content="#ffe5ed"/>
    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
    <meta name="bingbot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
    <meta name="description" content={description} />
    <meta name="keywords" content="Metal Health, Child, Baby, Kids, พัฒนาการเด็ก" />
    <link rel="canonical" href={process.env.SITE_URL} />
    <link rel="alternate" type="application/rss+xml" href={`${process.env.SITE_URL}/sitemap.xml`} />
    <meta name="msapplication-navbutton-color" content="#ffe5ed"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
    <meta name="viewport" content="initial-scale=1,user-scalable=no,width=device-width"/>
</Head>)
}
