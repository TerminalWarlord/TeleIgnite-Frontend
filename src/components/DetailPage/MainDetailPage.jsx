

import Intro from "./Intro"
import InfoCard from "./LeftSidebar/InfoCard"
import SimilarItems from "./SimilarItems"
import MainContent from "./MainContent"
import { faRobot } from "@fortawesome/free-solid-svg-icons"
import AllReviews from "./AllReviews"
import Tabs from "../UI/Tabs"
import useFetch from "../../hooks/useFetch"
import { getItemDetails } from "../../utils/http"
import { data } from "autoprefixer"


const MainDetailPage = () => {
    // const botData = {
    //     isUser: false,
    //     username: 'jaybeespotifybot',
    //     title: 'JayBee Spotify Bot',
    //     reviews: '4/5',
    //     languages: 'English',
    //     category: 'Utilites',
    //     added: '4 years 5 months ago',
    //     popularity: '80%',
    // }
    const { data: botData, isFetching, error } = useFetch(getItemDetails, {
        result: {
            isUser: true
        }
    })
    const tabContent = [
        {
            tabName: 'About',
            content: <MainContent isFetching={isFetching} error={error} data={botData} />,
            checked: true,
        },
        {
            tabName: 'Reviews',
            content: <div className="w-full flex flex-col justify-center items-center">
                {!isFetching && !error && <AllReviews username={data?.result?.username} reviewer={null} />}
            </div>,
            checked: false
        }
    ]
    return (
        <section className="mx-3 md:mx-20 my-5 flex flex-col justify-center">
            <Intro title="JayBee Spotify Bot" type="Bot" icon={faRobot} />
            <div className="flex flex-col items-center md:flex-row md:items-start w-full my-4">
                <InfoCard item={{ isUser: false, ...botData?.result }} isFetching={isFetching} error={error} />
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