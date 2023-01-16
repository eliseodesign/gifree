export default async function getGifs({limit = 5 }){

  const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=8GegqHwF15gJSENH4oGn810OqOHJaWNr&limit=${limit}`)
  const response = await res.json()
  const { data = [] } = response
  
  const giftsExtract = data.map(image => {
    const { images, title, id } = image
    const { url } = images.fixed_height_downsampled

    
    return { title, id, url }

  })

 
  
  return giftsExtract
}