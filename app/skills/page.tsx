import Image from 'next/image'
import React from 'react';
import styles from './skillcards.module.css'
import mySkills from './data'


const Skills = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.skillCards}>
        <h1 className={styles.skillTitle}>My Skills</h1>
        {mySkills.map(skill => {
          return (
            <div className={styles.card} key={skill.id}>
              {/* <Image src={skill.img} alt="html5" width={60} height={60} /> */}
              <img className={styles.skillIcons} src={skill.img} alt="skillLogo" />
              <h2 className={styles.skillName}>{skill.skillName}</h2>
              <h2 className={styles.skillLevel}>{skill.level}</h2>
            </div>
          )
        })}
      </div>
      {/* </div> */}
    </div>
  )
}

export default Skills


