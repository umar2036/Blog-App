import React, {useReducer} from "react";

export default (reducer, actions, initialSatate) =>{

    const Contex = React.createContext();

    const Provider=({children})=>{
        const [state,dispatch] = useReducer(reducer, initialSatate);


        // action === { addBlogPost: {dispatch}=> return ()=>{}}
        const boundActions = {};
        for( let key in actions){
            boundActions[key]= actions[key](dispatch);
        }

        return(
            <Contex.Provider value = {{state,...boundActions}}>
                {children}
            </Contex.Provider>
        );
    }
    return{Contex,Provider};  
};