import { useEffect, useRef } from "react";

const Tableau = ({ url }) => {
  const ref = useRef(null);

  function initViz() {
    return new window.tableau.Viz(ref.current, url);
  }
  useEffect(() => {
    let viz = initViz();

    return () => {
      viz.dispose();
    };
  }, []);

  return <div ref={ref} id="viz"></div>;
};

export default Tableau; 
