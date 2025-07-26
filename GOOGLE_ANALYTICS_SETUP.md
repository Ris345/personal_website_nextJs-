# Google Analytics & SEO Tracking Setup Guide

## Google Analytics 4 Setup

### 1. Create Google Analytics Account
1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Start measuring"
3. Create account: "Rishav Acharya Personal"
4. Create property: "rishavdacharya.dev"
5. Choose industry: "Technology"
6. Select business size: "Small business"

### 2. Get Tracking Code
1. Go to Admin → Data Streams
2. Add stream → Web
3. Website URL: `https://rishavdacharya.dev`
4. Stream name: "Rishav Acharya Website"
5. Copy the Measurement ID (G-XXXXXXXXXX)

### 3. Add to Website
Add this code to your `pages/_document.tsx`:

```tsx
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TCGRVK9" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
      </body>
    </Html>
  )
}
```

## Google Search Console Setup

### 1. Add Property
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://rishavdacharya.dev`
3. Verify ownership (DNS record or HTML tag)

### 2. Submit Sitemap
1. Go to Sitemaps section
2. Add sitemap: `https://rishavdacharya.dev/sitemap.xml`
3. Submit for indexing

### 3. Monitor Performance
- Track search queries
- Monitor click-through rates
- Check indexing status
- Review Core Web Vitals

## SEO Monitoring Tools

### 1. Google PageSpeed Insights
- URL: [pagespeed.web.dev](https://pagespeed.web.dev)
- Test your website performance
- Aim for 90+ scores

### 2. Google Rich Results Test
- URL: [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- Test structured data implementation

### 3. Mobile-Friendly Test
- URL: [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)
- Ensure mobile optimization

### 4. Schema.org Validator
- URL: [validator.schema.org](https://validator.schema.org)
- Validate structured data

## Key Metrics to Track

### Traffic Metrics
- **Organic Sessions**: Visitors from search engines
- **Organic Users**: Unique visitors from search
- **Organic Pageviews**: Total page views from search
- **Bounce Rate**: Percentage of single-page sessions
- **Session Duration**: Average time on site

### SEO Performance
- **Search Impressions**: How often your site appears in search
- **Click-through Rate**: Clicks divided by impressions
- **Average Position**: Average ranking position
- **Top Queries**: Most common search terms

### Technical SEO
- **Core Web Vitals**: LCP, FID, CLS scores
- **Mobile Usability**: Mobile-friendly issues
- **Indexing Status**: Pages indexed by Google
- **Crawl Errors**: Technical issues found by Google

## Monthly SEO Report Template

### Executive Summary
- Total organic traffic: X sessions (+Y% vs last month)
- Top performing keywords
- Key improvements made
- Areas for improvement

### Traffic Analysis
- Organic vs other traffic sources
- Top landing pages
- Geographic distribution
- Device breakdown

### Keyword Performance
- Top 10 ranking keywords
- Keywords that improved/declined
- New keywords ranking
- Long-tail keyword opportunities

### Technical Issues
- Core Web Vitals scores
- Mobile usability issues
- Crawl errors
- Indexing problems

### Content Performance
- Most/least popular pages
- Content gaps identified
- Internal linking opportunities
- Content update recommendations

## Automated Monitoring

### Set up Alerts for:
- Significant traffic drops (>20%)
- New ranking keywords
- Core Web Vitals issues
- Mobile usability problems
- 404 errors
- Server errors

### Weekly Tasks:
- Check Google Search Console for new data
- Review top performing pages
- Monitor competitor movements
- Update content calendar

### Monthly Tasks:
- Complete SEO performance report
- Update keyword strategy
- Technical SEO audit
- Content gap analysis
- Competitor analysis

## Tools & Resources

### Free Tools:
- Google Analytics
- Google Search Console
- Google PageSpeed Insights
- Google Rich Results Test
- Schema.org Validator

### Paid Tools (Optional):
- SEMrush (keyword research)
- Ahrefs (backlink analysis)
- Screaming Frog (technical audit)
- Moz Pro (rank tracking)
- Ubersuggest (keyword suggestions)

## Success Metrics

### 3-Month Goals:
- 25% increase in organic traffic
- Top 50 ranking for "Full Stack Software Engineer"
- 90+ PageSpeed score
- <3 second load time

### 6-Month Goals:
- 50% increase in organic traffic
- Top 20 ranking for target keywords
- 95+ PageSpeed score
- <2 second load time

### 12-Month Goals:
- 100% increase in organic traffic
- Top 10 ranking for primary keywords
- 98+ PageSpeed score
- <1.5 second load time 