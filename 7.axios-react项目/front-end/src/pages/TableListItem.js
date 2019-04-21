import React, { Component } from "react";

class TableListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { name, age, phone, avator } = this.props.item;
    return (
      <table>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{phone}</td>
            <td>
              <img src={avator} className="avator" alt="图片"/>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default TableListItem;
