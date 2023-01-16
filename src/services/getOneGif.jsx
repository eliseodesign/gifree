export default async function getOneGif({id}){

  console.log(id)
  const peticionID = `https://api.giphy.com/v1/gifs/${id}?api_key=8GegqHwF15gJSENH4oGn810OqOHJaWNr`
  const resID = await fetch(peticionID)

  const response = await resID.json()
  
  const { images, title, username} = response.data

  const {url} = images.downsized_medium

  
 
  
  
  return {title, url, username}
}

