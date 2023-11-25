import LandingPage from "./landing/page";
import Skills from "./skills/page";
import data from "./skills/data"

export default function Home() {

  // const persons = obj.map((person) => {
  //   return (<Skills person={person} />)
  // })
  return (
    <div>
      <LandingPage />
      <Skills mySkills={data} />
    </div>
  )
}
