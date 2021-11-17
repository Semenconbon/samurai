import './App.css'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile' render={() => <Profile
                            state={props.state.profilePage}
                            addPost={props.addPost}/>}/>

                        <Route path='/dialogs' render={() => <Dialogs
                            state={props.state.dialogsPage}/>}/>
                        {/*                     <Route path='/music' component={Music} />
                        <Route path='/settings' component={News} />
                        <Route path='/news' component={Settings} />*/}
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
