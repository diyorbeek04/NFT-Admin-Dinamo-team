import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/notFound";
import DashboardPages from "../pages/dashboard";
import MoreNFTPage from "../pages/DiscoverMoreNFT";
import TopCreatorsPage from "../pages/TopCreators";
import Login from "../pages/Login";
import ArtistPage from "../pages/artist";

function RouteComponent() {
   return(
      <Routes>
         <Route path="/*" element={<NotFound />}  />
         <Route path="/dashboard" element={<DashboardPages />}  />
         <Route path="/morenft" element={<MoreNFTPage />}  />
         <Route path="/topcreators" element={<TopCreatorsPage />}  />
         <Route path="/artist" element={<ArtistPage />}  />
         <Route path="/" element={<Login />}  />
      </Routes>
   )
}

export default RouteComponent