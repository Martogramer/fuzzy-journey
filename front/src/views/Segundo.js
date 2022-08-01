
import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

import Basics from "views/IndexSections/Basics.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JsTree from "views/IndexSections/JsTree";
import Carousel from "views/IndexSections/Carousel";
import JavaScriptTwo from "views/IndexSections/JavaScriptTwo";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  },[]);
  return (
    <>
      <IndexNavbar />
      {/* <ExamplesNavbar /> */}

      <div className="wrapper">

        <PageHeader />
        <div className="main">
          <Basics />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <JsTree />
          <Signup />
          <Carousel />
          <NucleoIcons />
          <Examples />
          <Download />
        </div>
        <Footer />
      </div>
    </>
  );
}
