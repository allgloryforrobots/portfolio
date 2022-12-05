import styles from './SkillsBlock.module.scss'


export const SkillsBlock= () => {
    return (
        <div className={styles.skillBlock}>
            <div className={styles.skillBlock__card}>
                
                <div className={styles.skillBlock__header}>
                    Current project
                </div>

                <div className={styles.skillBlock__section}>
                    <div className={styles.skillBlock__title}>☀️  Frontend</div>
                    <div className={styles.skillBlock__row}>JavaScript (ES6+)</div>
                    <div className={styles.skillBlock__row}>Pure JS OOP</div>
                    <div className={styles.skillBlock__row}>SCSS</div>
                    <div className={styles.skillBlock__row}>Semantic UI</div>
                    <div className={styles.skillBlock__row}>Gulp / Rollup</div>
                    <div className={styles.skillBlock__row}>Chart JS</div>
                    <div className={styles.skillBlock__row}>Canvas</div>
                    <div className={styles.skillBlock__row}></div>
                </div>

                <div className={styles.skillBlock__section}>
                    <div className={styles.skillBlock__title}>🌙  Backend</div>
                    <div className={styles.skillBlock__row}>Node.JS / Express </div>
                    <div className={styles.skillBlock__row}>WebSocket</div>
                </div>

                <div className={styles.skillBlock__section}>
                    <div className={styles.skillBlock__title}>About</div>
                    <div className={styles.skillBlock__row}>Development of a complex information system for the educational sector.</div>
                    <div className={styles.skillBlock__row}>Class schedule, issuance of school cards, translation of the year, class magazines, lesson-thematic planning, data analysis and visual display, portfolio, personal accounts.</div>
                    
                </div>

            </div>

            <div className={styles.skillBlock__card}>

                <div className={styles.skillBlock__header}>
                    What can I do
                </div>

                <div className={styles.skillBlock__section}>
                    <div className={styles.skillBlock__title}>☀️  Frontend</div>
                    <div className={styles.skillBlock__row}>JavaScript (ES6+)</div>
                    <div className={styles.skillBlock__row}>Pure JS OOP / React</div>
                    <div className={styles.skillBlock__row}>Redux Toolkit / Redux / Redux Thunk</div>
                    <div className={styles.skillBlock__row}>React Hook Form</div>
                    <div className={styles.skillBlock__row}>SCSS / styled-components / CSS Modules </div>
                    <div className={styles.skillBlock__row}>Material UI / Semantic UI / Ant Design</div>
                    <div className={styles.skillBlock__row}>Gulp / Rollup / Webpack</div>
                    <div className={styles.skillBlock__row}>Chart JS</div>
                    <div className={styles.skillBlock__row}></div>
                    <div className={styles.skillBlock__row}></div>
                </div>

                <div className={styles.skillBlock__section}>
                    <div className={styles.skillBlock__title}>🌙  Backend</div>
                    <div className={styles.skillBlock__row}>Node.JS / Express </div>
                    <div className={styles.skillBlock__row}>MongoDB / Mongoose</div>
                    <div className={styles.skillBlock__row}>JWT </div>
                    <div className={styles.skillBlock__row}>WebSocket</div>
                </div>
                
                <div className={styles.skillBlock__section}>
                    <div className={styles.skillBlock__title}>Other skills</div>
                    <div className={styles.skillBlock__row}>Git / GitHub </div>
                    <div className={styles.skillBlock__row}>SOLID</div>
                    <div className={styles.skillBlock__row}>Docker </div>
                    <div className={styles.skillBlock__row}>Redmine</div>
                    <div className={styles.skillBlock__row}>BEM (CSS)</div>
                </div>

            </div>
        </div>
    )
}
