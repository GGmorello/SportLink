import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screen: {
        position: "relative",
    },
    container:{
        flex: 1,           
      },
    chatContainer:{
        flexGrow: 1,    
      },
      list:{
        paddingHorizontal: 0,
        marginHorizontal: 5,
        flex:1
      },
      footer:{
        flexDirection: 'row',
        position: "fixed",
        width: "100%",
        bottom: 0,
      },
    
      btnSend:{
        backgroundColor:"#00BFFF",
        width:40,
        height:40,
        borderRadius:360,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
      },
      iconSend:{
        width:30,
        height:30,
        alignSelf:'center',
        padding:5
      },
      inputContainer: {
        borderBottomColor: '#FFFCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:2,
        borderBottomWidth: 1,
        height:50,
        flexDirection: 'row',
        alignItems:'center',
        flex:1,
        margin: 10,
      },
      inputs:{
        height:40,
        marginVertical: 10,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
      },
      balloon: {
        maxWidth: Dimensions.get('window').width*0.8,
        padding: 15,
        borderRadius: 0,
      },
      timeStampIn:{
        alignSelf: 'flex-start',
      },
      timeStampOut:{
        alignSelf: 'flex-end',
      },
      itemIn: {
        alignSelf: 'flex-start'
      },
      itemOut: {
        alignSelf: 'flex-end'
      },
      time: {
        alignSelf: 'flex-end',
        marginTop: 150,
        marginBottom: 0,
        fontSize:12,
        color:"#808080",
      },
      item: {
        marginVertical: 14,
        flex: 1,
        flexDirection: 'row',
        backgroundColor:"#aeeeee",
        borderRadius:4,
        padding:2,
      },
  }); 

  export default styles