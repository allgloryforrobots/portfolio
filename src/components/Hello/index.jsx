import { NavLink } from 'react-router-dom'
import styles from './Hello.module.scss'
import clsx from 'clsx'

export const Hello = () => {

    return (
        <>
            <div className={styles.hello}>
                <div className={styles.hello__title}>Hello</div>
                <div className={styles.hello__about}>My name is Ilya, I'm a front-end developer</div>
                <div className={styles.hello__menu}>

                    <NavLink 
                        className={({ isActive }) =>
                            isActive ? clsx(styles.menu__item, styles.menu__item_active) : styles.menu__item
                        }
                        to='skills'
                    >
                        Skills
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) =>
                            isActive ? clsx(styles.menu__item, styles.menu__item_active) : styles.menu__item
                        }
                        to='projects'
                    >
                        Projects
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) =>
                            isActive ? clsx(styles.menu__item, styles.menu__item_active) : styles.menu__item
                        }
                        to='contacts'
                    >
                        My Contacts
                    </NavLink>

                </div>
            </div>
        </>
      
    )
}