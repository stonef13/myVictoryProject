import React from 'react';
import ReactDOM from 'react-dom';

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryPie,
  VictoryLine,
  VictoryBrushContainer,
  VictoryArea,
  VictoryGroup,
} from 'victory';

// function randomQuarterly() {
//   return Math.floor(Math.random() * 99000) + 20000;
// }

//COLORS
// #264653
// #2a9d8f
// #e9c46a
// #f4a261
// #e76f51
// #e63946
// #6b705c

const tikViews = [
  // { x: 'date', y: # of views}
  { x: '2020-6-28', y: 192 },
  { x: '2020-9-20', y: 235 },
  { x: '2020-9-20', y: 48 },
  { x: '2020-10-25', y: 334 },
  { x: '2020-10-28', y: 1755 },
  { x: '2020-11-7', y: 97 },
  { x: '2020-11-11', y: 2053 },
  { x: '2020-11-21', y: 1171 },
  { x: '2020-12-28', y: 291 },
  { x: '2021-1-8', y: 305 },
  { x: '2021-2-25', y: 1124 },
];

const workHoursChart = [
  { Monday: 1, hours: 12 },
  { Tuesday: 2, hours: 12 },
  { Wednesday: 3, hours: 12 },
  { Thursday: 4, hours: 12 },
  { Friday: 5, hours: 11 },
  { Saturday: 6, hours: 8 },
  { Sunday: 7, hours: 2 },
];

const workHours = [
  { x: 'M', y: 12 },
  { x: 'T', y: 12 },
  { x: 'W', y: 12 },
  { x: 'T', y: 12 },
  { x: 'F', y: 11 },
  { x: 'S', y: 8 },
  { x: 'S', y: 2 },
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
        <div className='project-title'>
          <p>Project Victory</p>
          <p>by Stone Fuglaar</p>
        </div>
        <div className='container'>
          {/* ANIMATIONS */}

          <h1>Social Media Views</h1>
          <VictoryLine
            labels={({ datum }) => `${datum.y}`}
            containerComponent={
              <VictoryBrushContainer
                brushDomain={{ x: [50, 100], y: [0, 100] }}
                brushDimension='y'
                brushStyle={{ fill: 'green', opacity: 0.2 }}
              />
            }
            style={{
              data: { stroke: 'black' },
            }}
            data={tikViews}
          />

          {/* CHART */}

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
            <VictoryAxis dependentAxis tickFormat={(x) => `${x} hrs`} />
            <VictoryStack>
              <VictoryBar data={workHoursChart} x='weekday' y='hours' />
            </VictoryStack>
          </VictoryChart>

          {/* PIE */}

          <h1>Hours Per Day Sleeping</h1>
          <VictoryPie
            data={sleepHours}
            labels={({ datum }) => `${datum.x}: ${datum.y} hrs`}
            padding={100}
            theme={VictoryTheme.material}
          />

          {/* VICTORY AREA  */}

          <h1>Work and Sleep Hours</h1>
          <h2 className='red'>Work = Red</h2>
          <h2 className='yellow'>Sleep = Yellow</h2>
          <VictoryChart width={400} height={400} theme={VictoryTheme.material}>
            <VictoryGroup
              style={{
                data: { strokeWidth: 5, fillOpacity: 0.5 },
              }}
            >
              <VictoryArea data={workHours} />
              <VictoryArea data={sleepHours} />
            </VictoryGroup>
          </VictoryChart>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
