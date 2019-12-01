import axios from 'axios';

const newUser = async (user) => {
  try{
    const res = await axios.post('/user/userCreate',user);
    return res.data;
  }catch(e){
    console.error(e);
    return {message:e.response.data.message,error:e}
  }
}

const login = async (user) => {
  try{
    const res = await axios.post('/user/login',user);
    return res.data;
  }catch(e){
    console.error(e);
    return {message:e.response.data.message,error:e}
  }
}

export default { newUser, login };