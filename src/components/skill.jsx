import React from "react";
import { mySkill } from "./Dates";

function skillIcon() {
  return(
    <ul className="skills">
      {
        mySkill.map((icon, index) => {
          return (
            <li key={index}>{icon}</li>
          )}
        )
      }
    </ul>
  )
}

export default skillIcon;