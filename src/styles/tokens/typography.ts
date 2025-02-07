import colors from './colors';

const typography = {
    font: {
        default: "'Open Sans', sans-serif",
        heading: "'Poppins', sans-serif",
        branding: 'Montserrat, sans-serif',
    },
    colors: {
        constrast: colors.white.medium,
        default: colors.neutral.dark,
        heavy: colors.neutral.darkest,
        subtle: colors.neutral.medium,
        primary: colors.primary.medium,
        highlight: colors.highlight.medium,
        success: colors.success.medium,
        error: colors.error.medium,
        danger: colors.danger.medium,
        warning: colors.warning.medium,
        info: colors.info.medium,
        white: colors.white.medium,
    },
    contrastColors: {
        default: colors.white.medium,
        heavy: colors.white.medium,
        subtle: colors.white.medium,
        primary: colors.white.medium,
        highlight: colors.white.medium,
        success: colors.white.medium,
        error: colors.white.medium,
        danger: colors.white.medium,
        warning: colors.neutral.medium,
        info: colors.white.medium,
        white: colors.neutral.darkest,
        neutral: colors.neutral.darkest,
    },
    sizing: {
        xsmall: '10px',
        small: '12px',
        medium: '14px',
        large: '16px',
        xlarge: '20px',
        xxlarge: '24px',
        xxxlarge: '32px',
        xxxxlarge: '40px',
        huge: '48px',
        xhuge: '58px',
    },
    weight: {
        light: '300',
        medium: '400',
        semibold: '600',
        bold: '700',
        extraBold: '800',
    },
};

export default typography;

export type Typography = {
    font: keyof typeof typography.font;
    colors: keyof typeof typography.colors;
    contrastColors: keyof typeof typography.contrastColors;
    sizing: keyof typeof typography.sizing;
    weight: keyof typeof typography.weight;
};
