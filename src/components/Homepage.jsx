import Tasks from "./home-components/Tasks"
import WeeklyTasks from "./home-components/WeeklyTasks"
import Reproduction from "./home-components/Reproduction"
import Managment from "./home-components/Managment"
import './homepage.css'

export default function Homepage() {
    return(
        <div className="main">
            <div className="home-left">
                <Tasks />
                <WeeklyTasks />
            </div>
            <div className="home-right">
                <Reproduction />
                <Managment />
            </div>
        </div>
    )
}