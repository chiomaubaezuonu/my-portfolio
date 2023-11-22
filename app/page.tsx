import LandingPage from "./landing/page";
import Skills from "./skills/page";
import data from "./skills/data"
import SkillType from "./skills/data" 
const str = "Oma girl"
export default function Home() {
//  const mySkills = data.map((skill) => {
//   return (
//     <Skills skill:SkillType={skill} />
//   )
//  })
  
  return (
    <div>
      <LandingPage />
      <Skills />
    </div>
  )
}
