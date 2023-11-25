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
  //const Skills = (props: PersonListProps) => {
  return (
    <div className='grid lg:grid-cols-3 gap-6'>
      {props.mySkills.map(skill => {
        return (
          <div
            //  className={styles.skillCards}
            key={skill.id}>
            {/* <div className={styles.card}> */}
            {/* <Image src={skill.img} alt="html5" width={60} height={60} /> */}
            <img src={skill.img} alt="skillLogo" width={60} height={60} />
            <h2>{skill.level}</h2>
            <h2>{skill.skillName}</h2>
            {/* </div> */}
            <div></div>
          </div>
        )
      })}
    </div>
  )
}

export default Skills