import {connect} from 'react-redux'

import Weather from '../components/Weather'

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherData
  }
}

export default connect(
  mapStateToProps
)(Weather)
