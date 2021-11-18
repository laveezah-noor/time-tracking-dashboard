import styles from '../styles/Nav.module.css'

export const Nav = ({timeframes,name}) => {
    return (
        <div className={styles.nav}>
            <div className={styles.nav_head}>
                <div className={styles.nav_img}>
                    <img className={styles.profile} src="/image-jeremy.png"/>
                </div>
                <div className={styles.nav_content}>
                    <span className={styles.text}>Report For</span>
                    <span className={styles.heading}>{name}</span>
                </div>
            </div>
            <div className={styles.nav_options}>
            {timeframes.map(item=>{return(
                <li className={styles.nav_option}>{item.title}</li>
            )})}
            </div>
        </div>
    )
}
