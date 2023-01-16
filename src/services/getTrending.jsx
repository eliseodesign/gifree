import { API_KEY } from "./config"

export default async function getGifs({limit  }){

  const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}`)
  const response = await res.json()
  const { data = [] } = response
  
  const giftsExtract = data.map(image => {
    const { images, title, id } = image
    const { url } = images.fixed_height_downsampled

    
    return { title, id, url } 

  })

 
  
  return giftsExtract
}