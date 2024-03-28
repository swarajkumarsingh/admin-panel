import React from "react";

import Fields from "layouts/create-ad/components/Fields";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";


function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
     <Fields />
    </DashboardLayout>
  );
}

export default Dashboard;
