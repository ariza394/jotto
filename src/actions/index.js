import axios from 'axios';


export const getSecretWord = () =>{
    //response from server
    return axios.get('http://localhost:3030')
        .then(response => response.data)
}