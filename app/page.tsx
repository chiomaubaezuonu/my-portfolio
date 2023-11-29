import LandingPage from "./landing/page";
import Skills from "./skills/page";
import data from "./skills/data"
import Link from "next/link";

export default function Home() {

  // const persons = obj.map((person) => {
  //   return (<Skills person={person} />)
  // })
  return (
    <div>
      <LandingPage />
      <Skills mySkills={data} />
      <Link href='/about'>
      <h1>About me</h1>
      </Link>
      <Link href='/projects'>
      <button style={{background:'darkblue', color:'powderblue'}}>
        Projects
      </button>
      </Link>
    </div>
  )
}
