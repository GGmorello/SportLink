import React from "react";
import { View, Text } from "react-native-web";
import ChatScreenView from "./ChatScreenView";
import { useState, useRef, useEffect} from "react";
import styles from "./ChatScreenStyle";


export default function ChatScreenPresenter({ route, navigation }) {
  const {match} = route.params;
  const [messageHistory, setMessageHistory] = useState([
    {id: 1, date: "09:23", type: "in", message: "Hey! Let's play some sports!"},
    {id: 2, date: "09:25", type: "out", message: "Hello! Sure thing, I would love to play some sports!"},
    {id: 3, date: "09:34", type: "in", message: "Great, Now I'm writing an extra long message to check the functionality of the message box, I'm even writing things that aren't relevant to this conversation!"},
    {id: 4, date: "09:45", type: "out", message: "Wow that's a fascinating experiment!"},
    {id: 5, date: "09:47", type: "in", message: "Right??"}])
const [currMessage, setCurrMessage] = useState("")
const [currID, setCurrID] = useState(0)



//TODO FIX ID:s
function getNextID(){
    setCurrID(currID+1)
    return Math.floor(Math.random() * 100000000);
}

function inMessage(data){
    const now = new Date()
    const timestamp = now.getHours() + ':' + now.getMinutes();
    const message = {
        id: getNextID(), date: timestamp, type: "in", message: data
    }
    setMessageHistory(prevState => [...prevState, message])
}

function outMessage(data){
    const now = new Date()
    const timestamp = now.getHours() + ':' + now.getMinutes();
    const message = {
        id: getNextID(), date: timestamp, type: "out", message: data
    }
    setMessageHistory(prevState => [...prevState, message])
}


function onSend(){
    //todo regex check msg
    outMessage(currMessage)
    onSubmit(currMessage) 
    setCurrMessage('')
}


 async function onSubmit(event) {
   
}


function onType(data){
    setCurrMessage(data)
}
  return (
  <ChatScreenView
    match = {match}
    style= {styles.screen}
    currentMessage = {currMessage}
    messageHistory = {messageHistory}
    sendMessage={function(data){
      onSend()
    }}
    setMessage={function(data){
      onType(data)
    }}
  />)
}