import React from "react";
import styles from './style.module.css'
import MoreNFTComponent from "../../components/DiscoverMoreNFT";
import Sidebar from "../../Layout";

function ArtistPage() {
   return(
      <Sidebar>
         <MoreNFTComponent /> 
      </Sidebar>
   )
}

export default ArtistPage