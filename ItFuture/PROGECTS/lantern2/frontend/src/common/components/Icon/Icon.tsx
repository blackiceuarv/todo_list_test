import { ElementType, FC, MouseEvent, Ref } from 'react';
import classNames from 'classnames';
import { ICON_COLORS, ICON_NAMES, ICON_ROTATE_ANGLES } from '@/common/constants';

import styles from './Icon.module.scss';
import { withForwardedRef } from '@/common/hocs/withForwardedRef';

interface IIconProps {
  icon: ICON_NAMES;
  color?: ICON_COLORS;
  rotating?: boolean;
  tag?: ElementType;
  id?: string;
  rotate?: ICON_ROTATE_ANGLES;
  outerRef?: Ref<HTMLInputElement>;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;

  [other: string]: unknown;
}

const Icon: FC<IIconProps> = ({
  icon,
  className = null,
  color = ICON_COLORS.Blue,
  id = null,
  rotate = null,
  rotating = false,
  tag: Tag = 'span',
  outerRef = null,
  onClick = null,

  ...otherProps
}) => {
  const iconClassName = `icon-${icon}`;
  const colorClassName = `icon-${color}`;

  return (
    <Tag
      onClick={onClick}
      className={classNames(
        styles.icon,
        styles[iconClassName],
        styles[colorClassName],
        className,
      )}
    ></Tag>
  );
};
export default withForwardedRef(Icon);
