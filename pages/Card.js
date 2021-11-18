import styles from '../styles/Card.module.css'
import Image from 'next/image'

export const Card = ({category,current,previous}) => {
    const img = 
    (category=='Work')? "/icon-work.svg" : 
    (category=='Play')?"/icon-play.svg":
    (category=='Study')? "/icon-study.svg" : 
    (category=='Exercise')? "/icon-exercise.svg" : 
    (category=='Social')? "/icon-social.svg" : 
    (category=='Self Care')? "/icon-self-care.svg" : "";
    const bg = 
    (category=='Work')? styles.Work : 
    (category=='Play')? styles.Play:
    (category=='Study')? styles.Study : 
    (category=='Exercise')? styles.Exercise : 
    (category=='Social')? styles.Social : 
    (category=='Self Care')? styles.Self_Care : null;
    return (
        <div className={`${styles.card} ${bg}`}>
            <img className={styles.icon} src={img}/>
            <div className={styles.card_content}>
            <div className={styles.card_top}>
                <span className={styles.category}>{category}</span>
                <img className={styles.options} src="/icon-ellipsis.svg"/>
            </div>
            <div className={styles.card_head}>
                <span className={styles.current}>{current+" hrs"}</span>
                <div className={styles.track}>
                    <span className={styles.label}>Last Week</span>{" - "}
                    <span className={styles.previous}>{previous+" hrs"}</span>
                </div>
            </div>
            </div>
        </div>
    )
}
