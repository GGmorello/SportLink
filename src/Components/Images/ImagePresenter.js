import React from "react";
import ImageView from "./ImageView"

export default function ImagePresenter(props) {

    function showImageACB() {
      props.navigation.navigate('ShowImage', {img : props.url})            //hw do i pass as a parameter the url of the image ?
    }
    
    return (<ImageView
      onPressShowImage={showImageACB}
      url={props.url}
      styles={props.styles}          //i dont know how legal this is because how do you do it? do you call the presenter from the view you are rendering? is that legal?
    />)
  
  }