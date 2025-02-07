const breakpoints = {
    xsmall: '360px',
    small: '480px',
    medium: '768px',
    large: '1024px',
    xlarge: '1200px',
};

export default breakpoints;

export type Breakpoints = keyof typeof breakpoints;
