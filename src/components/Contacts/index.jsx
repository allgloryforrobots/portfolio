import styles from './Contacts.module.scss'

export const Contacts = () => {

    return (
        <div className={styles.contacts}>
            <div className={styles.contacts__mailbox}>
                <div className={styles.mailbox__title}>Contacts</div>
                <div>allgloryforrobots@gmail.com</div>
                <div>https://t.me/Pansamovar</div>
                <div>+79319872006</div>
            </div>
        </div>
    )

}