import React, { Component } from 'react'

export default class Apidisplay extends Component {
    componentWillUnmount() {
        alert("The component named Apidisplay is about to be unmounted.");
      }
    render() {
        return (
            <div className="row">
            {this.props.data.map((item) => (
              <div className="card col-md-4" style={{ width: "20em", margin: "2rem" }}>
                <img src={item.ImagePath ? item.ImagePath : this.props.defaultimag} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.Description}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            ))}
          </div>
        )
    }
}

