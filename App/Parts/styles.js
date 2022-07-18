import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
//FIrstBox
firstBox: {
    flex: 0.5,
    justifyContent: "space-between",
    flexDirection : "row",
    backgroundColor :"#262626",
    AlignItems: "space-between",
    } ,
    
    facebookLogo:{
    width : 130,
    height : 50,
    } ,
    
    twoIconsContainer: {
      width : 100,
      height:50,
      alignItems : "center",
      justifyContent : "space-around",
      flexDirection : "row",
      
    } ,
    
    searchIcon: {
    width: 50,
    height:50,
    borderRadius: 50
    } ,
    
    messengerIcon: {
    width:50,
    height: 50,
    borderRadius:50
    }  ,
//FirstBox

//SecondBox
secondBox: {
    flex : 0.5,
    backgroundColor : "#262626",
    flexDirection : "row",
    justifyContent : "space-between"
} ,
    
fiveIconsContainer: {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
    paddingVertical : 10,
    borderBottomColor : "grey",
    borderBottomWidth : 1
} ,

//SecondBox

//ThirdBox
thirdBox: {
    flex : 7,
    backgroundColor : "#262626",
} ,
    
ThirdBoxProfileContainer: {
    backgroundColor : "#262626",
    flexDirection : "row",
    justifyContent : "space-around",
    alignItems : "center",
    width  : '100%',
    height : 60// "8%"
} ,
    
ThirdBoxProfileImage: {
    width:  40,
    height: 40,
    borderRadius: 50,
    
    
} ,

writeContent: {
    backgroundColor: "#262626",
    width :"80%",
    height: 35,// "60%",
    borderRadius : 50,
    paddingHorizontal : 20,
    borderColor : "grey",
    borderWidth : 1
} ,
    
storyContainer: {
    height :225 ,// "32%",
    width : "100%",
    backgroundColor: "#262626",
    flexDirection : "row",
    paddingLeft : 10

} ,

storyCard: {
    width : 110,
    height : "90%",
    marginLeft : 7,
    marginVertical : 10,
    borderRadius : 15
} ,
//ThirdBox

//Post
post: {
    backgroundColor :"#262626",
    justifyContent : "center",
    alignItems : 'center',
    
} ,
profileContainer: {
   width : "100%",
   flexDirection : "row",
   justifyContent : "space-between",
} ,
profilePicture: {
    width : 40,
    height : 40,
    borderRadius : 50
} ,
GroupName: {
   width: "60%",
   color : "white",
   fontSize : 16,
   fontWeight :"600",

} ,
liner: {
    flexDirection: "row",
    paddingHorizontal : 10,
    paddingVertical:10,
    width : "100%",
    justifyContent: "space-between",
    alignItems : "center"
} ,
dynamicHeight: {
   height: "100%",
} ,
textContainer: {
   width: "100%"
} ,
postText: {
    paddingHorizontal: 10,
    paddingBottom : 8,
    color: "white",
} ,
imageContainer: {
   width : "100%",
   height : 300
} ,
image: {
   width :  "100%",
   height : "100%"
} ,
reactIcons: {
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  width : "33%",
  height: 45
} ,
actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems : "center",
    width: "100%",

}
//Post
})