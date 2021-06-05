import {Link} from "react-router-dom";
// using css module
import classes from "./MainNavigation.module.css"
import {useContext} from "react";
import FavouriteContext from "../../store/Favorite-context.js";

export default function MainNavigation(): JSX.Element {
    const favoriteContext = useContext(FavouriteContext);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        {/*Link is used instead of <a> tag because we want to navigate with in the page*/}
                        <Link to={"/"}>All Meetups</Link>
                    </li>
                    <li>
                        <Link to={"/new-meetup"}>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to={"/favorite"}>Favorite<span className={classes.badge}>{favoriteContext.totalFavourites}</span> </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}