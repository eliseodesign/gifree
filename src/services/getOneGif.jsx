import { API_KEY } from "./config"


export default async function getOneGif({id}){

  console.log(id)
  const peticionID = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`
  const resID = await fetch(peticionID)

  const response = await resID.json()
  
  const { images, title, username} = response.data

  const {url} = images.downsized_medium

  
 
  
  
  return {title, url, username}
}

