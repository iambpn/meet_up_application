import React from "react";
import styles from "./layout.module.css"
import MainNavigation from "./MainNavigation";

type LayoutProps ={
    children:React.ReactNode |React.ReactNodeArray
}

export default function Layout(props:LayoutProps){
    return (
        <div>
            <MainNavigation/>
            <main className={styles.main}>
                {props.children}
            </main>
        </div>
    );
}