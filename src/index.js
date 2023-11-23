import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Switch,
} from "react-router-dom";
import IFrameTableau from "./Tableau";
import Header from "./Header";
import Page from "./Page";
import TableauPage from "./TableauPage";
import Tableau from "./Tableau";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          exact={true}
          element={
            <div>
              <Tableau url="https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/PlayStoreAppsDetails/Numberofappspercategory" />
              <Tableau url="https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/PlayStoreAppsDetails/Avg_pricepercategory" />
              <Tableau url="https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/PlayStoreAppsDetails/Editorschoicecountpercaegory" />
              <Tableau url="https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/PlayStoreAppsDetails/Averageratingpercategor" />
              <Tableau url="https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/PlayStoreAppsDetails/totalratingcountpercategory" />
              <Tableau url="https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/PlayStoreAppsDetails/totalinstallpercategory" />
            </div>
          }
        />
        <Route path="/page" exact={true} element={<Page />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

