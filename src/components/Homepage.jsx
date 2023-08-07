import Tasks from "./home-components/Tasks"
import WeeklyTasks from "./home-components/WeeklyTasks"
import Reproduction from "./home-components/Reproduction"
import Management from "./home-components/Management"
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
                <Management />
            </div>
        </div>
    )
}