import './App.css'
import {Card, CardVariant} from "./bibijon/Card";
import {UserList} from "./bibijon/UserList";
import {ITodo, IUser} from "./bibijon/types/Types";
import {useEffect, useState} from "react";
import axios from "axios";
import {List} from "./bibijon/List";
import {UserItem} from "./bibijon/UserItem";
import {TodoItem} from "./bibijon/TodoItem";
import {EventsExample} from "./bibijon/EventsExample";
import {NowView, ScrollToBottom, UseEffectExample} from "./bibijon/UseEffectExample";
import {NavBar} from "./components/NavBar/NavBar";
import {Content} from "./components/Content/Content";

function App() {

    return (
        <>
            <NavBar/>
            <Content/>
        </>
    )
}

export default App
