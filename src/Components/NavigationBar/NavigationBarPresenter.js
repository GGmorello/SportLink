import React from "react";
import NavigationBarView from "./NavigationBarView"

export default function NavigationBarPresenter() {
  const [currentlySelected, setCurrentlySelected] = useState([])

  function onProfileClickACB(){
    //navigate to profile
    
  }
  function onSwipeClickACB(){
    //navigate to swipe
  }
  function onMatchesClickACB(){
    //navigate to matches
  }
  return (<NavigationBarView 
    onProfileClick={onProfileClickACB}
    onSwipeClick={onSwipeClickACB}
    onMatchesClick={onMatchesClickACB}
    />)

}
