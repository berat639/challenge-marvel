import { useRouter } from "next/router";
import { FC, useState } from "react";
import Layout from "../../layout"; 
import { ICategory } from "../../types";
import Loader from "../loader";
import Pagination from "../pagination";
import { useDispatch, useSelector } from 'react-redux'
import Item from "./item";
import styles from "./styles/index.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppDispatch } from '../../store';
import { useAppSelector } from '../../hooks/toolkit'
import { setCharacterData,selectCharacters, addCharacterData} from "../../reduxSlices/characters";
import api from '../../pages/api'


interface IHomePage {
  loading: boolean;
}

const InfinityPage: FC<IHomePage> = () => {
  const { characters, loading } = useAppSelector(selectCharacters);
  const [activePage, setActivePage] = useState<number>(1); 
  const { results } = characters;
  const router = useRouter(); 
  const dispatch = useDispatch()
  
  const handlePagination = async (page: number) => {  
    setActivePage(activePage+1)  
    try {
      const { data } = await api.getCharacters({offset:page})  
      dispatch(addCharacterData(data))
    } catch (e) {
      console.log(e);
    }
  };

   

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles["category-head"]}>
            <h2 className={styles["category-head__title"]}>Characters</h2> 
          </div>
         
            <InfiniteScroll 
            dataLength={results.length} 
            next={()=>{handlePagination(activePage*30)}}
            hasMore={true}
            loader={
              <div className="loader">
                Loading ...
              </div>
            }
            >
               <div className={styles["list"]}>
               {results.map((character) => {
                return <Item key={Math.random()} character={character} />;
              })}
               </div>
             
            </InfiniteScroll>
          
        </>
      )}
    </Layout>
  );
};

export default InfinityPage;
