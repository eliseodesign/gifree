import { useParams } from "react-router-dom";

const Detail = () => {

  const name = useParams()
  console.log(name)
  return ( 
  <div>
    details
  </div> );
}
 
export default Detail;