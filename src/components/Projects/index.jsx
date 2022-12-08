import styles from './Projects.module.scss'
import clsx from 'clsx'


export const Projects = () => {

    return (
        <div className={styles.projects}>

            <div className={clsx(styles.projects__card, styles.projects__card_twice)}>
                <div className={styles.project__title}>DataGate</div>
                <div className={styles.project__block}>
                    <em>About: </em> a complex information system for the educational sector (size: 2 million lines of code)
                </div>
                <div className={styles.project__block}>
                    <em>Modules written by me: </em> chat, printing certificates, issuance of meal cards, personal accounts, portfolio of organization, student and teacher
                </div>
                <div className={styles.project__block}>
                    <em>Problems: </em> non-scalable app, lack of documentation, bad backend, ninja-code
                </div>
                <div className={styles.project__block}>
                    <em>Tasks: </em> Refactoring code that was written by three other developers over four years, refactoring Canvas apps
                </div>
            </div>

            <div className={styles.projects__card}>
                <div className={styles.project__title}>E-diary</div>
                <div className={styles.project__block}>
                    <em>About: </em> 
                </div>
            </div>

            <div className={styles.projects__card}>
                <div className={styles.project__title}>MERN-blog</div>

            </div>

            <div className={styles.projects__card}>
                <div className={styles.project__title}>This Portfolio</div>
                <div className={styles.project__block}>
                    <em>About: animated layout</em> 
                </div>
            </div>

            <div className={styles.projects__card}>
                <div className={styles.project__title}>Purchase returns</div>
                <div className={styles.project__block}>
                    <em>About: </em> Mobile QR-scanning app 
                </div>
            </div>


        </div>
    )

}