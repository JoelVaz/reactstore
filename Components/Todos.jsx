import React, { Component } from "react";
import chrome from "./scott.png";
class Todos extends Component {
  state = {
    amount: 0
  };
  render() {
    const hello = {
      width: "300px",
      left: "20px",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      float: "left",
      marginRight: "20px",
      marginTop: "20px"
    };
    return (
      <div>
        <div className="card" style={hello}>
          <img class="card-img-top" src={chrome} alt="Card image top" />
          <div className="card-body">
            <span className="badge badge-primary">{this.state.amount}</span>
            <h3 className="card-title">Toilet paper</h3>
            <p className="card-text">Strong scott toilet paper</p>
            <a href="#" class="btn btn-secondary" onClick={this.pincrement}>
              Add item
            </a>
          </div>
        </div>
      </div>
    );
  }
  pincrement = () => {
    const amount = this.state.amount;
    this.setState({ amount: this.state.amount + 1 });
  };
}
export default Todos;
