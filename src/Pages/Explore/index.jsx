import React from "react";
import { MainLayout } from "../../Layouts";
import * as Comps from "./Components";

function Explore() {
  return (
    <MainLayout>
      <Comps.Hero />
      <Comps.CampCardList />
    </MainLayout>
  );
}

export default Explore;
