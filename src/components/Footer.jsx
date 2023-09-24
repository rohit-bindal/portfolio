import React from "react";
import { SectionWrapper } from "../hoc";
import { Tooltip as ReactTooltip } from "react-tooltip";

function Footer() {
  return (
    <h2 className="text-center">
      Copyright &#169; Rohit Bindal 2023
    </h2>
  );
}

export default SectionWrapper(Footer, "");
