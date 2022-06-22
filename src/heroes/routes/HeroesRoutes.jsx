import { Navbar } from "../../ui";
import { Navigate, Routes, Route } from "react-router-dom";
import { MarvelPages, DcPages, SearchPages, HeroPages } from "../pages";


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="/marvel" element = {<MarvelPages />} />
                <Route path="/dc" element = {<DcPages />} />
                <Route path="/dc" element = {<DcPages />} />
                <Route path="/search" element = {<SearchPages />} />
                <Route path="/hero" element = {<HeroPages />} />
                <Route path="/" element = {<Navigate to="marvel" />} />
            </Routes>
        </div>
    </>
  )
}
