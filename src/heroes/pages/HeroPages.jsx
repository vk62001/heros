import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPages = () => {

  const {id}= useParams();
  
  const hero = getHeroById(id);
  
  if(!hero){
    
    return <Navigate to="/marvel" />
  }

  return (
    <>
      
    </>
  )
}
