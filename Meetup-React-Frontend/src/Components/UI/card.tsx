import React from "react";
import styles from "./card.module.css"

type CardProps = {
    children:React.ReactNode | React.ReactNodeArray
}

export default function Card(props:CardProps){
    return <div className={styles.card}>
        {props.children}
    </div>
}