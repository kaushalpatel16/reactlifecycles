import React, { Component } from "react";
import Apidisplay from "./apidisplay";

export default class Fetchapi extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      defaultimag: "data:image/jpeg;base64,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",
      color: "silver",
      beforeChange: "nothing changed",
      afterChange: "nothing changed",
      show : true,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // You can add custom logic here to determine if the component should update.
    // In this example, it always returns true.
    return true;
  }

  changeColor = () => {
    this.setState(() => {
      return {
        color: "grey",
      };
    });
  }
  removeapi =()=>{
      this.setState(()=>{
          return {
              show : false,
          }
      })
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {

    if (prevState.color !== this.state.color) {
        this.setState({
          beforeChange: prevState.color,
        });
      }
  }

  componentDidUpdate(prevProps, prevState,) {
    if (prevState.color !== this.state.color) {
      this.setState({
        afterChange: this.state.color,
      });
    }
  }

  componentDidMount() {
    fetch("https://631189bb19eb631f9d742399.mockapi.io/Book")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { data, loading, defaultimag, color, beforeChange, afterChange ,show} = this.state;

    if (loading) {
      return <div>Loading....</div>;
    }
    let myapi;
    if(show){
       myapi =<Apidisplay data={data} defaultimag={defaultimag}/>;
    }
      
    return (
      <>
        <div style={{ backgroundColor: color }}>
          <h1>Fetched Data with background color {color}</h1>
          <div id="div1">
            <h3>Before change, color was {beforeChange}</h3>
          </div>
          <div id="div2">
            <h3>After change, color is {afterChange}</h3>
          </div>
          <h1>
            <button type="button" onClick={this.changeColor}>
              Change color
            </button>
            <button type="button" onClick={this.removeapi}>
                remove api data
            </button>
          </h1>
           {myapi}
        </div>
      </>
    );
  }
}
