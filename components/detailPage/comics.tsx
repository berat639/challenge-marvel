import { FC } from "react";
import { DesDatecComics } from "../../types";
import styles from './styles/index.module.scss';

interface IInfoSection {
    items: any[], 
}

const Comics: FC<IInfoSection> = ({ items }) => {

    return (
        <div className={styles['info-section']}>
            <h3>Comics</h3>
            {items.map((item, idx) => {
                <h3>{item.title}</h3>
                return <p key={item.id}>{item.title}</p>
            })}
        </div>
    )
}

export default Comics;