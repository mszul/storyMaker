import React, { Component } from "react";

export const withOverlay = function(Component) {
  return class extends React.Component {
    handleClick(event) {
      event.preventDefault();
    }

    render() {
      const overlay = this.props.showOverlay ? <div className="overlay"></div> : '';
      return (
        <div>
          {overlay}
          <Component {...this.props} />
        </div>
      );
    }
  };
};
