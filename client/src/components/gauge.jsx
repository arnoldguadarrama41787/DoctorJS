// import React from "react";
// import ReactDOM from "react-dom";
import Chart from "react-google-charts";

const options = {
  width: 200,
  height: 200,
  redFrom: 90,
  redTo: 100,
  yellowFrom: 75,
  yellowTo: 90,
  minorTicks: 5
};

const getRandomNumber = () => {
  return Math.random() * 100;
};

class Gauge extends React.component  {
  constructor(props) {
    super(props);
    this.state = {
    networkSpeed: 1,
    memory: 80
  };
  intervalID = null;
  getData = () => {
    return [
      ["Label", "Value"],
      ["Memory", this.state.memory]
    ];
  };
  componentWillUnmount() {
    if (this.intervalID === null) return;
    clearInterval(this.intervalID);
  }
  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState(state => {
        return {
          ...state,
          memory: getRandomNumber()
        };
      });
    }, 3000);
  }
  render() {
    console.log(this.getData());

    return (
      <div className="Gauge">
        <Chart
          chartType="Gauge"
          width="100%"
          height="400px"
          data={this.getData()}
          options={options}
        />
      </div>
    );
  }
}

export default Gauge;
