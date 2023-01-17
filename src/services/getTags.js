import { API_KEY } from "./config";

export default async function getTags(number) {
  const res = await fetch(`https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`);

  const response = await res.json();

  const data = response.data.slice(0,number)

  // console.log(giftsExtract)
  return data
}
