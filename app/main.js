import React from 'react';
import ReactDOM from 'react-dom';

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryPie,
} from 'victory';

function randomQuarterly() {
  return Math.floor(Math.random() * 99000) + 20000;
}

// const data2017 = [
//   { quarter: 1, earnings: randomQuarterly() },
//   { quarter: 2, earnings: randomQuarterly() },
//   { quarter: 3, earnings: randomQuarterly() },
//   { quarter: 4, earnings: randomQuarterly() },
// ];

// const data2018 = [
//   { quarter: 1, earnings: randomQuarterly() },
//   { quarter: 2, earnings: randomQuarterly() },
//   { quarter: 3, earnings: randomQuarterly() },
//   { quarter: 4, earnings: randomQuarterly() },
// ];

// const data2019 = [
//   { quarter: 1, earnings: randomQuarterly() },
//   { quarter: 2, earnings: randomQuarterly() },
//   { quarter: 3, earnings: randomQuarterly() },
//   { quarter: 4, earnings: randomQuarterly() },
// ];

// const data2020 = [
//   { quarter: 1, earnings: randomQuarterly() },
//   { quarter: 2, earnings: randomQuarterly() },
//   { quarter: 3, earnings: randomQuarterly() },
//   { quarter: 4, earnings: randomQuarterly() },
// ];

//COLORS
// #264653
// #2a9d8f
// #e9c46a
// #f4a261
// #e76f51
// #e63946
// #6b705c

const workHours = [
  { Monday: 1, hours: 12 },
  { Tuesday: 2, hours: 12 },
  { Wednesday: 3, hours: 12 },
  { Thursday: 4, hours: 12 },
  { Friday: 5, hours: 11 },
  { Saturday: 6, hours: 8 },
  { Sunday: 7, hours: 2 },
];

const sleepHours = [
  { x: 'M', y: 8 },
  { x: 'T', y: 8 },
  { x: 'W', y: 7 },
  { x: 'T', y: 7 },
  { x: 'F', y: 9 },
  { x: 'S', y: 10 },
  { x: 'S', y: 8 },
];

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Hours per day working in bootcamp</h1>
        <VictoryChart
          singleQuadrantDomainPadding={{ x: false }}
          domainPadding={100}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            tickValues={[0, 1, 2, 3, 4, 5, 6]}
            tickFormat={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
          />
          <VictoryAxis
            dependentAxis
            // tickCount={8}
            tickFormat={(x) => `${x} hrs`}
          />
          <VictoryStack>
            {/* <VictoryBar data={data2017} x='quarter' y='earnings' />
            <VictoryBar data={data2018} x='quarter' y='earnings' />
            <VictoryBar data={data2019} x='quarter' y='earnings' />
            <VictoryBar data={data2020} x='quarter' y='earnings' /> */}
            <VictoryBar
              data={workHours}
              x='weekday'
              y='hours'
              // style={{
              //   data: { fill: '#c43a31', stroke: 'black', strokeWidth: 2 },
              // }}
            />
          </VictoryStack>
        </VictoryChart>

        {/* POLAR CHART */}

        <h1>Hours Per Day Sleeping</h1>
        <VictoryPie
          data={sleepHours}
          labels={({ datum }) => `${datum.x}: ${datum.y} hrs`}
          padding={100}
          theme={VictoryTheme.material}
        />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
