import React from 'react'
import { SkillType } from './data'

const Skills = (props:SkillType) => {
  return (
    <div>
      <div>{props.skill.img}</div>
    </div>
  )
}

export default Skills