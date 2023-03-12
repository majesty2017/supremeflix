import { useRouter } from 'next/router'
import useMovie from '../../hooks/useMovie'
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter()
  const {movieId} = router.query

  const {data} = useMovie(movieId as string)

  return (
    <div className='h-screen w-screen bg-black'>
      <nav className='sticky w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70'>
        <AiOutlineArrowLeft onClick={() => router.push('/')} className='cursor-pointer' size={40} />
        <p className='text-xl md:text-3xl font-bold'>
          <span className='font-light'>Showing: {data?.title} </span>
        </p>
      </nav>
      <video controls autoPlay src={data?.videoUrl} className='h-full w-full'></video>
    </div>
  )
}

export default Watch