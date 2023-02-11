import { StyleSheet, Dimensions} from "react-native"

let deviceWidth = Dimensions.get("window").width;

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 100,
        overflow: "hidden"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
        resizeMode: 'stretch'
    },
    subtitle:{
        color: "#7D7B7B",
        fontSize: 13,
        marginTop: 5,
        marginLeft: 15,
        marginBottom: 5
    },
    text:{
        color: "#000000",
        fontSize: 30
    },
    subtext:{
        color: "#3f3f3f",
        fontSize: 15,
        textAlign: 'center'
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 0,
        marginLeft: 15,
        marginRight: 15
    },
    infoContainer2: {
        marginTop: 5,
        marginBottom: 0,
        marginLeft: 15,
        marginRight: 15
    },
    add: {
        backgroundColor: "#B4CBF0",
        position: "absolute",
        bottom: 0,
        right: 10,
        width: 30,
        height: 30,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    edit: {
        backgroundColor: "#B4CBF0",
        position: "absolute",
        right: 20,
        bottom: 0,
        width: 55,
        height: 55,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    activitiesImage:{
        width: 100,
        height: 100,
        marginLeft: 3,
        marginRight: 3
    },
    activitiesImageEdit:{
        width: deviceWidth/5,           //i think this works well not too sure would have to check on another device 
        height: deviceWidth/5,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 5,
        marginBottom: 5
    },
    containerIcon:{
        flexDirection: 'row', 
        backgroundColor: '#B4CBF0',
        borderColor:'#B4CBF0',
        borderWidth: 1,
        marginRight: 10,
        marginBottom: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 10
    },
    icon: {
        width:25,
        height:25,
        marginRight: 10
    },
    iconText: {
        fontSize: 14,
        color: '#000000',
        marginTop: 2
    },
    
    flexView: {
        flex: 1,
        backgroundColor: "white",
      },
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    modalContent: {
        backgroundColor: "#161616",
        paddingTop: 12,
        paddingHorizontal: 12,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        minHeight: 100,
        paddingBottom: 20,
    },
    center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    barIcon: {
        width: 60,
        height: 5,
        backgroundColor: "#bbb",
        borderRadius: 3,
    },
    text2: {
        color: "#bbb",
        fontSize: 24,
        marginTop: 100,
    },
    btnContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 500,
    },

  });



  export default style