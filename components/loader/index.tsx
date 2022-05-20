import styles from './styles/index.module.scss'

const Loader = () => {
    return (
        <div className={styles['lds-ring']}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader;