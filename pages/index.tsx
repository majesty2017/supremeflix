import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../components'
import { getSession, signOut } from 'next-auth/react'
import useCurrentUser from '../hooks/usecurrentUser'

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
  return (
    <>
    <h1>Supremeflix</h1>
    <p>Logged in as: {user?.name}</p>
    <button onClick={() => signOut()} className='h-10 w-72 bg-white text-black'>Logout</button>
    </>
  )
}

export default Home
