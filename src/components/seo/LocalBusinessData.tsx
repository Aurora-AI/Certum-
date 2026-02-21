import React from 'react';

export default function LocalBusinessData() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Certum Prime | Representante Autorizado Rodobens",
    "image": "https://certumprime.com.br/assets/Manifesto2.jpeg",
    "@id": "https://certumprime.com.br",
    "url": "https://certumprime.com.br",
    "telephone": "+5517991234567", // Placeholder - Update with real contact if available
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Murchid Homsi, 1404",
      "addressLocality": "São José do Rio Preto",
      "addressRegion": "SP",
      "postalCode": "15013-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -20.8202,
      "longitude": -49.3678
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/certumprime",
      "https://rodobens.com.br"
    ]
  };

  const financialProductData = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Consórcio Rodobens Tradicional e Plano Pontual",
    "description": "Soluções estruturadas de consórcio para imóveis, veículos premium, frotas e agro. Alavancagem patrimonial sem juros abusivos.",
    "brand": {
      "@type": "Brand",
      "name": "Rodobens"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Certum Prime"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductData) }}
      />
    </>
  );
}
