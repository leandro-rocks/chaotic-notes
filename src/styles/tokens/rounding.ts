const rounding = {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '999px',
    none: '0',
};

export default rounding;

export type Rounding = keyof typeof rounding;
