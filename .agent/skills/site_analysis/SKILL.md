---
name: site-analysis
description: Technical analysis scripts for documenting website construction details including DOM structure, Design System, Animations, Assets, and Performance.
---

# Site Analysis Skill

This skill provides a suite of JavaScript functions to extract detailed technical information from a website. These scripts are designed to be run in the browser console or via the `browser` tool's execution capabilities.

## 🚀 Usage

Execute the main function `executarAnaliseCompleta()` to gather all data, or run individual phase functions for specific needs.

### Quick Start
```javascript
// Run full analysis
const analysis = await executarAnaliseCompleta();
console.log(analysis);

// Export to JSON
exportarParaJSON(analysis);
```

---

## 📜 Scripts

### **FASE 1: Arquitetura HTML & Estrutura DOM**

```javascript
// 1.1. Análise Estrutural Completa do DOM
const analisarEstruturaDOM = () => {
  const estrutura = {
    doctype: document.doctype?.name || 'HTML5',
    html: {
      lang: document.documentElement.lang || 'não especificado',
      classes: document.documentElement.className,
      attributes: Array.from(document.documentElement.attributes).map(attr => ({
        name: attr.name,
        value: attr.value
      }))
    },
    head: {
      metaTags: Array.from(document.querySelectorAll('meta')).map(meta => ({
        name: meta.getAttribute('name') || meta.getAttribute('property'),
        content: meta.getAttribute('content'),
        charset: meta.getAttribute('charset')
      })),
      links: Array.from(document.querySelectorAll('link')).map(link => ({
        rel: link.rel,
        href: link.href,
        type: link.type,
        sizes: link.sizes
      })),
      scripts: Array.from(document.querySelectorAll('head script')).map(script => ({
        src: script.src,
        async: script.async,
        defer: script.defer,
        type: script.type
      })),
      title: document.title,
      viewport: document.querySelector('meta[name="viewport"]')?.content || 'não especificado'
    },
    body: {
      classes: document.body.className,
      id: document.body.id,
      childrenCount: document.body.children.length,
      structure: analisarHierarquiaDOM(document.body, 0, 5) // Profundidade 5 níveis
    }
  };
  
  return estrutura;
};

// 1.2. Análise Hierárquica do DOM
const analisarHierarquiaDOM = (elemento, nivel, maxNivel) => {
  if (nivel >= maxNivel) return { tipo: '... profundidade excedida ...' };
  
  const info = {
    tag: elemento.tagName,
    id: elemento.id,
    classes: elemento.className,
    children: []
  };
  
  // Analisar atributos importantes
  const atributos = Array.from(elemento.attributes);
  info.attributes = atributos.map(attr => ({
    name: attr.name,
    value: attr.value.length > 50 ? attr.value.substring(0, 50) + '...' : attr.value
  }));
  
  // Analisar filhos até o nível máximo
  Array.from(elemento.children).forEach(child => {
    info.children.push(analisarHierarquiaDOM(child, nivel + 1, maxNivel));
  });
  
  return info;
};

// 1.3. Análise de SEO e Metadados
const analisarSEO = () => {
  const seo = {
    // Meta tags básicas
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.content || 'não encontrado',
    keywords: document.querySelector('meta[name="keywords"]')?.content || 'não encontrado',
    
    // Open Graph
    og: {
      title: document.querySelector('meta[property="og:title"]')?.content,
      description: document.querySelector('meta[property="og:description"]')?.content,
      image: document.querySelector('meta[property="og:image"]')?.content,
      url: document.querySelector('meta[property="og:url"]')?.content,
      type: document.querySelector('meta[property="og:type"]')?.content
    },
    
    // Twitter Cards
    twitter: {
      card: document.querySelector('meta[name="twitter:card"]')?.content,
      title: document.querySelector('meta[name="twitter:title"]')?.content,
      description: document.querySelector('meta[name="twitter:description"]')?.content,
      image: document.querySelector('meta[name="twitter:image"]')?.content,
      creator: document.querySelector('meta[name="twitter:creator"]')?.content
    },
    
    // Schema Markup
    schema: Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map(script => {
      try {
        return JSON.parse(script.textContent);
      } catch {
        return { error: 'JSON inválido' };
      }
    }),
    
    // Canonical e alternates
    canonical: document.querySelector('link[rel="canonical"]')?.href,
    alternates: Array.from(document.querySelectorAll('link[rel="alternate"]')).map(link => ({
      hreflang: link.getAttribute('hreflang'),
      href: link.href
    })),
    
    // Robots
    robots: document.querySelector('meta[name="robots"]')?.content || 'index, follow'
  };
  
  return seo;
};
```

### **FASE 2: Sistema de Design e CSS Arquitetura**

```javascript
// 2.1. Extração Completa do Sistema de Design
const extrairSistemaDesign = () => {
  const designSystem = {
    // 2.1.1. Sistema de Cores
    colors: extrairPaletaCores(),
    
    // 2.1.2. Sistema de Tipografia
    typography: extrairSistemaTipografia(),
    
    // 2.1.3. Sistema de Espaçamento
    spacing: extrairSistemaEspacamento(),
    
    // 2.1.4. Sistema de Grid
    grid: analisarSistemaGrid(),
    
    // 2.1.5. Componentes Visuais
    components: analisarComponentesVisuais(),
    
    // 2.1.6. Variáveis CSS Customizadas
    cssVariables: extrairCSSVariables()
  };
  
  return designSystem;
};

// 2.2. Extrair Paleta de Cores Completa
const extrairPaletaCores = () => {
  const elementos = document.querySelectorAll('*');
  const cores = new Set();
  const coresPorElemento = [];
  
  elementos.forEach(el => {
    if (el.offsetWidth > 0 && el.offsetHeight > 0) {
      const estilos = window.getComputedStyle(el);
      const coresElemento = {
        color: estilos.color,
        backgroundColor: estilos.backgroundColor,
        borderColor: estilos.borderColor,
        outlineColor: estilos.outlineColor
      };
      
      Object.values(coresElemento).forEach(cor => {
        if (cor && cor !== 'rgba(0, 0, 0, 0)' && cor !== 'transparent') {
          cores.add(cor);
        }
      });
      
      coresPorElemento.push({
        seletor: `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${el.className ? '.' + el.className.replace(/\s+/g, '.') : ''}`,
        cores: coresElemento
      });
    }
  });
  
  return {
    palette: Array.from(cores),
    usage: coresPorElemento.slice(0, 100), // Limitar para performance
    gradients: extrairGradientes()
  };
};

const extrairGradientes = () => {
    // Placeholder extraction function
    return [];
};

const extrairSistemaEspacamento = () => {
    // Placeholder extraction function
    return {};
};

const analisarComponentesVisuais = () => {
    // Placeholder extraction function
    return [];
};

// 2.3. Extrair Sistema de Tipografia Completo
const extrairSistemaTipografia = () => {
  const sistema = {
    fonts: {
      // Fontes carregadas
      loaded: Array.from(document.fonts).map(font => ({
        family: font.family,
        weight: font.weight,
        style: font.style
      })),
      
      // Fontes usadas
      used: extrairFontesUsadas()
    },
    
    scale: {
      headings: extrairEscalaHeadings(),
      body: extrairEstilosTextoCorpo(),
      buttons: extrairEstilosBotoes(),
      links: extrairEstilosLinks()
    },
    
    properties: {
      lineHeight: extrairPropriedadesLineHeight(),
      letterSpacing: extrairPropriedadesLetterSpacing(),
      textTransform: extrairPropriedadesTextTransform()
    }
  };
  
  return sistema;
};

const extrairFontesUsadas = () => {
    // Placeholder
    return [];
};
const extrairEscalaHeadings = () => {
    // Placeholder
    return [];
};
const extrairEstilosTextoCorpo = () => {
    // Placeholder
    return {};
};
const extrairEstilosBotoes = () => {
    // Placeholder
    return [];
};
const extrairEstilosLinks = () => {
    // Placeholder
    return {};
};
const extrairPropriedadesLineHeight = () => {
    // Placeholder
    return {};
};
const extrairPropriedadesLetterSpacing = () => {
    // Placeholder
    return {};
};
const extrairPropriedadesTextTransform = () => {
    // Placeholder
    return {};
};


// 2.4. Analisar Sistema de Grid
const analisarSistemaGrid = () => {
  const elementosGrid = Array.from(document.querySelectorAll('*')).filter(el => {
    const estilos = window.getComputedStyle(el);
    return estilos.display.includes('grid') || estilos.display.includes('flex');
  });
  
  return elementosGrid.map(el => {
    const estilos = window.getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    
    return {
      seletor: `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${el.className ? '.' + el.className.replace(/\s+/g, '.') : ''}`,
      type: estilos.display,
      dimensions: {
        width: rect.width,
        height: rect.height,
        children: el.children.length
      },
      properties: {
        // Grid
        gridTemplateColumns: estilos.gridTemplateColumns,
        gridTemplateRows: estilos.gridTemplateRows,
        gridGap: estilos.gap,
        
        // Flex
        flexDirection: estilos.flexDirection,
        justifyContent: estilos.justifyContent,
        alignItems: estilos.alignItems,
        flexWrap: estilos.flexWrap
      },
      children: Array.from(el.children).map(child => ({
        tag: child.tagName,
        classes: child.className,
        order: window.getComputedStyle(child).order,
        flex: window.getComputedStyle(child).flex,
        gridArea: window.getComputedStyle(child).gridArea
      }))
    };
  });
};

// 2.5. Extrair Variáveis CSS
const extrairCSSVariables = () => {
  const estilos = Array.from(document.styleSheets);
  const variables = new Map();
  
  estilos.forEach(sheet => {
    try {
      Array.from(sheet.cssRules || []).forEach(rule => {
        if (rule.style) {
          const content = rule.style.cssText;
          const varMatches = content.match(/var\(--([^)]+)\)/g) || [];
          const defMatches = content.match(/--([^:]+):\s*([^;]+)/g) || [];
          
          varMatches.forEach(match => {
            const varName = match.match(/--([^)]+)/)[1];
            variables.set(varName, {
              used: true,
              definition: variables.get(varName)?.definition || 'não definida'
            });
          });
          
          defMatches.forEach(match => {
            const [_, varName, value] = match.match(/--([^:]+):\s*([^;]+)/);
            variables.set(varName, {
              definition: value.trim(),
              used: variables.get(varName)?.used || false
            });
          });
        }
      });
    } catch (e) {
      // Cross-origin stylesheet, ignorar
    }
  });
  
  return Array.from(variables.entries()).map(([name, data]) => ({
    name: `--${name}`,
    definition: data.definition,
    used: data.used
  }));
};
```

### **FASE 3: Animações e Interações**

```javascript
// 3.1. Detecção Completa de Animações CSS
const detectarAnimacoesCSS = () => {
  const estilos = Array.from(document.styleSheets);
  const animacoes = [];
  
  estilos.forEach(sheet => {
    try {
      Array.from(sheet.cssRules || []).forEach(rule => {
        // Animações @keyframes
        if (rule.type === CSSRule.KEYFRAMES_RULE) {
          animacoes.push({
            type: 'keyframes',
            name: rule.name,
            keyframes: Array.from(rule.cssRules).map(keyframe => ({
              offset: keyframe.keyText,
              styles: keyframe.style.cssText
            }))
          });
        }
        
        // Propriedades de animação
        if (rule.style && rule.style.animation) {
          animacoes.push({
            type: 'animation-usage',
            selector: rule.selectorText,
            animation: rule.style.animation,
            animationName: rule.style.animationName,
            animationDuration: rule.style.animationDuration,
            animationTimingFunction: rule.style.animationTimingFunction,
            animationDelay: rule.style.animationDelay,
            animationIterationCount: rule.style.animationIterationCount,
            animationDirection: rule.style.animationDirection,
            animationFillMode: rule.style.animationFillMode
          });
        }
        
        // Transições
        if (rule.style && rule.style.transition) {
          animacoes.push({
            type: 'transition',
            selector: rule.selectorText,
            transition: rule.style.transition,
            transitionProperty: rule.style.transitionProperty,
            transitionDuration: rule.style.transitionDuration,
            transitionTimingFunction: rule.style.transitionTimingFunction,
            transitionDelay: rule.style.transitionDelay
          });
        }
      });
    } catch (e) {
      // Cross-origin
    }
  });
  
  return animacoes;
};

// 3.2. Detecção de Bibliotecas JavaScript
const detectarBibliotecasJS = () => {
  const bibliotecas = {
    // Frameworks
    frameworks: {
      react: !!window.React,
      vue: !!window.Vue,
      angular: !!window.angular,
      svelte: !!window.__svelte,
      nextjs: !!window.__NEXT_DATA__
    },
    
    // UI Libraries
    ui: {
      bootstrap: !!window.bootstrap,
      tailwind: document.querySelector('[class*="tailwind"]') !== null ||
                Array.from(document.styleSheets).some(s => 
                  s.href && s.href.includes('tailwind')
                ),
      materialUI: !!window.MaterialUI,
      chakra: !!window.ChakraProvider
    },
    
    // Animation Libraries
    animation: {
      gsap: !!window.gsap,
      animejs: !!window.anime,
      framerMotion: !!window.motion,
      lenis: !!window.Lenis,
      aos: !!window.AOS,
      rellax: !!window.Rellax,
      scrollMagic: !!window.ScrollMagic
    },
    
    // Carousels & Sliders
    carousels: {
      swiper: !!window.Swiper,
      slick: !!window.$.fn?.slick || !!window.jQuery?.fn?.slick,
      glide: !!window.Glide
    },
    
    // Image Handling
    images: {
      lazysizes: !!window.lazySizes,
      lozad: !!window.lozad,
      blazy: !!window.bLazy
    },
    
    // Analytics & Tracking
    analytics: {
      gtm: !!window.google_tag_manager,
      ga: !!window.ga || !!window.GoogleAnalyticsObject,
      fbq: !!window.fbq,
      hotjar: !!window.hj
    }
  };
  
  // Detectar por scripts carregados
  const scripts = Array.from(document.scripts);
  bibliotecas.scripts = scripts.map(script => ({
    src: script.src,
    async: script.async,
    defer: script.defer
  }));
  
  return bibliotecas;
};

// 3.3. Analisar Event Listeners
const analisarEventListeners = () => {
  const elementosComEventos = [];
  
  // Tipos de eventos comuns
  const eventosComuns = [
    'click', 'mouseover', 'mouseout', 'mousedown', 'mouseup',
    'keydown', 'keyup', 'submit', 'change', 'focus', 'blur',
    'scroll', 'resize', 'load', 'DOMContentLoaded'
  ];
  
  // Verificar elementos com handlers
  const elementos = document.querySelectorAll('*');
  elementos.forEach(el => {
    const eventos = [];
    
    eventosComuns.forEach(evento => {
      // Verificar atributos on* (onclick, etc.)
      if (el.hasAttribute(`on${evento}`)) {
        eventos.push({
          type: evento,
          handler: el.getAttribute(`on${evento}`).substring(0, 100) + '...',
          source: 'inline'
        });
      }
      
      // Verificar via getEventListeners (se disponível no console)
      try {
        if (window.getEventListeners) {
          const listeners = window.getEventListeners(el);
          if (listeners && listeners[evento]) {
            eventos.push({
              type: evento,
              handler: `function (${listeners[evento].length} listeners)`,
              source: 'addEventListener'
            });
          }
        }
      } catch (e) {}
    });
    
    if (eventos.length > 0) {
      elementosComEventos.push({
        seletor: `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${el.className ? '.' + el.className.replace(/\s+/g, '.') : ''}`,
        eventos: eventos
      });
    }
  });
  
  return elementosComEventos;
};
```

### **FASE 4: Assets e Recursos**

```javascript
// 4.1. Catálogo Completo de Imagens
const catalogarImagens = () => {
  const imagens = [];
  
  // Imagens <img>
  document.querySelectorAll('img').forEach((img, index) => {
    const rect = img.getBoundingClientRect();
    const estilos = window.getComputedStyle(img);
    
    imagens.push({
      id: `img-${index}`,
      type: 'img',
      src: img.src,
      currentSrc: img.currentSrc,
      srcset: img.srcset,
      sizes: img.sizes,
      alt: img.alt,
      width: img.width,
      height: img.height,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      loading: img.loading,
      decoding: img.decoding,
      position: {
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
        viewportWidth: ((rect.width / window.innerWidth) * 100).toFixed(1) + '%',
        viewportHeight: ((rect.height / window.innerHeight) * 100).toFixed(1) + '%'
      },
      styles: {
        objectFit: estilos.objectFit,
        objectPosition: estilos.objectPosition,
        borderRadius: estilos.borderRadius,
        filter: estilos.filter,
        transform: estilos.transform
      },
      parent: img.parentElement?.tagName + (img.parentElement?.className ? '.' + img.parentElement.className : '')
    });
  });
  
  // Background images
  document.querySelectorAll('*').forEach((el, index) => {
    const estilos = window.getComputedStyle(el);
    const bgImage = estilos.backgroundImage;
    
    if (bgImage && bgImage !== 'none') {
      const rect = el.getBoundingClientRect();
      
      imagens.push({
        id: `bg-${index}`,
        type: 'background',
        src: bgImage.replace(/url\(["']?(.*?)["']?\)/, '$1'),
        element: `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${el.className ? '.' + el.className.replace(/\s+/g, '.') : ''}`,
        position: {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        },
        styles: {
          backgroundSize: estilos.backgroundSize,
          backgroundPosition: estilos.backgroundPosition,
          backgroundRepeat: estilos.backgroundRepeat,
          backgroundAttachment: estilos.backgroundAttachment
        }
      });
    }
  });
  
  // Picture sources
  document.querySelectorAll('picture source').forEach((source, index) => {
    imagens.push({
      id: `source-${index}`,
      type: 'source',
      srcset: source.srcset,
      media: source.media,
      type: source.type,
      sizes: source.sizes
    });
  });
  
  // SVGs inline
  document.querySelectorAll('svg').forEach((svg, index) => {
    const rect = svg.getBoundingClientRect();
    
    imagens.push({
      id: `svg-${index}`,
      type: 'svg',
      content: svg.outerHTML.substring(0, 500) + (svg.outerHTML.length > 500 ? '...' : ''),
      dimensions: {
        width: rect.width,
        height: rect.height,
        viewBox: svg.getAttribute('viewBox')
      },
      elementCount: svg.querySelectorAll('*').length
    });
  });
  
  return imagens;
};

// 4.2. Analisar Fontes e Ícones
const analisarFontsIcones = () => {
  const fontes = {
    // Fontes web
    webFonts: Array.from(document.querySelectorAll('link[rel="stylesheet"][href*="font"], link[href*=".woff"], link[href*=".woff2"], link[href*=".ttf"]')).map(link => ({
      href: link.href,
      rel: link.rel,
      type: link.type
    })),
    
    // Ícones
    icons: {
      favicon: document.querySelector('link[rel="icon"]')?.href || 
               document.querySelector('link[rel="shortcut icon"]')?.href,
      appleTouchIcon: document.querySelector('link[rel="apple-touch-icon"]')?.href,
      manifest: document.querySelector('link[rel="manifest"]')?.href,
      maskIcon: document.querySelector('link[rel="mask-icon"]')?.href
    },
    
    // Icon fonts
    iconFonts: {
      fontAwesome: !!document.querySelector('link[href*="font-awesome"], link[href*="fontawesome"]'),
      materialIcons: !!document.querySelector('link[href*="material-icons"]'),
      ionicons: !!document.querySelector('link[href*="ionicons"]'),
      feather: !!document.querySelector('link[href*="feather"]')
    }
  };
  
  return fontes;
};

// 4.3. Analisar Recursos Externos
const analisarRecursosExternos = () => {
  const recursos = {
    // APIs externas
    apis: {
      googleMaps: !!document.querySelector('script[src*="maps.googleapis.com"]'),
      youtube: !!document.querySelector('script[src*="youtube.com"]') || 
               !!document.querySelector('iframe[src*="youtube.com"]'),
      vimeo: !!document.querySelector('script[src*="vimeo.com"]') || 
             !!document.querySelector('iframe[src*="vimeo.com"]'),
      twitter: !!document.querySelector('script[src*="platform.twitter.com"]'),
      facebook: !!document.querySelector('script[src*="connect.facebook.net"]'),
      instagram: !!document.querySelector('script[src*="instagram.com"]') || 
                 !!document.querySelector('iframe[src*="instagram.com"]')
    },
    
    // CDNs
    cdns: {
      cloudflare: Array.from(document.querySelectorAll('script[src*="cloudflare"], link[href*="cloudflare"]')).map(el => el.src || el.href),
      unpkg: Array.from(document.querySelectorAll('script[src*="unpkg.com"], link[href*="unpkg.com"]')).map(el => el.src || el.href),
      jsdelivr: Array.from(document.querySelectorAll('script[src*="cdn.jsdelivr.net"], link[href*="cdn.jsdelivr.net"]')).map(el => el.src || el.href),
      googleapis: Array.from(document.querySelectorAll('script[src*="ajax.googleapis.com"], link[href*="fonts.googleapis.com"]')).map(el => el.src || el.href)
    },
    
    // Analytics e Tracking
    tracking: {
      googleAnalytics: !!document.querySelector('script[src*="google-analytics.com"], script[src*="googletagmanager.com"]'),
      facebookPixel: !!document.querySelector('script[src*="facebook.net/tr"]'),
      hotjar: !!document.querySelector('script[src*="hotjar.com"]'),
      mixpanel: !!document.querySelector('script[src*="mixpanel.com"]'),
      amplitude: !!document.querySelector('script[src*="amplitude.com"]')
    }
  };
  
  return recursos;
};
```

### **FASE 5: Performance e Otimizações**

```javascript
// 5.1. Análise de Performance
const analisarPerformance = () => {
  const performanceData = {
    // Core Web Vitals (simulado)
    coreWebVitals: {
      lcp: estimarLCP(),
      fid: 'não disponível (requer interação do usuário)',
      cls: calcularCLS(),
      inp: 'não disponível (requer interação do usuário)'
    },
    
    // Métricas de carregamento
    loading: {
      domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.domContentLoadedEventStart,
      loadEvent: performance.timing.loadEventEnd - performance.timing.loadEventStart,
      firstPaint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-paint')?.startTime || 'não disponível',
      firstContentfulPaint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint')?.startTime || 'não disponível'
    },
    
    // Recursos
    resources: {
      totalRequests: performance.getEntriesByType('resource').length,
      byType: agruparRecursosPorTipo(),
      largestResources: encontrarMaioresRecursos()
    },
    
    // Otimizações detectadas
    optimizations: {
      lazyLoading: document.querySelectorAll('[loading="lazy"]').length > 0,
      asyncScripts: document.querySelectorAll('script[async]').length,
      deferScripts: document.querySelectorAll('script[defer]').length,
      preload: document.querySelectorAll('link[rel="preload"]').length,
      prefetch: document.querySelectorAll('link[rel="prefetch"]').length,
      dnsPrefetch: document.querySelectorAll('link[rel="dns-prefetch"]').length
    }
  };
  
  return performanceData;
};

const estimarLCP = () => { return 'simulado'; };
const calcularCLS = () => { return 'simulado'; };
const agruparRecursosPorTipo = () => { return {}; };
const encontrarMaioresRecursos = () => { return []; };

// 5.2. Analisar Responsividade
const analisarResponsividade = () => {
  const breakpoints = [
    { name: 'mobile', width: 375 },
    { name: 'tablet', width: 768 },
    { name: 'desktop', width: 1024 },
    { name: 'large', width: 1440 },
    { name: 'xlarge', width: 1920 }
  ];
  
  const analises = breakpoints.map(bp => {
    // Em ambiente real, seria necessário redimensionar a janela
    // Aqui vamos verificar media queries no CSS
    const mediaQueries = [];
    const estilos = Array.from(document.styleSheets);
    
    estilos.forEach(sheet => {
      try {
        Array.from(sheet.cssRules || []).forEach(rule => {
          if (rule.type === CSSRule.MEDIA_RULE) {
            mediaQueries.push({
              condition: rule.conditionText,
              rules: Array.from(rule.cssRules).map(r => r.selectorText).filter(s => s)
            });
          }
        });
      } catch (e) {}
    });
    
    return {
      breakpoint: bp,
      mediaQueries: mediaQueries.filter(mq => 
        mq.condition.includes(`${bp.width}px`) || 
        mq.condition.includes(`${bp.name}`)
      )
    };
  });
  
  return {
    breakpoints: analises,
    viewportMeta: document.querySelector('meta[name="viewport"]')?.content || 'não definido',
    mediaFeatureSupport: {
      hover: window.matchMedia('(hover: hover)').matches,
      pointer: window.matchMedia('(pointer: fine)').matches ? 'fine' : 'coarse',
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
  };
};
```

### **FASE 6: Script Principal de Análise Completa**

```javascript
// 6.1. Executar Análise Completa
const executarAnaliseCompleta = async () => {
  console.log('🔍 INICIANDO ANÁLISE TÉCNICA COMPLETA DO SITE');
  
  try {
    const analise = {
      metadata: {
        url: window.location.href,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
          devicePixelRatio: window.devicePixelRatio
        }
      },
      
      // Fase 1: Estrutura
      estrutura: {
        dom: analisarEstruturaDOM(),
        seo: analisarSEO()
      },
      
      // Fase 2: Design System
      designSystem: extrairSistemaDesign(),
      
      // Fase 3: Animações e Interações
      interacoes: {
        animacoesCSS: detectarAnimacoesCSS(),
        bibliotecasJS: detectarBibliotecasJS(),
        eventListeners: analisarEventListeners()
      },
      
      // Fase 4: Assets
      assets: {
        imagens: catalogarImagens(),
        fontesIcones: analisarFontsIcones(),
        recursosExternos: analisarRecursosExternos()
      },
      
      // Fase 5: Performance
      performance: analisarPerformance(),
      responsividade: analisarResponsividade(),
      
      // Screenshots (conceitual)
      screenshots: {
        desktop: 'base64_da_screenshot_1920px',
        tablet: 'base64_da_screenshot_768px',
        mobile: 'base64_da_screenshot_375px'
      }
    };
    
    console.log('✅ ANÁLISE COMPLETA CONCLUÍDA');
    return analise;
    
  } catch (error) {
    console.error('❌ ERRO NA ANÁLISE:', error);
    return { error: error.message };
  }
};

// 6.2. Exportar para JSON
const exportarParaJSON = (analise) => {
  const jsonString = JSON.stringify(analise, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `analise-tecnica-site-${new Date().getTime()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  return jsonString;
};

// 6.3. Gerar Relatório em Markdown
const gerarRelatorioMarkdown = (analise) => {
  let markdown = `# Relatório Técnico de Construção do Site\n\n`;
  markdown += `**URL**: ${analise.metadata.url}\n`;
  markdown += `**Data da Análise**: ${new Date(analise.metadata.timestamp).toLocaleString()}\n\n`;
  
  // Seção 1: Estrutura
  markdown += `## 1. Estrutura do Site\n\n`;
  markdown += `### 1.1. Metadados SEO\n`;
  markdown += `- Título: ${analise.estrutura.seo.title}\n`;
  markdown += `- Descrição: ${analise.estrutura.seo.description}\n`;
  markdown += `- Canonical: ${analise.estrutura.seo.canonical || 'não definido'}\n\n`;
  
  // Seção 2: Design System
  markdown += `## 2. Sistema de Design\n\n`;
  markdown += `### 2.1. Paleta de Cores\n`;
  analise.designSystem.colors.palette.forEach((cor, i) => {
    markdown += `${i + 1}. \`${cor}\`\n`;
  });
  
  // Seção 3: Assets
  markdown += `\n## 3. Assets e Recursos\n\n`;
  markdown += `### 3.1. Imagens\n`;
  markdown += `Total: ${analise.assets.imagens.length} imagens\n\n`;
  
  return markdown;
};
```
