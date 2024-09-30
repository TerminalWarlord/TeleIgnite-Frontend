

import Intro from "./Intro"
import InfoCard from "./LeftSidebar/InfoCard"
import SimilarItems from "./SimilarItems"
import MainContent from "./MainContent"
import { faRobot } from "@fortawesome/free-solid-svg-icons"
import AllReviews from "./AllReviews"
import Tabs from "../UI/Tabs"


const MainDetailPage = () => {
    const botData = {
        isUser: false,
        username: 'jaybeespotifybot',
        title: 'JayBee Spotify Bot',
        reviews: '4/5',
        languages: 'English',
        category: 'Utilites',
        added: '4 years 5 months ago',
        popularity: '80%',
    }
    const tabContent = [
        {
            tabName: 'About',
            content: <MainContent />,
            checked: true,
        },
        {
            tabName: 'Reviews',
            content: <div className="w-full flex flex-col justify-center items-center">
                <AllReviews />
            </div>,
            checked: false
        }
    ]
    return (
        <section className="mx-3 md:mx-20 my-5 flex flex-col justify-center">
            <Intro title="JayBee Spotify Bot" type="Bot" icon={faRobot} />
            <div className="flex flex-col items-center md:flex-row md:items-start w-full my-4">
                <InfoCard item={botData} />
                <div className="flex flex-col items-center w-11/12 mt-4 md:w-3/4 md:mt-0">
                    {/* <MainContent /> */}
                    {/* <AllReviews /> */}
                    <Tabs tabContent={tabContent} />
                </div>
            </div>
            <SimilarItems />
        </section>
    )
}

export default MainDetailPage