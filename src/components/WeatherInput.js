import React, {Component} from 'react';
import {connect} from 'react-redux';
import {inputWeather, weatherAsyncHandler} from '../redux/weatherInput/action';

class WeatherInput extends Component {
  render() {
    const {changeCity, city, submitCity} = this.props;
    return (
      <div>
        <input type="text" value={city} onChange={(e) => changeCity(e.target.value)} />
        <button onClick={() => submitCity(city)}>查詢</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  city: state.city.city
})

const mapDispatchToProps = dispatch => ({
  changeCity: city => dispatch(inputWeather(city)),
  submitCity: city => dispatch(weatherAsyncHandler(city))

})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInput);