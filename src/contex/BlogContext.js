import createDataContex from './createDataContex';
import jsonServer from '../api/jsonServer';
//const BlogContext = React.createContext();

const blogReducer=(state,action)=>{
    switch(action.type){
        case 'getBlog':
            return action.payload;
        case 'addBlog':
            return [...state,
                {
                    id:Math.floor(Math.random()*9999),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        case 'delBlog':
            return(
           state.filter((blogPost)=>blogPost.id!==action.payload)         
            );
        case 'editBlog':
            return(
                state.map((info)=>{
//return info.id===action.payload.id ? action.payload :  info                 
                    if(info.id===action.payload.id){
                        return action.payload;
                    }else{
                        return info
                    }
                })
            );
        default:
            return state;
    }

};

const getBlogPost =(dispatch)=>{
    return async () =>{
        const respone = await jsonServer.get('/blogposts')
  
        dispatch({type: 'getBlog', payload: respone.data});
    };
};

const addBlogPost=(dispatch)=>{
    return async (title, content, callback)=>{
        await jsonServer.post('/blogposts', { title, content});
       
        const respone = await jsonServer.get('/blogposts')
  
       
       
        dispatch({type : 'addBlog', payload:{title, content}});
    
        callback();
    
    };
    
};

const delBlogPost=(dispatch)=>{
    return async id =>{
        await jsonServer.delete(`/blogposts/${id}`)

        dispatch({type:'delBlog',payload: id});
    };

};

const editBlogPost=(dispatch)=>{
    return async (id,title,content,callback)=>{
        await jsonServer.put(`/blogposts/${id}`,{title,content });
        
        dispatch({type:'editBlog', payload:{id,title,content}
    });


    if(callback)
    {
        callback();
    }
    
    };
};
// export const BlogProvider=({ children })=>{
//     const [blogPosts,dispatch] = useReducer(blogReducer,[]);

   

//     // const addBlogPost=()=>{
//     //     //console.log(`Blog Post`);
//     //     //console.log(blogPosts);
//     //     //const newIndex = blogPosts.length + 1;
//     //     //console.log(`newIndex is ${newIndex}`);
//     //   // blogPosts[newIndex] = 'New Title';
//     //     setBlogPosts([...blogPosts,{ title:`Hard Coded #  ${blogPosts.length+1} ` }]);
//     //     //console.log(blogPosts.length);
//     //     //console.log("Hleeeee");
//     // };
//     //const blogPosts = [{title: 'Blog post # 1'},{title: 'Blog post # 2'}]

//     return (
//     <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
//         {children}
//     </BlogContext.Provider>
//     );
// };

export const { Contex, Provider}= createDataContex(
    blogReducer,
    {addBlogPost, delBlogPost,editBlogPost,getBlogPost},
    []   
    ); 
//export default BlogContext;