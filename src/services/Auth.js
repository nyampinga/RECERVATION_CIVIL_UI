import axios from "axios";

// const CIVIL_API_AUTH= "https://civilmarriage-api.herokuapp.com/civil/v1/user";
const CIVIL_API_AUTH="http://05d8-105-178-114-87.ngrok.io/civil/v1/user";
const CIVIL_API_AUTHs= "https://civilmarriage-api.herokuapp.com/civil/v1";
const token = localStorage.getItem("civil_token");
const config={
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
    }
}
class AuthApi{

    async login(data){

        try {
            const res= await axios.post(CIVIL_API_AUTH+"/signin",data,config);
            return res;
        } catch (error) {
            console.log(  error.response);

            return error.response;
        }

    }

    async signup(data){

        try {
            const res= await axios.post(CIVIL_API_AUTH+"/signup",data,config);
            return res;
        } catch (error) {
            console.log(error);
            return error.response;
        }

    }
    
    async getAllUsers(){

        try {
            const res= await axios.get(CIVIL_API_AUTH+"/all",config);
            return res;
        } catch (error) {
            console.log(error.response);
            return error.response;
        }
    }
    async getAllEmployees(){
        try{
const res = await axios.get(CIVIL_API_AUTH+"/all/employees",config)
return res;
        }catch(error){

            return error.response;
            
       
        }

    }


    async getAlluser(){
        try{
const res = await axios.get(CIVIL_API_AUTH+"/all/user",config)
return res;
        }catch(error){

            return error.response;
            
       
        }

    }
}

export default new AuthApi();