import React from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Export,
  Legend,
  Margin,
  Title,
  Subtitle,
  Tooltip,
  Grid,
} from 'devextreme-react/chart';
import service from './data';

const countriesInfo = service.getCountriesInfo();
const energySources = service.getEnergySources();
const types = ['line', 'stackedline', 'fullstackedline'];

class AppWelcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'line',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ type: e.value });
  }

  render() {
    return (
      <>
        <Chart palette="Violet" dataSource={countriesInfo}>
          <CommonSeriesSettings argumentField="country" type={this.state.type} />
          {energySources.map((item) => (
            <Series key={item.value} valueField={item.value} name={item.name} />
          ))}
          <Margin bottom={20} />
          <ArgumentAxis valueMarginsEnabled={false} discreteAxisDivisionMode="crossLabels">
            <Grid visible />
          </ArgumentAxis>
          <Legend verticalAlignment="bottom" horizontalAlignment="center" itemTextPosition="bottom" />
          <Export enabled />
          <Title text="Energy Consumption in 2004">
            <Subtitle text="(Millions of Tons, Oil Equivalent)" />
          </Title>
          <Tooltip enabled />
        </Chart>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Series Type </span>
            <SelectBox dataSource={types} value={this.state.type} onValueChanged={this.handleChange} />
          </div>
        </div>
      </>
    );
  }
}

export default AppWelcome;
