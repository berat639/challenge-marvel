import type { NextPage } from 'next'
import Head from 'next/head'
import InfinityPage from '../components/infinityPage'
import { useAppSelector } from '../hooks/toolkit'
import { selectCharacters, setCharacterData, setLoading } from '../reduxSlices/characters'
import { wrapper } from '../store'
import api from './api'

const Home: NextPage = () => {
  const { loading } = useAppSelector(selectCharacters)

  return ( 
      <InfinityPage  loading={loading}  /> 
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }): Promise<any> => {
  const { dispatch } = store;
  try {
    const { data } = await api.getCharacters(query)
    dispatch(setCharacterData(data))

  } catch (e) {
    console.log(e);
  }
})

export default Home
