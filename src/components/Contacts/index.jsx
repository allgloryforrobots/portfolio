import styles from './Contacts.module.scss'
import { IconBack } from '../Utils'

export const Contacts = () => {

    return (
        <>
            <IconBack/>

            <div className={styles.contacts}>
                <div className={styles.contacts__mailbox}>
                    <div className={styles.mailbox__title}>Contacts</div>
                    <div>allgloryforrobots@gmail.com</div>
                    <div>https://t.me/Pansamovar</div>
                    <div>+79319872006</div>
                </div>
            </div>
        </>

    )

}