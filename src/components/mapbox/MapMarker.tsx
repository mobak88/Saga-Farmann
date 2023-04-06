import React from "react";
import styles from "./MapMarker.module.css";

interface MarkerColor {
  nextYear?: boolean;
}

const MapMarker = ({ nextYear }: MarkerColor) => {
  return (
    <svg
      className={
        nextYear ? `${styles["marker-next-year"]}` : `${styles.marker}`
      }
      id="Component_61_4"
      data-name="Component 61 – 4"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 63 59"
      aria-hidden="true"
    >
      <ellipse
        id="Ellipse_55"
        data-name="Ellipse 55"
        cx="31.5"
        cy="29.5"
        rx="31.5"
        ry="29.5"
        fill={nextYear ? "#142c34" : "#bf625f"}
      />
      <path
        id="Icon_awesome-anchor"
        data-name="Icon awesome-anchor"
        d="M.975,24.063H3.422C5.069,31.085,13.739,35,21.75,35s16.683-3.922,18.328-10.937h2.447a.813.813,0,0,0,.641-1.4L38.1,18.08a.975.975,0,0,0-1.282,0l-5.063,4.582a.813.813,0,0,0,.641,1.4h2.655c-1.533,3.713-6.418,5.919-10.886,6.427V17.5H28.1A.867.867,0,0,0,29,16.68V13.945a.867.867,0,0,0-.906-.82H24.167v-.374A6.644,6.644,0,0,0,29,6.563C29,2.992,25.8.05,21.853,0,17.8-.051,14.5,2.907,14.5,6.563a6.644,6.644,0,0,0,4.834,6.189v.374H15.4a.867.867,0,0,0-.906.82V16.68a.867.867,0,0,0,.906.82h3.928V30.489c-4.452-.506-9.353-2.712-10.886-6.427H11.1a.813.813,0,0,0,.641-1.4L6.679,18.08a.975.975,0,0,0-1.282,0L.334,22.662A.813.813,0,0,0,.975,24.063ZM21.75,4.375a2.314,2.314,0,0,1,2.417,2.187,2.429,2.429,0,0,1-4.834,0A2.314,2.314,0,0,1,21.75,4.375Z"
        transform="translate(9.75 12)"
        fill="#e7f1f7"
      />
    </svg>
  );
};

export default MapMarker;
