import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import useFavorites from "../hooks/useFavorites";
import useCurrentUser from "../hooks/useCurrentUser";
import { useCallback, useMemo } from "react";
import axios from "axios";
interface FavoriteButtonProps {
    movieId: string
}
const FavoriteButton = ({movieId}: FavoriteButtonProps) => {
  const {mutate: mutateFavorites} = useFavorites()
  const {data: currentUser, mutate} = useCurrentUser()

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || []
    return list.includes(movieId)
  }, [currentUser, movieId])

  const toggleFavorites = useCallback(async () => {
    let res
    if (isFavorite) {
      res = await axios.delete('/api/favorite', {data: {movieId}})
    } else {
      res = await axios.post('/api/favorite', {movieId})
    }
    const updatedFavoireIds = res?.data?.favoriteIds
    mutate({
      ...currentUser,
      favoriteIds: updatedFavoireIds
    })
    mutateFavorites()
  }, [movieId, useFavorites, currentUser, mutate, mutateFavorites])

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus

  return (
    <div onClick={toggleFavorites}
    className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white 
    border-2 rounded-full flex justify-center items-center transition hover:bg-neutral-300 hover:text-neutral-800">
      <Icon size={30} />
    </div>
  )
}

export default FavoriteButton