
type Skill = {
    id: number,
    img: string,
    skillName: string,
    level: "Proficient" | "Expert" | "Intermediate"
}
const skillList: Skill[] = [
    {
        id: 1,
        img: "/images/html5.svg",
        skillName: "HTML5",
        level: "Expert"
    },
    {
        id: 2,
        img: "/images/css.svg",
        skillName: "CSS",
        level: "Proficient"
    },
    {
        id: 3,
        img: "/images/js.svg",
        skillName: "Javascript",
        level: "Expert"
    },
    {
        id: 4,
        img: "/images/react.svg",
        skillName: "React",
        level: "Expert"
    },
    {
        id: 5,
        img: "/images/typescript.svg",
        skillName: "Typescript",
        level: "Proficient"
    },
    {
        id: 6,
        img: "/images/nextjs.svg",
        skillName: "Next js",
        level: "Proficient"

    },
    {
        id: 7,
        img: "/images/firebase.svg",
        skillName: "firebase",
        level: "Proficient"

    },
    {
        id: 8,
        img: "/images/antd.svg",
        skillName: "Antd",
        level: "Proficient"

    },
    // {
    //     id: 9,
    //     img: "/images/tailwind.png",
    //     skillName: "Tailwind",
    //     level: "Expert"

    // }

]
export default skillList;