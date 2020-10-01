import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherOutput extends Component {
  render() {
    const {results, errorMessage, isLoading} = this.props;
    return (
      <div className="result-list">
        <ul className="list">
          {
            isLoading ? '載入中...' :
            results.map(result => {
              return (
                <li key={result.id}>
                  {result.name}
                  <br />
                  {result.temp}
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
  isLoading: state.city.isLoading,
  results: state.city.results,
  errorMessage: state.city.errorMessage
})

export default connect(mapStateToProps)(WeatherOutput);