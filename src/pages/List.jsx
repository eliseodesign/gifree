import Gif from "../components/Gif"
import { useParams } from "react-router-dom"
import "./style/List.css"
import { useGifs } from "../hooks/useGifs"

const List = () => {
  const { keyword } = useParams()
  const { loading, gifs } = useGifs(["search", { keyword, limit: 10 }]) //my custom hooks for get gifs

  return (
    <>
      {loading ? (
        <div className="lds-roller">
          <div></div> <div></div> <div></div>
        </div>
      ) : (
        <div className="list">
          {gifs.map((gif) => {
            return <Gif key={gif.id} gif={gif} />
          })}
        </div>
      )}
    </>
  )
}

export default List
