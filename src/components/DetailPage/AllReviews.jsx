import LineBreak from "../UI/LineBreak"
import { faSquarePollVertical } from "@fortawesome/free-solid-svg-icons"
import ReviewItem from "./RightSidebar/ReviewItem"
import Pagination from "../UI/Pagination"

const AllReviews = () => {
    return (
        <>
            <div className="w-11/12">
                <LineBreak icon={faSquarePollVertical} text={'Reviews'} />
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
                <Pagination currentPage={1} onPageChange={() => { }} totalPages={4} />

            </div>
        </>
    )
}

export default AllReviews