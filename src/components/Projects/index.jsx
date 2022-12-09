import styles from './Projects.module.scss'
import clsx from 'clsx'


export const Projects = () => {

    return (
        <div className={styles.projects}>


            <div className={clsx(styles.projects__card, styles.projects__card_twice)}>

                <div className={styles.project__title}>
                    <div className={styles.project__name}>DataGate</div>

                    <div className={styles.project__tags}>
                        <div className={styles.project__tag}>Refactoring</div>
                        <div className={styles.project__tag}>Bug fixing</div>
                        <div className={styles.project__tag}>New features</div>
                    </div>
                </div>

                <div className={styles.project__block}>
                    A complex information system for the educational sector (size: 2 million lines of code)
                </div>

                <div className={styles.project__block}>
                    <em>Modules written by me: </em> chat, printing certificates, issuance of meal cards, personal accounts, portfolio of organization, student and teacher
                </div>

                <div className={styles.project__block}>
                    <em>Case: </em> non-scalable app, lack of documentation, bad backend, ninja-code
                </div>

                <div className={styles.project__block}>
                    <em>Task: </em> Refactoring code that was written by three other developers over four years, refactoring Canvas apps
                </div>

            </div>


            <div className={clsx(styles.projects__card, styles.projects__card_twice)}>

                <div className={styles.project__title}>
                    <div className={styles.project__name}>E-diary</div>
            
                    <div className={styles.project__tags}>
                        <div className={styles.project__tag}>Creating</div>
                    </div>
                </div>

                <div className={styles.project__block}>
                    Class schedule, grades, feedback, performance analytics 
                </div>

                <div className={styles.project__block}>
                    <em>Case: </em> During the development process, the brief and technical task changed 10-15 times. 
                    There were two product owners on the project who gave tasks directly opposite to each other. 
                    The backend was written a week before the release, and no testing was done.
                    API first the approach was not considered, it was necessary to write business logic blindly. 
                    We had to wait a day for feedback on errors from the backend. At the same time, the release date was mandatory.
                </div>

                <div className={styles.project__block}>
                    <em>Task: </em> Development of a convenient tool for managing the educational process
                </div>

            </div>


            <div className={styles.projects__card}>
                <div className={styles.project__title}>
                    <div className={styles.project__name}>LR licensing</div>

                    <div className={styles.project__tags}>
                        <div className={styles.project__tag}>Bug fixing</div>
                    </div>
                </div>

                <div className={styles.project__block}>
                    Licensing of alcoholic beverages and precious metals for the Leningrad Region
                </div>
            </div>


            <div className={clsx(styles.projects__card, styles.projects__card_twice)}>

                <div className={styles.project__title}>
                    <div className={styles.project__name}>BI + dashboard analytics</div>

                    <div className={styles.project__tags}>
                        <div className={styles.project__tag}>Creating</div>
                    </div>
                </div>

                <div className={styles.project__block}>
                    Visual display and data analytics. Sorting, filtering, graphs, workspace customization, highlighting indicators that deviate from the norm
                </div>

                <div className={styles.project__block}>
                    <em>Case: </em> Complex business logic. 
                    Data sampling was carried out in various ways depending on the situation. 
                    The data storage structures were different for each specific case.
                </div>

                <div className={styles.project__block}>
                    <em>Task: </em>  Creation of application architecture. OOP. Strict adherence to the principles of SOLID. 
                </div>

            </div>


            <div className={styles.projects__card}>

                <div className={styles.project__title}>
                    <div className={styles.project__name}>Purchase returns</div>

                    <div className={styles.project__tags}>
                        <div className={styles.project__tag}>Creating</div>
                    </div>
                </div>

                <div className={styles.project__block}>
                    Mobile QR-scanning app. Scanning a receipt, obtaining information on the product, generating a return request
                </div>

                <div className={styles.project__block}>
                    <em>Task: </em> Quickly write a mobile application
                </div>

            </div>




            <div className={styles.projects__card}>

                <div className={styles.project__title}>
                    <div className={styles.project__name}>MERN-blog</div>

                    <div className={styles.project__tags}>
                        <div className={styles.project__tag}>Self project</div>
                    </div>

                    <div className={styles.project__block}>
                        <em>Task: </em> create the right architecture in the mern stack
                    </div>

                </div>

            </div>


            <div className={styles.projects__card}>

                <div className={styles.project__title}>
                    <div className={styles.project__name}>This Portfolio</div>

                    <div className={styles.project__tags}>
                        <div className={styles.project__tag}>Self project</div>
                    </div>
                </div>

                <div className={styles.project__block}>
                    <em>Task: </em> ask about myself, create design and cool animations
                </div>

            </div>


        </div>
    )

}