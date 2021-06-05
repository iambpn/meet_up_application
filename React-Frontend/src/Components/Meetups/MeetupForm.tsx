import React, {useRef} from "react";
import styles from "./MeetupForm.module.css";
import Card from "../UI/card";
import {IMeetupData} from "../../Pages/NewMeetup";

export default function MeetupForm(props:{onAddMeetUp:(data:IMeetupData)=>void}) {
    const titleRef = useRef<HTMLInputElement>() as React.RefObject<HTMLInputElement>;
    const imageRef = useRef<HTMLInputElement>() as React.RefObject<HTMLInputElement>;
    const addressRef = useRef<HTMLInputElement>() as React.RefObject<HTMLInputElement>;
    const descriptionRef = useRef<HTMLTextAreaElement>() as React.RefObject<HTMLTextAreaElement>;

    let submitHandler = (e:React.SyntheticEvent)=>{
        e.preventDefault();
        const title = titleRef.current!.value;
        const image = imageRef.current!.value;
        const address = addressRef.current!.value;
        const description = descriptionRef.current!.value;

        const meetupData:IMeetupData= {
            title,
            address,
            image,
            description
        }
        props.onAddMeetUp(meetupData);
    };

    return (
        <Card>
            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles.control}>
                    <label htmlFor={"title"}>Meetup Title</label>
                    <input type="text" id={"title"} required={true} ref={titleRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor={"image"}>Meetup Image</label>
                    <input type="text" id={"image"} required={true} ref={imageRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor={"address"}>Address</label>
                    <input type="text" id={"address"} required={true} ref={addressRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor={"description"}>Description</label>
                    <textarea id={"description"} required={true} rows={5} ref={descriptionRef}/>
                </div>
                <div className={styles.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}