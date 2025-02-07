const spacing = {
    none: '0px',
    xxsmall: '4px',
    xsmall: '8px',
    small: '12px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
    xxlarge: '40px',
    xxxlarge: '48px',
    huge: '64px',
    xhuge: '80px',
    0: '0px',
    0.5: '4px',
    1: '8px',
    1.5: '12px',
    2: '16px',
    3: '24px',
    4: '32px',
    5: '40px',
    6: '48px',
    7: '56px',
    8: '64px',
};

export default spacing;

export type Spacing = keyof typeof spacing;
