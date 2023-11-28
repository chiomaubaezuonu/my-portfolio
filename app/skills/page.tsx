import Image from 'next/image'
import React from 'react';
import styles from './skillcards.module.css'
import mySkills from './data'

type SkillsProps = {
  mySkills: {
    id: number,
    img: string,
    skillName: string,
    level: string
  }[]
}
const Skills = (props: SkillsProps) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.skillTitle}>My Skills</h1>
      <div className={styles.skillCards}>
        {props.mySkills.map(skill => {
          return (
            <div className={styles.card} key={skill.id}>
              {/* <Image src={skill.img} alt="html5" width={60} height={60} /> */}
              <img src={skill.img} alt="skillLogo" width={50} height={50} />
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


