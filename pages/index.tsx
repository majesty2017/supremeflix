import type { NextPage, NextPageContext } from 'next'
import { BillBoard, InfoModal, MovieList, Navbar } from '../components'
import { getSession } from 'next-auth/react'
import useCurrentUser from '../hooks/useCurrentUser'
import useMovieList from '../hooks/useMovieList'
import useFavorites from '../hooks/useFavorites'
import useInfoModal from '../hooks/useInfoModal'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const Home: NextPage = () => {
  const {data: user } = useCurrentUser()

  const {data: movies = []} = useMovieList()

  const {data: favorites} = useFavorites()

  const {isOpen, closeModal} = useInfoModal()

  return (
    <div className='h-auto'>
      <InfoModal visible={isOpen} onClose={closeModal} />
    <Navbar />
    <BillBoard />
    <div className='pb-40'>
      <MovieList data={movies} title='Trending Now' />
      <MovieList data={favorites} title='My List' />
    </div>
    </div>
  )
}

export default Home
