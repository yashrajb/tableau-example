import React from "react";
import Tableau from "./Tableau";

const urls = [
  "https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/yashrajdashboard/AnimePopularity",
  "https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/yashrajdashboard/AnimePopularity",
  "https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/Pooja-NumofAppsreleasedperyear/Dashboard1",
  "https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/Pooja-NumofAppsreleasedperyear/Dashboard2",
  "https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/Pooja-NumofAppsreleasedperyear/Dashboard3",
  "https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/yashrajdashboard/AnimePopularity",
  "https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/yashrajdashboard/AnimePopularity",
  "https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/Pooja-NumofAppsreleasedperyear/Dashboard1",
  "https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/Pooja-NumofAppsreleasedperyear/Dashboard2",
  "https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/Pooja-NumofAppsreleasedperyear/Dashboard3",
];

const TableauPage = () => {
  return (
    <>
      {urls.map((el) => {
        return <Tableau key={el} url={el} />;
      })}
    </>
  );
};

export default TableauPage;
