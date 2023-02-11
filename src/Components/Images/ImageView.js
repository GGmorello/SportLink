import { View, Text, Image, TouchableOpacity } from "react-native"


export default function ImageView(props) {
    function onPressShowImage() {
        props.onPressShowImage()
    }

    return (
        <View>
            <TouchableOpacity onPress={() => onPressShowImage()}>
                <Image
                    style={props.styles}
                    source={props.url}
                />
            </TouchableOpacity> 
        </View>)
}
