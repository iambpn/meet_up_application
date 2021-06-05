import styles from "./MeetupList.module.css";
import {IMeetupData} from "../../Pages/AllMeetups";
import MeetupItems from "./MeetupItems";

type MeetupListProps = {
    allMeetups: Array<IMeetupData>
}

export default function MeetupList(props: MeetupListProps) {
    let meetupsJSX:Array<JSX.Element> = props.allMeetups.map(
        (value) => {
            return <MeetupItems image={value.image} title={value.title} address={value.address}
                                description={value.description} key={value.id} id={value.id}/>;
        }
    );

    return (
        <ul className={styles.list}>
            {meetupsJSX}
        </ul>
    );
}