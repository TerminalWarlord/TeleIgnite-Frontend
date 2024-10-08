import { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ username: id, name: title, description, reviews, avatar: image, category, classes = "", isFetching = false, error = null }) => {
    const [isHovering, setIsHovering] = useState(false);
    if (error) {
        return (
            <div className={`py-2 border-2 border-base-200 sm:w-full rounded-lg relative my-4 ${classes}`}>
                <div className='flex flex-col items-center justify-center py-6'>
                    <h1 className='text-red-500 font-semibold'>Error</h1>
                    <p className='text-red-400'>{error.message}</p>
                </div>
            </div>
        );
    }
    return (
        <div className={`py-2 border-2 border-base-300 sm:w-full rounded-lg relative my-4 ${classes}`}>
            <div className='flex px-6 md:px-4 py-2'>
                <div className='flex flex-col items-center'>
                    <div className='w-[50px] sm:w-[60px] md:w-[70px] aspect-square overflow-hidden rounded-full my-2'>
                        {isFetching ? <div className="skeleton h-full w-20"></div> : <Link to={'/bot/' + id}><img
                            src={image}
                            alt=""
                            className='w-full h-full object-cover'
                        /></Link>}
                    </div>
                    {isFetching ? <div className="skeleton h-4 w-20"></div> : <Link to="#" className='text-xs'>{category}</Link>}
                </div>
                <div className='ml-4 h-[5rem]'>
                    {isFetching ? <div className="skeleton h-4 w-20 my-2"></div> : <Link to={'/bot/' + id}><h1 className='font-semibold text-sm md:text-md'>{title}</h1></Link>}
                    {isFetching ? <div className="skeleton h-20 w-[8rem] lg:w-[6rem] xl:w-[8rem] 2xl:w-[8rem] text-wrap"></div> : <h2 className='text-xs overflow-hidden text-ellipsis line-clamp-5'>{description}</h2>}
                </div>
            </div>
            <div className='mt-4 h-0.5 w-full bg-base-200'></div>
            <div className='flex justify-between items-center  px-6 md:px-4 '>
                <div>

                    {isFetching ? <div className="skeleton h-4 w-20 my-2"></div> : <h3
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        {reviews}
                    </h3>}
                    {isHovering && (
                        <div className='absolute left-0 mt-1 bg-slate-700 px-2 py-1 text-white rounded-md text-xs'>
                            Total votes 130
                        </div>
                    )}
                </div>
                {isFetching ? <div className="skeleton h-8 w-20 my-2"></div> : <div className="my-2 py-1.5 px-4 border-2 border-blue-500 dark:border-base-300 w-fit rounded-lg">

                    <Link to={'/bot/' + id}>
                        <img
                            src="https://www.svgrepo.com/show/343522/telegram-communication-chat-interaction-network-connection.svg"
                            alt=""
                            className="w-[18px]"
                        />
                    </Link>
                </div>}
            </div>
        </div>
    );
}

export default Card;
