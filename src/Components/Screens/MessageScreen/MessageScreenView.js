import React from "react";
import {View, Text} from "react-native"
import ChatPreview from "./ChatPreviewBox/ChatPreviewBoxView";

export default function MessageScreenView(props) {
    return (
        <View>
            <ChatPreview name="Test Name" messagePreview="This is a sample message..." imageUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
            <ChatPreview name="Test Name" messagePreview="This is a sample message..." imageUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
            <ChatPreview name="Test Name" messagePreview="This is a sample message..." imageUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
            <ChatPreview name="Test Name" messagePreview="This is a sample message..." imageUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
        </View>)
}
