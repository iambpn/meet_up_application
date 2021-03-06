import {useEffect, useState} from "react";
import MeetupList from "../Components/Meetups/MeetupList";

export interface IMeetupData {
    id: string,
    title: string,
    image: string
    address: string,
    description: string
}


function AllMeetups(): JSX.Element {
    const [isLoading, updateIsLoading] = useState<boolean>(true);
    const [loadedMeetUps, updateLoadedMeetups] = useState<Array<IMeetupData>>([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/get-meetups/", {method: "POST"})
            .then((res) => {
                    res.json()
                        .then((data) => {
                                updateLoadedMeetups(data.data);
                                updateIsLoading(false);
                            }
                        );
                }
            );
    }, []);

    if (isLoading) {
        // {process.env.PUBLIC_URL + '/logo.png'} this can also be used to fetch the images from public folder
        // or can also be directly referenced
        return (
            <div style={{textAlign: "center", height: "250px", display: "flex"}}>
                <img src="reduced_loading.gif" alt="Loading..." height={"100px"} width={"100px"}
                     style={{margin: "auto"}}/>
            </div>
        );
    } else {
        return (
            <div>
                <h1>All Meetups</h1>
                <MeetupList allMeetups={loadedMeetUps}/>
            </div>
        );
    }
}

export default AllMeetups;