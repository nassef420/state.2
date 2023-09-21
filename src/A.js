import React, { Component } from 'react'

export default class A extends Component {
    constructor(props){ 
        super(props)
        this.state ={
            timer:0
        }  
    }   
    componentDidMount() {
        this.setState({timer:0})
        setInterval(()=>{
          this.setState({timer:this.state.timer+1})
        },1000)
       
      }
  render() {

    return (
    <div>
        <h2>Person's Profile</h2>
        <img src={this.props.data.imgSrc} alt={this.props.data.fullName} />
        <p><strong>Name:</strong> {this.props.data.fullName}</p>
        <p><strong>Profession:</strong> {this.props.data.profession}</p>
        <p><strong>Bio:</strong> {this.props.data.bio}</p>
        <p>{this.state.timer}</p> 
     </div>
    )
  }
}
