import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import { data } from "./data";
import { approvals } from "./approvalList";

class App extends React.Component {
  render() {
    const columns = ["Name", "Title", "Location", "Age", "Salary"];

    const options = {
      filterType: "dropdown",
      responsive: "scroll"
    };

    return (
      <MUIDataTable
        title={"ACME Employee list"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
