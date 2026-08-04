import { style } from '@vanilla-extract/css';

import { vars } from './styles/theme.css';

const reduceMotion = {
  '(prefers-reduced-motion: reduce)': {
    transition: 'none',
    transform: 'none',
  },
} as const;

export const topBar = style({
  height: '4px',
  width: '100%',
  background: vars.gradient.brand,
});

export const skipLink = style({
  position: 'absolute',
  left: vars.space['4'],
  top: vars.space['4'],
  zIndex: 20,
  padding: `${vars.space['2']} ${vars.space['4']}`,
  backgroundColor: vars.colors.primary,
  color: vars.text.inverse,
  borderRadius: vars.radius.base,
  fontWeight: vars.fontWeight.semibold,
  transform: 'translateY(-200%)',
  transition: `transform ${vars.transition.fast}`,
  selectors: {
    '&:focus': {
      transform: 'translateY(0)',
    },
  },
  '@media': reduceMotion,
});

export const container = style({
  width: '100%',
  maxWidth: '1120px',
  marginInline: 'auto',
  paddingInline: vars.space['6'],
});

export const header = style({
  borderBottom: `1px solid ${vars.border.subtle}`,
  backgroundColor: vars.background.surface,
});

export const headerInner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space['4'],
  paddingBlock: vars.space['4'],
});

export const wordmark = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space['2'],
  fontFamily: vars.font.display,
  fontWeight: vars.fontWeight.bold,
  fontSize: vars.fontSize.xl,
  color: vars.text.primary,
});

export const wordmarkMark = style({
  fontSize: vars.fontSize['2xl'],
  lineHeight: vars.lineHeight.tight,
});

export const navLink = style({
  fontWeight: vars.fontWeight.medium,
  color: vars.text.secondary,
  borderRadius: vars.radius.base,
  padding: `${vars.space['1']} ${vars.space['2']}`,
  selectors: {
    '&:hover': { color: vars.colors.primary },
    '&:focus-visible': {
      outline: `2px solid ${vars.colors.primary}`,
      outlineOffset: '2px',
    },
  },
});

export const main = style({});

const ctaBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space['2'],
  paddingBlock: vars.space['3'],
  paddingInline: vars.space['6'],
  borderRadius: vars.radius.full,
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.tight,
  cursor: 'pointer',
  transition: `transform ${vars.transition.fast}, box-shadow ${vars.transition.fast}, background-color ${vars.transition.fast}`,
  selectors: {
    '&:focus-visible': {
      outline: `2px solid ${vars.colors.primary}`,
      outlineOffset: '3px',
    },
  },
  '@media': reduceMotion,
});

export const primaryCta = style([
  ctaBase,
  {
    background: vars.gradient.primary,
    color: vars.text.inverse,
    boxShadow: vars.shadow.md,
    selectors: {
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: vars.shadow.lg,
      },
    },
  },
]);

export const secondaryCta = style([
  ctaBase,
  {
    backgroundColor: vars.background.surface,
    color: vars.text.primary,
    border: `1px solid ${vars.border.strong}`,
    selectors: {
      '&:hover': {
        transform: 'translateY(-2px)',
        borderColor: vars.colors.primary,
        color: vars.colors.primary,
      },
    },
  },
]);

export const primaryCtaOnDark = style([
  primaryCta,
  {
    boxShadow: 'none',
  },
]);

export const hero = style({
  position: 'relative',
  textAlign: 'center',
  paddingBlock: vars.space['24'],
  background: `radial-gradient(70% 60% at 50% 0%, ${vars.colors.primaryBgSubtle} 0%, rgba(255, 255, 255, 0) 70%), ${vars.background.page}`,
});

export const eyebrow = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space['2'],
  paddingBlock: vars.space['1'],
  paddingInline: vars.space['3'],
  marginBottom: vars.space['6'],
  borderRadius: vars.radius.full,
  backgroundColor: vars.colors.primaryBgSubtle,
  color: vars.colors.primaryActive,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
});

export const heroTitle = style({
  maxWidth: '18ch',
  marginInline: 'auto',
  fontFamily: vars.font.display,
  fontWeight: vars.fontWeight.bold,
  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
  lineHeight: vars.lineHeight.tight,
  letterSpacing: '-0.02em',
  color: vars.text.primary,
});

export const heroSubtitle = style({
  maxWidth: '52ch',
  marginInline: 'auto',
  marginTop: vars.space['6'],
  fontSize: vars.fontSize.xl,
  color: vars.text.secondary,
});

export const ctaRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: vars.space['4'],
  marginTop: vars.space['10'],
});

export const ctaNote = style({
  marginTop: vars.space['5'],
  fontSize: vars.fontSize.sm,
  color: vars.text.tertiary,
});

export const section = style({
  paddingBlock: vars.space['24'],
  backgroundColor: vars.background.page,
});

export const sectionAlt = style({
  paddingBlock: vars.space['24'],
  backgroundColor: vars.background.subtle,
});

export const sectionTitle = style({
  fontFamily: vars.font.display,
  fontWeight: vars.fontWeight.bold,
  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
  lineHeight: vars.lineHeight.snug,
  textAlign: 'center',
  color: vars.text.primary,
});

export const cardGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: vars.space['6'],
  marginTop: vars.space['12'],
});

export const card = style({
  padding: vars.space['8'],
  backgroundColor: vars.background.surface,
  border: `1px solid ${vars.border.subtle}`,
  borderRadius: vars.radius['2xl'],
  boxShadow: vars.shadow.sm,
  transition: `transform ${vars.transition.base}, box-shadow ${vars.transition.base}`,
  selectors: {
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: vars.shadow.md,
    },
  },
  '@media': reduceMotion,
});

export const cardIcon = style({
  fontSize: '2rem',
  lineHeight: vars.lineHeight.tight,
});

export const cardTitle = style({
  marginTop: vars.space['4'],
  fontFamily: vars.font.display,
  fontWeight: vars.fontWeight.semibold,
  fontSize: vars.fontSize['2xl'],
  color: vars.text.primary,
});

export const cardBody = style({
  marginTop: vars.space['3'],
  color: vars.text.secondary,
});

export const steps = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: vars.space['8'],
  marginTop: vars.space['12'],
});

export const step = style({
  textAlign: 'center',
});

export const stepNumber = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '3rem',
  height: '3rem',
  marginInline: 'auto',
  marginBottom: vars.space['4'],
  borderRadius: vars.radius.full,
  background: vars.gradient.primary,
  color: vars.text.inverse,
  fontFamily: vars.font.display,
  fontWeight: vars.fontWeight.bold,
  fontSize: vars.fontSize.xl,
});

export const rescueBand = style({
  paddingBlock: vars.space['24'],
  backgroundColor: vars.background.inverse,
  color: vars.text.inverse,
  textAlign: 'center',
});

export const bandTitle = style({
  fontFamily: vars.font.display,
  fontWeight: vars.fontWeight.bold,
  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
  color: vars.text.inverse,
});

export const bandBody = style({
  maxWidth: '52ch',
  marginInline: 'auto',
  marginTop: vars.space['5'],
  marginBottom: vars.space['10'],
  fontSize: vars.fontSize.lg,
  color: 'rgba(255, 255, 255, 0.78)',
});

export const finalCta = style({
  paddingBlock: vars.space['24'],
  backgroundColor: vars.background.page,
  textAlign: 'center',
});

export const finalBody = style({
  maxWidth: '46ch',
  marginInline: 'auto',
  marginTop: vars.space['5'],
  marginBottom: vars.space['10'],
  fontSize: vars.fontSize.lg,
  color: vars.text.secondary,
});

export const footer = style({
  paddingBlock: vars.space['12'],
  backgroundColor: vars.background.inverse,
  color: 'rgba(255, 255, 255, 0.72)',
});

export const footerInner = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space['4'],
});

export const footerWordmark = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space['2'],
  fontFamily: vars.font.display,
  fontWeight: vars.fontWeight.semibold,
  fontSize: vars.fontSize.lg,
  color: vars.text.inverse,
});

export const footerLink = style({
  color: vars.colors.accentSky,
  fontWeight: vars.fontWeight.medium,
  borderRadius: vars.radius.base,
  selectors: {
    '&:hover': { textDecoration: 'underline' },
    '&:focus-visible': {
      outline: `2px solid ${vars.colors.accentSky}`,
      outlineOffset: '2px',
    },
  },
});

export const footerMeta = style({
  width: '100%',
  marginTop: vars.space['4'],
  fontSize: vars.fontSize.sm,
  color: 'rgba(255, 255, 255, 0.55)',
});
