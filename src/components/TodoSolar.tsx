/* -----
Imports
----- */

// React and Ionic
import React from "react";

/* -----
Design
----- */

/* MyTodo design */
import "../design/todosolar.scss";

/* Core CSS for Ionic */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS for Ionic */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Global Theme */
import "../theme/variables.scss";

/* -----
.TodoTag.tsx
----- */

/* Props */
interface Props {
  solar: String;
}

const TodoSolar: React.FC<Props> = ({ solar }) => {
  if (solar === "Planet") {
    return (
      <div className="todosolar-icon-planet">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20.759"
          height="16.684"
          viewBox="0 0 20.759 16.684"
        >
          <g
            id="Icon_ionic-md-planet"
            data-name="Icon ionic-md-planet"
            transform="translate(-2.253 -5.348)"
          >
            <path
              id="Pfad_255"
              data-name="Pfad 255"
              d="M9.369,9.28c-.116.139-.227.278-.334.426a43.434,43.434,0,0,0,5.755,5.268,44.927,44.927,0,0,0,5.162,3.48c.273.153.542.3.8.436.116-.139.227-.278.334-.426a6.938,6.938,0,0,0,1.08-2.484c.037-.148.07-.3.1-.44A7.447,7.447,0,0,0,11.848,7.375,6.916,6.916,0,0,0,9.369,9.28Z"
              transform="translate(-2.313 -0.46)"
              fill="#38ffe2"
            />
            <path
              id="Pfad_256"
              data-name="Pfad 256"
              d="M20.146,16.966a8.632,8.632,0,0,1-.343.811,11.581,11.581,0,0,1,1.478,2.15c.111.19.343.607.042.575a2.21,2.21,0,0,1-.255-.06,17.578,17.578,0,0,1-3.906-1.733,46,46,0,0,1-5.25-3.535A43.294,43.294,0,0,1,5.86,9.589,15.9,15.9,0,0,1,4.206,7.37a3.5,3.5,0,0,1-.259-.482c-.116-.287.232-.236.324-.213a9.709,9.709,0,0,1,2.7,1.1,3.894,3.894,0,0,1,.644-.528A15.141,15.141,0,0,0,4.591,5.6c-1.07-.408-1.9-.315-2.2.171-.565.922.649,3.35,3.026,6.116a7.446,7.446,0,0,0,10.81,8.34,26.427,26.427,0,0,0,4.49,1.617c1.107.283,1.872.255,2.169-.227C23.4,20.78,22.324,19.223,20.146,16.966Z"
              fill="#38ffe2"
            />
          </g>
        </svg>
      </div>
    );
  } else if (solar === "Star") {
    return (
      <div className="todosolar-icon-star">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.553"
          height="16.684"
          viewBox="0 0 17.553 16.684"
        >
          <path
            id="Icon_ionic-md-star-outline"
            data-name="Icon ionic-md-star-outline"
            d="M21.349,10.861l-6.311-.542L12.573,4.5l-2.465,5.819L3.8,10.861l4.787,4.15L7.149,21.184l5.424-3.272L18,21.184l-1.435-6.172Zm-8.058,5.86-.718-.433-.718.433L9.249,18.293l.69-2.967.19-.816L9.5,13.961l-2.3-2,3.034-.261.834-.072.327-.771,1.185-2.8,1.185,2.8.327.771.835.072,3.035.261-2.3,2-.633.549.19.816.69,2.967Z"
            transform="translate(-3.797 -4.5)"
            fill="#38ffe2"
          />
        </svg>
      </div>
    );
  } else if (solar === "Moon") {
    return (
      <div className="todosolar-icon-moon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23.112"
          height="22.908"
          viewBox="0 0 23.112 22.908"
        >
          <path
            id="Icon_weather-stars"
            data-name="Icon weather-stars"
            d="M6.444,19.416a2.827,2.827,0,0,0,1.98-.9A2.82,2.82,0,0,0,9.24,16.5a2.912,2.912,0,0,0,2.784,2.916A2.912,2.912,0,0,0,9.24,22.332a2.771,2.771,0,0,0-.816-2.016A2.827,2.827,0,0,0,6.444,19.416Zm2.8-8.64a5.515,5.515,0,0,0,3.852-1.764,5.493,5.493,0,0,0,1.584-3.936A5.493,5.493,0,0,0,16.26,9.012a5.569,5.569,0,0,0,3.864,1.764,5.562,5.562,0,0,0-2.748.852A5.767,5.767,0,0,0,15.4,13.7a5.643,5.643,0,0,0-.72,2.8,5.521,5.521,0,0,0-1.584-3.948A5.479,5.479,0,0,0,9.24,10.776ZM13.224,23.7a4.286,4.286,0,0,0,4.092-4.284A4.287,4.287,0,0,0,21.4,23.7a4.287,4.287,0,0,0-4.08,4.284,4.133,4.133,0,0,0-1.188-2.964A4.2,4.2,0,0,0,13.224,23.7ZM21.4,18.012a4.266,4.266,0,0,0,4.068-4.3A4.286,4.286,0,0,0,29.556,18a4.286,4.286,0,0,0-4.092,4.284A4.244,4.244,0,0,0,21.4,18.012Z"
            transform="translate(-6.444 -5.076)"
            fill="#38ffe2"
          />
        </svg>
      </div>
    );
  } else return null;
};

export default TodoSolar;
