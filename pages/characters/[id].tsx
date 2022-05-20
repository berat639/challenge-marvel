import type { NextPage } from 'next'
import DetailPage from '../../components/detailPage'
import { useAppSelector } from '../../hooks/toolkit'
import { selectCharacters, setCharacterData, setCharacterDataComicsDescDate, setLoading } from '../../reduxSlices/characters'
import { wrapper } from '../../store'
import api from '../api'

const Detail: NextPage = (data) => {
  const { characters, comics, loading } = useAppSelector(selectCharacters);

  return (
    <>
      <DetailPage characters={characters} comics={comics}  loading={loading} />
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ params }): Promise<any> => {
  const { dispatch } = store;
  const{id}:any=params;
  try {
    const { data } = await api.getCharacters(params) 
    const req= await api.getCharacterComicsDescDate(id) 
    const res=await req.data 
    dispatch(setCharacterDataComicsDescDate(res))
    dispatch(setCharacterData(data))
   


  } catch (e) {
    console.log(e);
  }
})

export default Detail
