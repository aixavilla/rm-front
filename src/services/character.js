import axios from 'axios'

const allCharacter = async () => {
  try{
    const res = await axios.get('https://rickandmortyapi.com/api/character/');
    return res.data;
  } catch(e) {
    console.error(e);
  }
}

const saveFavoriteUser = async(user, favorite, token) => {
  try{
    const res = await axios.post('/favorite/create',{user,favorite},
    {headers:{Authorization:`Bearer ${token}`}});
    return res.data;
  }catch(e){
    console.log(e);
  }
}

const allFavorite = async (user,token) => {
  try{
    const res = await axios.get(`/favorite/${user._id}`,{headers:{Authorization:`Bearer ${token}`}});
    return res.data;
  } catch(e) {
    console.error(e);
  }
}

export default { allCharacter, saveFavoriteUser, allFavorite };


