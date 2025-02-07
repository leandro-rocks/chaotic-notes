import { StyledIcon } from './styles';
import { IconProps } from './types';

const Icon = ({ name, size, color = 'default', ...props }: IconProps) => {
    return (
        <StyledIcon size={size} color={color} {...props}>
            {name}
        </StyledIcon>
    );
};

export default Icon;
