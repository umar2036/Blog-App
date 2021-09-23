import React,{useState} from "react";
import {View,Text,StyleSheet,Button,TextInput} from 'react-native';

const BlogPostForm=({onSubmit, initialValues})=>{

    const [title,setTitle]=useState(initialValues.title);
    const [content,setContent]=useState(initialValues.content);
    return(
        <View >
            <Text> Create Screen </Text>
    
            <Text style={styles.login}> Enter Title: </Text>
            <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
            <Text style={styles.login}> Enter Content: </Text>
            <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)}/>
            <Button title="Save Blod Post" 
            onPress={()=> onSubmit(title,content)
            
                // addBlogPost(title,content,()=>{
                //     navigation.navigate('Index');
                // });
                
                
            }/>
        </View>
    );
};

BlogPostForm.defaultProps={
    initialValues:{
        title:'',
        content:''
    }
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

export default BlogPostForm;