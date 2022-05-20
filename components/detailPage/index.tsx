import { FC } from 'react';
import Layout from '../../layout';
import { ICategory, IComics } from "../../types";
import Loader from '../loader';
import Thumbnail from '../thumbnail';
import Comics from './comics';
import InfoSection from './InfoSection';
import styles from './styles/index.module.scss';

interface IDetailPage {
    characters: ICategory,
    loading: boolean,
    comics:IComics
}

const DetailPage: FC<IDetailPage> = ({ characters, loading, comics }) => {
    const { results } = characters;  
    let arr=[]
    return (
        <Layout>
            {loading ? <Loader /> :
                <>
                    {results.map(character => {
                        return (
                            <div key={character.id}>
                                <h2>{character.name}</h2>
                                <Thumbnail
                                    path={character.thumbnail.path}
                                    extension={character.thumbnail.extension}
                                    alt={character.name}
                                    className={styles['avatar']}
                                />
                                {character.description && <p>{character.description}</p>}
                                 {comics&& <Comics items={comics.results} />} 
                                {!!character.stories.items.length && <InfoSection items={character.stories.items} title='Stories' />}
                                {!!character.events.items.length && <InfoSection items={character.events.items} title='Events' />}
                                {!!character.series.items.length && <InfoSection items={character.stories.items} title='Series' />}
                               
                               <h3>Desc</h3>
                               
                               <p>{character.description}</p>
                            </div>
                        )
                    })}
                </>
            }
        </Layout>
    )
}


export default DetailPage
