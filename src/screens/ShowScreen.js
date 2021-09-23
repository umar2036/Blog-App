import React,{useContext} from "react";
import { View , Text, StyleSheet} from 'react-native';
import { Contex } from "../contex/BlogContext";

const ShowScreen=({route})=>{

const { state } = useContext(Contex);
const info=state.find(info=>info.id===route.params.id);
console.log(info);
return(
    <View >
        

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        
        <Text  style={styles.login}> Title:  {info.title}  </Text> 
        <Text style={styles.login}>  ID:  {info.id} </Text>
         </View>
         <Text style={styles.content}>Content:  {info.content}  </Text>
    </View>
    
);

};

const styles=StyleSheet.create({
    login: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#5B5B5B",
        //alignSelf: "center",
        marginTop: 20,
      },
      content:{
        fontSize: 15,
        fontWeight: "bold",
        color: "#5B5B5B",
        marginTop:30
      }

});

export default ShowScreen;