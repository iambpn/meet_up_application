import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import AllMeetups from "./Pages/AllMeetups";
import NewMeetup from "./Pages/NewMeetup";
import Favorites from "./Pages/Favorites";
import Layout from "./Components/layout/layout";

function App() {
    return (
        // switch prevents from loading all the page that match with the path.
        // e.g /favourite match with /  and /favourite so both page will be loaded but
        // its not what we want we only want to load one page.
        <React.Fragment>
            <Layout>
                <Switch>
                    {/*exact will make this path load when the exact urls is matched*/}
                    <Route path={"/"} exact={true} component={AllMeetups}/>
                    <Route path={"/new-meetup"} exact={true} component={NewMeetup}/>
                    <Route path={"/favorite"} exact={true} component={Favorites}/>
                </Switch>
            </Layout>
        </React.Fragment>
    );
}

export default App;
