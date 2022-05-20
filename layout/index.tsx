import { FC } from "react";
import styles from "./styles/index.module.scss"
import { logo } from '../images'
import Link from "next/link";
import Navbar from "components/nav";

const Layout: FC<any> = ({ children }) => {

    return (
        <>
        <Navbar></Navbar>
         {/* <div className={styles['logo']}><Link href="/"><img src={logo.src} alt="Marvel" /></Link></div> */}
         <div className={styles['container']}>
           
            <main>{children}</main>
        </div>
        </>
        
    )
}

export default Layout;