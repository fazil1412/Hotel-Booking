import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import {Reducer} from  "../Reducers/useReducer"


export const AppContext = React.createContext({});

export const AppProvider = ({children}) => {
    const initialState = {  
        user:[] 
    };
    const [loading,setLoading] = useState(true)

    const [fromDate,setFromDate] = useState("")
 const [toDate,setToDate] = useState("")
    const [data, setData] = useState([]);

    const getData = () => {
        axios
          .get("http://localhost:5000/hotel/gethotels")
          .then((res) => {
            console.log("All Hotels: ", res.data);
            setData(res.data.hotels);
            setLoading(false)
          })
          .catch((err) => {
            console.log(err);
          });
      };

    useEffect( () => {
      getData()
    },[])
    let userInfo = JSON.parse(localStorage.getItem("user"));
    const [state,dispatch] = useReducer(Reducer,userInfo);
    
    useEffect( () => {
        localStorage.setItem("user",JSON.stringify(state))
    },[state])
    
    return <AppContext.Provider value={{...state,dispatch,data,setFromDate,setToDate,toDate,fromDate,loading,setLoading}}>
        {children}
    </AppContext.Provider>
}


