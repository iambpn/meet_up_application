import MeetupForm from "../Components/Meetups/MeetupForm";
import {useHistory} from "react-router-dom";

export interface IMeetupData{
    title:string,
    address:string,
    image:string,
    description:string,
}

function NewMeetup() {
    const history = useHistory();
    let meetUpHandler = (meetupData: IMeetupData) => {
        fetch("https://react-meetup-1ea42-default-rtdb.firebaseio.com/meetup.json",
            {
                method:"POST",
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(res=>{
                if(res.status === 200){
                    // navigate away programmatically
                    history.replace("/") // replace: do not store to history stack
                }
            })
    };

    return (
        <section>
            <h1>Add New Meetup</h1>
            <MeetupForm onAddMeetUp={meetUpHandler}/>
        </section>
    );
}

export default NewMeetup;