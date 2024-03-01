import React from "react";

import "./AnalitycCard.css";
import Card from "../../atoms/Card/Card";
import Label from "../../atoms/Label/Label";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

function AnalitycCard() {
  const data = {
    labels: ["Done", "In progress", "To do"],
    datasets: [
      {
        label: "Analitycs",
        data: [4, 4, 4, 2],
        backgroundColor: ["#535CE5", "#FAA512", "#E7654D", "#F7F6FE"],
        circumference: 180,
        rotation: 270,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    labels: {
      display: false,
    },
    cutout: 65,
    aspecRatio: 2,
  };
  return (
    <Card>
      <div className="analytic-card-container">
        <div className="analytic-card-header">
          <Label bold={true}>Analytics</Label>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            style={{ color: "#000" }}
          />
        </div>
        <div className="analityc-chart-container">
          <Doughnut data={data} options={options}></Doughnut>
          <div className="chart-text">
            <Label size={"16px"} bold={true}>
              90%
            </Label>
            <Label size={"12px"} color={"var(--darkGray)"}>
              Done
            </Label>
          </div>
          <div className="chart-legends">
            <div className="chart-legends-items">
              <div className="blue"></div>
              <Label>Done</Label>
            </div>
            <div className="chart-legends-items">
              <span className="yellow"></span>
              <Label>In progress</Label>
            </div>
            <div className="chart-legends-items">
              <span className="orange"></span>
              <Label>To do</Label>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AnalitycCard;
