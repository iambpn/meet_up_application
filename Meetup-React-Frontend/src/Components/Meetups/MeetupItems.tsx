import styles from "./MeetupItems.module.css";
import Card from "../UI/card";
import {useContext} from "react";
import FavouriteContext from "../../store/Favorite-context.js";
import {IMeetupData} from "../../Pages/AllMeetups";


export default function MeetupItems(props: IMeetupData) {
    const favoriteContext = useContext(FavouriteContext);
    const itemIsFavorite = favoriteContext.itemIsFavorite(props.id);

    let toggleFavoriteStatusHandler = ()=>{
        if(itemIsFavorite){
            favoriteContext.removeFavorite(props.id);
        }
        else{
            favoriteContext.addFavorite(
                {
                    id:props.id,
                    title:props.title,
                    image:props.image,
                    address:props.address,
                    description:props.description
                    // ...props // this can also be used
                }
            )
        }
    }

    return (
        <Card>
            <li className={styles.item}>
                <div className={styles.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={styles.content}>
                    <h3>Title: {props.title}</h3>
                    <address>Address: {props.address}</address>
                    <p>Description: {props.description}</p>
                </div>
                <div className={styles.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {
                            itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"
                        }
                    </button>
                </div>
            </li>
        </Card>
    );
}