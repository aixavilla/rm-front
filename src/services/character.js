import axios from 'axios'

const allCharacter = async () => {
  try{
    const res = await axios.get('https://rickandmortyapi.com/api/character/');
    return res.data;
  } catch(e) {
    console.error(e);
  }
}

export default { allCharacter };


