'use client'

import Announcement from "@/components/general/announcement/announcement"
import ContactMe from "@/components/sections/conactMe/conactMe"
import FirstSlide from "@/components/sections/firstSlide/firstSlide"
import MySkills from "@/components/sections/mySkills/mySkills"
import Projects from "@/components/sections/projects/projects"
import { ConfOpenToWork } from "@/config/general"

const Home = () => {
    return (
        <>
            {ConfOpenToWork ? <Announcement>I'm looking for a job</Announcement> : null}
            <FirstSlide />
            <MySkills />
            <Projects />
            <ContactMe />
        </>
    )
}

export default Home