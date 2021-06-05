import {useContext} from "react";
import FavouriteContext from "../store/Favorite-context.js";
import MeetupList from "../Components/Meetups/MeetupList";

function Favorites(){
    const favoriteContext = useContext(FavouriteContext);
    let content:JSX.Element;
    if (favoriteContext.totalFavourites === 0){
        content = <p>You got no favorite yet. Start adding some?</p>;
    }
    else {
        content = <MeetupList allMeetups={favoriteContext.favorites}/>;
    }

    return (
        <div>
            <h1>My Favorites</h1>
            {content}
        </div>
    );
}

export default Favorites;