import React, { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string;
  schemaType?: 'Organization' | 'LocalBusiness' | 'Service' | 'Article' | 'FAQPage';
  schemaData?: Record<string, any>;
  ogImage?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  canonicalPath = '',
  schemaType = 'LocalBusiness',
  schemaData,
  ogImage = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title.includes('Webwizia') ? title : `${title} | Webwizia Lahore`;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update meta keywords
    if (keywords && keywords.length > 0) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords.join(', '));
    }

    // Update OpenGraph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    let ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', ogImage);

    // Generate JSON-LD Structured Data
    const baseLocalBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Webwizia',
      'image': ogImage,
      'telephone': siteConfig.phoneFormatted,
      'email': siteConfig.email,
      'url': 'https://webwizia.com',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Office # 5, Brother Plaza, Hall Road',
        'addressLocality': 'Lahore',
        'addressRegion': 'Punjab',
        'postalCode': '54000',
        'addressCountry': 'PK'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '31.5657',
        'longitude': '74.3242'
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        'opens': '09:00',
        'closes': '19:00'
      },
      'sameAs': [
        'https://facebook.com',
        'https://twitter.com',
        'https://linkedin.com'
      ]
    };

    let finalSchema: any = baseLocalBusinessSchema;

    if (schemaType === 'Service' && schemaData) {
      finalSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'serviceType': schemaData.name || title,
        'provider': baseLocalBusinessSchema,
        'description': description,
        'areaServed': {
          '@type': 'City',
          'name': 'Lahore'
        },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': schemaData.name || title,
          'itemListElement': schemaData.offers || []
        }
      };
    } else if (schemaType === 'Article' && schemaData) {
      finalSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': title,
        'description': description,
        'image': ogImage,
        'author': {
          '@type': 'Person',
          'name': schemaData.authorName || 'Muhammad Rafique'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Webwizia',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://webwizia.com/logo.png'
          }
        },
        'datePublished': schemaData.datePublished || '2026-08-20',
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': `https://webwizia.com${canonicalPath}`
        }
      };
    }

    // Append schema script
    let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(finalSchema);
  }, [title, description, keywords, canonicalPath, schemaType, schemaData, ogImage]);

  return null;
};
