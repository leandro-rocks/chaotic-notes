const primitives = {
    transparent: {
        light: 'transparent',
        medium: 'transparent',
        dark: 'transparent',
    },
    white: {
        light: '#ffffff',
        medium: '#ffffff',
        dark: '#ffffff',
    },
    text: {
        subtle: '#90a4ae',
        default: '#546e7a',
        heavy: '#263238',
    },
    red: {
        light: '#ef9a9a',
        medium: '#f44336',
        dark: '#d32f2f',
    },
    blue: {
        light: '#90caf9',
        medium: '#2196f3',
        dark: '#1976d2',
    },
    green: {
        light: '#a5d6a7',
        medium: '#4caf50',
        dark: '#388e3c',
    },
    ambar: {
        light: '#ffe082',
        medium: '#FFC107',
        dark: '#FF8F00',
    },
    orange: {
        light: '#ffcc80',
        medium: '#ff9800',
        dark: '#ef6c00',
    },
    pink: {
        light: '#f48fb1',
        medium: '#e91e63',
        dark: '#c2185b',
    },
    purple: {
        light: '#ce93d8',
        medium: '#ab47bc',
        dark: '#7b1fa2',
    },
    gray: {
        lightest: '#ECEFF1',
        lighter: '#CFD8DC',
        light: '#B0BEC5',
        medium: '#90a4ae',
        dark: '#546e7a',
        darkest: '#263238',
    },
};

const colors = {
    transparent: primitives.transparent,
    primary: primitives.purple,
    highlight: primitives.orange,
    neutral: primitives.gray,
    success: primitives.green,
    error: primitives.red,
    danger: primitives.red,
    warning: primitives.ambar,
    info: primitives.blue,
    white: primitives.white,
};

export default colors;

export type Colors = keyof typeof colors;

export type Tone = keyof typeof colors.primary;
