import LineBreak from "../UI/LineBreak"
import { faSquarePollVertical } from "@fortawesome/free-solid-svg-icons"
import ReviewItem from "./RightSidebar/ReviewItem"
import Pagination from "../UI/Pagination"
import useFetch from "../../hooks/useFetch"
import { getReviews } from "../../utils/http"
import { useCallback, useState } from "react"




const AllReviews = ({ reviewer = null, username }) => {
    console.log(reviewer, username)
    // const fetchReviews = useCallback(() => getReviews(reviewer, username), [reviewer, username]);
    const [currentPage, setCurrentPage] = useState(1);
    const fetchReviews = useCallback(() => getReviews(reviewer, username, currentPage), [reviewer, username, currentPage]);


    const { data, isFetching, error, handlePagination } = useFetch(fetchReviews, {});
    const reviews = data?.result || [];

    async function handlePageChange(pageNo) {
        console.log(pageNo, isFetching)
        handlePagination(pageNo, async () => {
            await getReviews(reviewer, username, pageNo);
        });
        console.log(pageNo, isFetching)
        setCurrentPage(pageNo);
    }
    console.log(reviews, isFetching);
    return (
        <>
            <div className="w-full flex items-center flex-col">
                <LineBreak icon={faSquarePollVertical} text={'Reviews'} />
                {error?.message && <h4 className="text-center text-red-300 my-4"> Failed to fetch!</h4>}
                {!error && <>
                    {isFetching ? <>
                        {Array(3).fill().map((_, index) => (
                            <ReviewItem key={index} data={{}} isFetching={isFetching} reviewer={reviewer} />
                        ))}
                    </> : <>{reviews.map(review => {
                        return <ReviewItem key={review.id} data={review} isFetching={isFetching} reviewer={reviewer} />
                    })
                    }</>}
                </>}

                <div className="w-11/12">
                    <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={reviews.length > 4 ? 2 : 1} />
                </div>
            </div>
        </>
    )
}

export default AllReviews