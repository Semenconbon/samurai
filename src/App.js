import './App.css'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsConteiner from "./Components/Dialogs/DialogsConteiner";


const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile' render={() => <Profile store={props.store}/>}/>

                        <Route path='/dialogs' render={() => <DialogsConteiner store={props.store}/>}/>
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
