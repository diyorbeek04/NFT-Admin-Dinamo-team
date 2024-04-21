import React from "react";
import styles from './style.module.css'
import TopCreatorsComponent from "../../components/TopCreators";
import Sidebar from "../../Layout";

function TopCreatorsPage() {
   return(
      <Sidebar>
         <TopCreatorsComponent />
      </Sidebar>
   )
}

export default TopCreatorsPage