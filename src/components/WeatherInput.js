import React, {Component} from 'react';
import {connect} from 'react-redux';
import {inputWeather, weatherAsyncHandler} from '../redux/weatherInput/action';

class WeatherInput extends Component {
  changeHandle(e) {
    const {changeCity} = this.props;
    changeCity(e.target.value);
  }

  submitHandle() {
    const {submitCity} = this.props;
    submitCity();
  }

  render() {
    const {city} = this.props;
    return (
      <div>
        <input type="text" value={city} onChange={(e) => this.changeHandle(e)} />
        <button className="click-btn" onClick={() => this.submitHandle(city)}>查詢</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  city: state.city.city
})

const mapDispatchToProps = dispatch => ({
  changeCity: city => dispatch(inputWeather(city)),
  submitCity: () => dispatch(weatherAsyncHandler())
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInput);