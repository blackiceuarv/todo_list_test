import {EMPTY_STRING, ICON_COLORS, ICON_NAMES, MENU_ITEMS, ROUTES} from "@/common/constants";
import Link from "next/link";
import Icon from "@/common/components/Icon/Icon";

import styles from './HeaderNavMenu.module.scss';

export const HeaderNavMenu = () => {
  return (

  <ul className={styles.list}>
  {MENU_ITEMS.map(({link, title, icon}) => (
    <li key={title}>
      <Link href={link}  className={styles.listItem}>
        <Icon icon={icon} className={styles.icon}/>
       <span className={styles.title}>{title}</span>
      </Link>
      </li>
  ))}

  </ul>

  )
}
