import { MaterialIconName } from 'ts-material-icon-name-list';
import { iconSize } from './styles';
import { Typography } from '@styles/types';

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
    name: MaterialIconName | 'monitoring' | 'priority';
    size?: keyof typeof iconSize;
    color?: Typography['colors'];
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
