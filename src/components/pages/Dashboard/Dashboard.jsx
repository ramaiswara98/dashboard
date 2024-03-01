import React from "react";

import "./Dashboard.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../atoms/Icon/Icon";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";
import Label from "../../atoms/Label/Label";
import LastTransactionCard from "../../organisms/LastTransactionCard/LastTransactionCard";
import BalanceCard from "../../organisms/BalanceCard/BalanceCard";
import CreditCard from "../../organisms/CreditCard/CreditCard";

import ShopListAndChatCard from "../../organisms/ShopListAndChatCard/ShopListAndChatCard";
import AnalitycCard from "../../organisms/AnalitycCard/AnalitycCard";
import shortenName from "../../../utils/ShortenName";

function Dashboard() {
  const name = "Jhon Demon";
  const balance = 564;
  const cardDetails = {
    holder: name,
    number: "****9838",
    valid: "08/12",
  };

  const balanceChartData = {
    data1: [60, 30, 30, 25, 20],
    data2: [50, 20, 20, 20, 10],
    labels: ["Oct", "Nov", "Dec", "Jan", "Feb"],
  };
  return (
    <div className="">
      <MainTemplate pages={"dashboard"}>
        <div>
          <div className="dashboard-header">
            <div>
              <Label size={"30px"} bold={true}>
                Hello {shortenName(name)}
              </Label>
              <Label>View and control your finance here!</Label>
            </div>
            <div>
              <Icon icon={faMagnifyingGlass} />
            </div>
          </div>
          <div className="dashboard-third-row">
            <BalanceCard balance={balance} chartData={balanceChartData} />
            <CreditCard cardDetails={cardDetails} />
          </div>
          <div className="dashboard-third-row">
            <ShopListAndChatCard />
          </div>
          <div className="dashboard-third-row">
            <LastTransactionCard />
            <AnalitycCard />
          </div>
        </div>
      </MainTemplate>
    </div>
  );
}

export default Dashboard;
