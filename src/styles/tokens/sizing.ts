const sizing = {
    box: {
        xsmall: '32px',
        small: '40px',
        medium: '46px',
        large: '66px',
        xlarge: '92px',
        xxlarge: '136px',
        xxxlarge: '172px',
        xxxxlarge: '200px',
        huge: '240px',
        xhuge: '280px',
    },
    input: {
        small: '36px',
        medium: '40px',
        large: '46px',
    },
};

export default sizing;

export type Sizing = keyof typeof sizing;
