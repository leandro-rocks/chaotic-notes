import styled from 'styled-components';
import { typography } from '@styles';
import { IconProps } from './types';

const iconSize = {
    xxxsmall: '8px',
    xxsmall: '12px',
    xsmall: '14px',
    small: '16px',
    medium: '18px',
    large: '22px',
    xlarge: '26px',
    xxlarge: '32px',
    xxxlarge: '40px',
    huge: '48px',
    massive: '64px',
};

const StyledIcon = styled.span<Omit<IconProps, 'name'>>`
    display: flex;
    color: ${({ color = 'default' }) => typography.colors[color]};
    font-size: ${({ size = 'medium' }) => iconSize[size]};
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'auto')};
`;

StyledIcon.defaultProps = {
    className: 'material-symbols-outlined',
};

export { StyledIcon, iconSize };
