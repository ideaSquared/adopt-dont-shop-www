import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

// Brand tokens mirrored from the Adopt Don't Shop design system
// (packages/lib.components/src/styles/colors.ts). Kept local so this static
// site stays self-contained and independently deployable. When this page is
// folded into the monorepo as `app.marketing`, swap these for the shared
// `vars` from lib.components — the token names are chosen to line up.
export const vars = createGlobalTheme(':root', {
  colors: {
    primary: '#F43F5E',
    primaryHover: '#E11D48',
    primaryActive: '#BE123C',
    primaryBgSubtle: '#FFE4E6',
    secondary: '#14B8A6',
    accentPaw: '#FF6B35',
    accentSky: '#38BDF8',
    accentLeaf: '#22C55E',
  },
  text: {
    primary: '#1E293B',
    secondary: '#475569',
    tertiary: '#64748B',
    inverse: '#FFFFFF',
  },
  background: {
    page: '#FAF7F2',
    surface: '#FFFFFF',
    subtle: '#F2EBDF',
    inverse: '#0F172A',
  },
  border: {
    subtle: '#E7E1D6',
    strong: '#CBD5E1',
  },
  gradient: {
    brand: 'linear-gradient(135deg, #38BDF8 0%, #F43F5E 55%, #FF6B35 100%)',
    primary: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)',
  },
  font: {
    sans: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    display: "'Fredoka', 'Inter', ui-sans-serif, system-ui, sans-serif",
    serif: "'Playfair Display', ui-serif, Georgia, 'Times New Roman', serif",
  },
  fontSize: {
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    tight: '1.15',
    snug: '1.3',
    normal: '1.6',
  },
  space: {
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
  },
  radius: {
    sm: '0.375rem',
    base: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.08)',
    md: '0 4px 6px rgba(15, 23, 42, 0.05), 0 10px 24px rgba(15, 23, 42, 0.09)',
    lg: '0 24px 48px rgba(15, 23, 42, 0.14)',
  },
  transition: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  WebkitTextSizeAdjust: '100%',
  scrollBehavior: 'smooth',
});

globalStyle('body', {
  margin: 0,
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.base,
  lineHeight: vars.lineHeight.normal,
  color: vars.text.primary,
  backgroundColor: vars.background.page,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('h1, h2, h3, p, figure', {
  margin: 0,
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('ul, ol', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

globalStyle('img, svg', {
  display: 'block',
  maxWidth: '100%',
});
