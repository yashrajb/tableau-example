import React, { useRef, useEffect } from "react";
import TableauPage from "./TableauPage";
import Tableau from "./Tableau";

const Page = () => {
  const allRefs = useRef([]);
  const urls = [
    "https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/Pooja-NumofAppsreleasedperyear/Dashboard1",
    "https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/Pooja-NumofAppsreleasedperyear/Dashboard2",
    "https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/Pooja-NumofAppsreleasedperyear/Dashboard3",
    "https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/Pooja-NumofAppsreleasedperyear/Dashboard4",
    "https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/Pooja-NumofAppsreleasedperyear/Dashboard5",
    "https://prod-apnortheast-a.online.tableau.com/t/srijandemo/views/AccountEngagement/AccountEngagement",
    "https://prod-apnortheast-a.online.tableau.com/#/site/srijandemo/views/yashrajdashboard/AnimePopularity",
  ];

  function initViz() {
    return allRefs.current.map((ref, index) => {
      let url = urls[index];
      return new window.tableau.Viz(ref, url);
    });
  }

  useEffect(() => {
    let viz = initViz();

    return () => {
      viz.map((el) => {
        el.dispose();
      });
    };
  }, []);

  return (
    <div>
      <h1>Another Page</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div ref={(el) => (allRefs.current[0] = el)} id="viz1"></div>;
      <div ref={(el) => (allRefs.current[1] = el)} id="viz2"></div>;
      <div ref={(el) => (allRefs.current[2] = el)} id="viz3"></div>;
      <div ref={(el) => (allRefs.current[3] = el)} id="viz4"></div>
      <div ref={(el) => (allRefs.current[4] = el)} id="viz5"></div>
      <div ref={(el) => (allRefs.current[5] = el)} id="viz6"></div>
      <div ref={(el) => (allRefs.current[6] = el)} id="viz7"></div>
    </div>
  );
};

export default Page;
