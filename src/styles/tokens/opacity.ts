const opacity = {
    transparent: 0,
    opaque: 1,
    small: 0.4,
    medium: 0.7,
    large: 0.9,
};

export default opacity;

export type Opacity = keyof typeof opacity;
