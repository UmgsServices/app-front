import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken=()=>{
   const {setAuth}=useAuth();
   
   const refresh=async()=>{
    const response =await axios.get('/refresh',{
        withCredential:true
    });
    setAuth(prev=>{
        //console.log(JSON.stringify(prev))
        //console.log(response.data)
        return {...prev,accessToken:response.data.accessToken}
    })
    console.log(response.data.accessToken)
    return response.data.accessToken
   }
   return refresh

}
export default useRefreshToken