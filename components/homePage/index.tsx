import { useRouter } from "next/router";
import { FC, useState } from "react";
import Layout from "../../layout"; 
import { ICategory } from "../../types";
import Loader from "../loader";
import Pagination from "../pagination";
import Item from "./item";
import styles from './styles/index.module.scss';

interface IHomePage {
    characters: ICategory,
    loading: boolean,
}

const HomePage: FC<IHomePage> = ({ characters, loading }) => {
    const [activePage, setActivePage] = useState<number>(1);
    const [searchValue, setSearchValue] = useState<string>('');

    const { results, total } = characters;
    const router = useRouter()

    const handlePagination = (page: number) => {
        setActivePage(page);

        const nextPage = (page * 30) - 30;
        router.query.offset = nextPage.toString();
        router.push(router)
    } 

    return (
        <Layout>
            {loading ? <Loader /> :
                <>
                    <div className={styles['category-head']}>
                        <h2 className={styles['category-head__title']}>Characters</h2>
                         
                    </div>
                    <div className={styles['list']}>
                        {results.map(character => {
                            return <Item key={character.id} character={character} />
                        })}
                    </div>
                    <Pagination
                        total={total}
                        activePage={activePage}
                        pageSize={30}
                        onChange={(page: number) => handlePagination(page)}
                    />
                </>
            }
        </Layout>
    )
}

export default HomePage;