import React, { Component } from 'react';
import A from './A';



class App extends Component {
  state = {
    person: {
      fullName: 'Nassef Gharsalli',
      bio: 'A React Developer',
      imgSrc: 'https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/315516296_3308107406113732_9114551764133070294_n.jpg?stp=c0.112.1360.1360a_dst-jpg_s851x315&_nc_cat=104&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=xlS6zQ212ZgAX9uxbVy&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfAIwMLIQHIEEq5bfis0hG99psPRcrFRqWJAWC66dq-mYA&oe=65079FF0',
      profession: 'Software Engineer',
    },
    show: false,
    timer:0
  };
  toggleProfile = () => {
    this.setState({ show: !this.state.show });
  };


  

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="App">
        {this.state.show && (
          <A data={this.state.person}/>
        )}
        <button onClick={this.toggleProfile}>
          {this.state.show ? 'Hide Profile' : 'Show Profile'}
        </button>
      </div>
    );
  }
}

export default App;