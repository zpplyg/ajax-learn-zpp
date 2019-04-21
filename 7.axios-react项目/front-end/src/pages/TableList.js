import React, { Component } from "react";
import axios from "axios";
import TableListItem from "./TableListItem";
class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axios
      .get("/api/getUserList")
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="TableList">
        {data.map((item, index) => {
          return <TableListItem key={index} item={item} />;
        })}
      </div>
    );
  }
}
export default TableList;
