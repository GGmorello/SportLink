import React from "react";
import {View, ImageBackground, Dimensions} from "react-native"

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default function ShowImageScreenView(props) {

    return (
        <View>
            <ImageBackground
                style={{width: '100%',
                height: undefined, position:'absolute', top: deviceHeight/5,
                aspectRatio: 1, alignSelf:'center', alignContent: 'center'}}
                source={props.image}
            />
        </View>)
}