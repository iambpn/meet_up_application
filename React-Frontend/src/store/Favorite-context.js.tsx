import React, {createContext, useState} from "react";
import {IMeetupData} from "../Pages/AllMeetups";

interface IContext {
    favorites: Array<IMeetupData>,
    totalFavourites: number,
    addFavorite: (favoriteMeetup: IMeetupData) => void,
    removeFavorite: (meetupID: string) => void,
    itemIsFavorite: (meetupID: string) => boolean
}

const FavouriteContext = createContext<IContext>({
    favorites: [],
    totalFavourites: 0,
    addFavorite: () => {
    },
    removeFavorite: () => {
    },
    itemIsFavorite: () => false

});

export function FavouritesContextProvider(props: { children: React.ReactNodeArray | React.ReactNode }) {

    const [userFavorite, setUserFavorites] = useState<Array<IMeetupData>>([]);

    let addFavouriteHandler = (favoriteMeetup: IMeetupData) => {
        setUserFavorites(
            // another way to update the state.
            // this way is used when the updating state is dependent on prev state
            (prevUserFav) => {
                return prevUserFav.concat(favoriteMeetup);
            }
        );
    }

    let removeFavoriteHandler = (meetupID: string) => {
        setUserFavorites(prevState => {
            return prevState.filter(meetup => {
                return meetup.id !== meetupID;
            })
        })
    }

    let itemIsFavoriteHandler = (meetupID: string) => {
        return userFavorite.some(
            (meetup) => {
                return meetup.id === meetupID;
            }
        )
    }

    //creating new context to add as value
    const context: IContext = {
        favorites: userFavorite,
        totalFavourites: userFavorite.length,
        addFavorite: addFavouriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (
        <FavouriteContext.Provider value={context}>
            {props.children}
        </FavouriteContext.Provider>
    );
}

export default FavouriteContext;
