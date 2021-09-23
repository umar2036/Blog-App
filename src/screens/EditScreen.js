import React, {useContext,useState} from "react";
import { View , Text, StyleSheet,TextInput, Button} from 'react-native';
import { Contex } from "../contex/BlogContext";
import BlogPostForm from "../Component/BlogPostForm";
const EditScreen=({navigation,route})=>{

   


    const { state,editBlogPost } = useContext(Contex);
    const id=route.params.id;
    const info=state.find(info=>info.id===id);
    console.log(info);

    const [title,setTitle]=useState(info.title);
    const [content,setContent]=useState(info.content);
    const { addBlogPost }=useContext(Contex);
    const { delBlogPost } = useContext(Contex);

return<BlogPostForm 
    initialValues={{title:info.title, content:info.content}}
    onSubmit={(title,content)=>{
    editBlogPost(id,title,content,navigation.pop())
}}/>
    // <View >
    //     <Text> Edit Screen- {route.params.id}</Text>

    //     <Text style={styles.login}> Enter New Title: </Text>
    //     <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
    //     <Text style={styles.login}> Enter New Content: </Text>
    //     <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)}/>
    //     <Button title="Save Changes" 
    //     onPress={()=> 
    //     {
    //         //delBlogPost(info.id);
    //         addBlogPost(title,content,()=>{
    //             navigation.navigate('Index');
    //         });
            
            
    //     }}/>
    // </View>

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

export default EditScreen;