import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useInfoModal from "../hooks/useInfoModal";
import useMovie from "../hooks/useMovie";
import {PlayButton, FavoriteButton} from "./";

interface InfoModalProps {
    visible?: boolean,
    onClose: any
}

const InfoModal = ({visible, onClose}: InfoModalProps) => {
    const [isvisible, setIsVisible] = useState(!!visible)
    const {movieId} = useInfoModal()
    const {data} = useMovie(movieId)

    useEffect(() => {
      setIsVisible(!!visible)
    }, [visible])

    const handleClose = useCallback(() => {
        setIsVisible(false)
        setTimeout(() => {
          onClose()
        }, 300);
    }, [onClose])

    if (!visible) {
      return null
    }
    
  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 
    flex justify-center items-center overflow-x-hidden overflow-y-auto
    fixed inset-0">
      <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        <div className={`${isvisible ? 'scale-100' : 'scale-0'} transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}>
          <div className="relative h-96">
            <video autoPlay muted loop poster={data?.thumbnailUrl} src={data?.videoUrl}
            className="w-full h-full brightness-[60%] object-cover"
            ></video>
            <div onClick={handleClose} 
            className="cursor-pointer absolute top-3 right-3 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center">
              <AiOutlineClose size={20} />
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">{data?.title}</p>
              <div className="flex flex-row gap-4 items-center">
                <PlayButton movieId={data?.id} />
                <FavoriteButton movieId={data?.id} />
              </div>
            </div>
          </div>

          <div className="px-12 py-8">
            <p className="text-green-400 font-semibold text-lg">
              New
            </p>
            <p className="text-lg">
              {data?.duration}
            </p>
            <p className="text-lg">
              {data?.genre}
            </p>
            <p className="text-lg">
              {data?.destination}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default InfoModal