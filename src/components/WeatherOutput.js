import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherOutput extends Component {
  render() {
    const {results, errorMessage} = this.props;
    return (
      <div className="result-list">
        <ul className="list">
          {
            results.map(({data}) => {
              return (
                <li key={data.id}>
                  {data.name}
                  <br />
                  {data.main.temp}
                </li>
              )
            })
          }
        </ul>
        {
          errorMessage ? <p>輸入錯誤</p> : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  results: state.city.results,
  errorMessage: state.city.errorMessage
})

export default connect(mapStateToProps)(WeatherOutput);