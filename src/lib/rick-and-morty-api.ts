import axios from "axios";

export type RickAndMortyCharacter = {
  name: String;
  gender: String;
  image: String; // URL de la Imagen
}

export const getCharacter = async (id: string) => {
  const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  const { name, gender, image } = res.data

  const character: RickAndMortyCharacter = {
    name,
    gender,
    image
  }

  return character
}