import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {message: 'Hello!!! Who are you?)', counterLike: '24'},
    {message: 'YEEEEEEAAAAHHH', counterLike: '31'},
    {message: 'Hello, i first man in world', counterLike: '3'}
]

let dialogs = [
    {id: 1, name: 'Sergey'},
    {id: 2, name: 'Anna'},
    {id: 3, name: 'Dima'},
    {id: 4, name: 'Alex'},
    {id: 5, name: 'Igor'}
]

let messages = [
    {id: 1, message: 'Hellooo)))'},
    {id: 2, message: 'Who are you?'},
    {id: 3, message: 'Yes'},
    {id: 4, message: 'I am friend)))'},
    {id: 5, message: 'Oh. OMG, cringe'}
]



ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
