import './App.css'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsConteiner from "./Components/Dialogs/DialogsConteiner";
import UsersConteiner from "./Components/Users/UsersConteiner";


const App = () => {

    return (
        <BrowserRouter>
            <div>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile' render={() => <Profile />}/>

                        <Route path='/dialogs' render={() => <DialogsConteiner />}/>
                        <Route path='/users' render={() => <UsersConteiner />}/>

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
