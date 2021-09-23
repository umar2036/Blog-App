import React, { useContext,useEffect } from "react";
import {Text, View,StyleSheet, FlatList, Button} from 'react-native';
import {Contex} from '../contex/BlogContext';
import {Feather} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";


const IndexScreen =({navigation})=>{
    
    const { state , addBlogPost, delBlogPost,getBlogPost} = useContext(Contex);
    //const value = useContext(BlogContext);
    useEffect(()=>{
        //console.log(navigation);
        getBlogPost();

        navigation.addListener('didFocus',()=>{
         getBlogPost();
        });
        
    },[]);

    { if(state.length===0) return <Text>No Blog Found</Text>  };

    return(
        <View>
            <Text> Index Screen</Text>
            <FlatList
            data={state}
            keyExtractor={(blogPosts)=>blogPosts.title}
            renderItem={({item})=>{
                // console.log(`item is `);
                // console.log(item);
                // console.log(`data`);
                // console.log(data);
              return(
               <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
               <View style={styles.row}>
                <Text style={styles.title}>{item.title} - {item.id}</Text>
                <TouchableOpacity onPress={()=>delBlogPost(item.id)}>
                <Feather style={styles.icon} name="trash"/>
                </TouchableOpacity>
                </View>
                </TouchableOpacity>
              );
                  
            }
            }
            
            />
        </View>
    );
};



const styles=StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:10,
        marginHorizontal:10,
        borderTopWidth:2
        

        
    },
    title:{
        fontSize:18,
        //marginVertical:10
    },
    icon:{
        fontSize:24,
        color:'red'
    }
});

export default IndexScreen;