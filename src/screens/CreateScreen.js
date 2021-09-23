import React, {useContext,useState} from "react";
import { View , Text, StyleSheet,TextInput, Button} from 'react-native';
import { Contex } from "../contex/BlogContext";
import BlogPostForm from "../Component/BlogPostForm";

const CreateScreen=({navigation})=>{

    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const { addBlogPost }=useContext(Contex);

return<BlogPostForm onSubmit={(title,content)=>{
addBlogPost(title,content,()=>navigation.navigate('Index'));
}}/>
// (
//     <View >
//         <Text> Create Screen </Text>

//         <Text style={styles.login}> Enter Title: </Text>
//         <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
//         <Text style={styles.login}> Enter Content: </Text>
//         <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)}/>
//         <Button title="Add Blod Post" 
//         onPress={()=> addBlogPost(title,content,()=>{navigation.navigate('Index')})}/>
//     </View>
// );

};

const styles=StyleSheet.create({
    login: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#5B5B5B",
        //alignSelf: "center",
        marginTop: 20,
      },
      input: {
        fontSize: 14,
        padding: 16 ,
        borderRadius: 14,
        borderColor: "#A3A4AA",
        borderWidth: 2,
        marginHorizontal:5
        // marginTop: "6.5%",
      }

});

export default CreateScreen;