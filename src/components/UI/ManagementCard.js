import React, { Component } from "react";

class ManagementCard extends Component {
  render() {
    const { icn, title, children } = this.props;
    return (
      <div className="card">
        <div className="card-content grey-text">
          <span
            className="card-title"
            style={{
              fontFamily: "Blanch Caps Inline Regular",
              fontSize: "3.5rem"
            }}
          >
            {title}
            <span style={{ fontSize: "2rem" }} className="material-icons">
              {icn}
            </span>
          </span>
          {children}
        </div>
      </div>
    );
  }
}

export default ManagementCard;
