import Link from "next/link";
import { FC } from "react";
import { PATHS } from "../../const";
import { ICharacters } from "../../types";
import Thumbnail from "../thumbnail";
import styles from './styles/index.module.scss'

interface IItem {
    character: ICharacters
}

const Item: FC<IItem> = ({ character }) => {

    return (
        <div className={styles['list__item']}>
            <Link href={`/${PATHS.category.characters}/${character.id}`}>
                <a>
                    <Thumbnail
                        path={character.thumbnail.path}
                        extension={character.thumbnail.extension}
                        alt={character.name}
                        className={styles['list__avatar']}
                    />
                    <h4>{character.name}</h4>
                    <p className={styles['list__description']}>{character.description}</p>
                </a>
            </Link>
        </div>
    )
}

export default Item;