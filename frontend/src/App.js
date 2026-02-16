import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    details: []
  };

  componentDidMount() {
    let data;

    axios
      .get("http://127.0.0.1:8000/")
      .then(res => {
        data = res.data;
        this.setState({
          details: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Youtube videos</h1>
        {this.state.details.map(item => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.channel}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
