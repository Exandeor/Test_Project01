import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
 //LoginScreen
 background: {
    flex : 1,
    alignItems : "center",
    justifyContent:'space-around',
    backgroundColor : 'rgb(66 ,103 ,168)',
} ,
logoContainer:{
    width : '100%',
    top : 80,
    alignItems : 'center',
    justifyContent: 'flex-end',
} ,
logo: {
    width : 250,
    height: 100,
} ,
formContainer:{
    width : '100%',
    height: '20%',
    alignItems: "center",
    justifyContent : "space-between"
} ,
emailInput: {
    width :350,
    height:40,
    padding:10,
    backgroundColor:"white",
} ,
passwordInput: {
    width :350,
    height:40,
    padding:10,
    backgroundColor:"white",
} ,
loginButton: {
    height: 40,
    width : 350,
    backgroundColor : 'rgb(56 ,93 ,158)',
    alignItems:'center',
    justifyContent:'center'
} ,
bottomTextContainer: {
    justifyContent : "flex-end",
    top : 50
} ,
bottomText: {
    textDecorationLine: 'underline',
    color : "white"
} ,
//LoginScreen

//MainScreen
MainBackground: {
    width : "100%",
    height: "100%",
    backgroundColor:"#262626"
    } ,
flatListContainer : {
    width : "100%",
    height: "100%",
    backgroundColor:"#262626"
} ,
//MainScreen

//FriendListScreen
FriendListBackground: {
    top : 50,
    left : 400,
    position: "absolute",
    width : "100%",
    height : "100%",
    backgroundColor:"#262626"
   } ,
FirstBoxContainer: {
    backgroundColor: "#262626",
    height: 50,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems : "center"
} ,
FirstBoxText: {
    fontSize : 25,
    fontWeight : "900",
    color : "white",
    fontFamily : "Roboto",
    marginHorizontal : 15
} ,
SecondBoxContainer: {
    backgroundColor: "#262626",
    height: 50,
    flexDirection:"row",
    justifyContent:"flex-start"
} ,
TwoButtons: {
    backgroundColor: "#595959",
    borderRadius : 50,
    marginLeft : 10,
    marginVertical : 4,
    width :110,
    height : 35,
    justifyContent: "center",
    alignItems : "center"

} ,
ThirdBoxContainer: {
    backgroundColor: "#262626",flex : 0.9
} ,
FriendRequestHeader: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 8,
    backgroundColor: "#262626",
    marginVertical : 10,
    

} ,
TotalFriendRequest: {
    paddingHorizontal: 15,
    flexDirection: "row",
    marginVertical: 0,
    width : "100%",
    height : 110,
    alignItems : "center"
} ,
ConfirmDeleteButtons: {
    flexDirection: "row",
} ,
ConfirmButton: {
    backgroundColor : '#1a75ff',//"#1aa3ff",
    height : 35,
    width  : 125,
    borderRadius : 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight : 7
} ,
DeleteButton : {
    backgroundColor : "#595959",
    height : 35,
    width  : 125,
    borderRadius : 5,
    justifyContent: "center",
    alignItems: "center", 
} ,

//FriendListScreen

//WatchScreen
WatchMenuContainer: {
    backgroundColor: "#262626",
    paddingLeft : 5,
    height: 50,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems : "center"
} ,
WatchMenuText: {
    fontSize : 25,
    fontWeight : "900",
    color : "white",
    fontFamily : "Roboto",
    marginHorizontal : 15
} ,
WatchSuggestionsContainer: {
    backgroundColor: "#262626",
    width : "100%",
    height: 50,
    flexDirection:"row",
} ,
WatchSuggestions: {
    backgroundColor: "cyan",
    borderRadius : 50,
    marginRight : 20,
    paddingHorizontal: 11,
    height : 35,
    justifyContent: "center",
    alignItems : "center"

} ,
whatever: {
    paddingLeft :20
}
//WatchScreen
})




