import React, { Component } from "react";
import { connect } from "react-redux";
import { getCityList } from "../../actions/getCityList";
import CitySelect from "./CitySelect";
import { changeCity } from "../../actions/changeCity";
import { getDateTime } from "../../actions/getDateTime";
import { validate } from "../../actions/validate";
import ServicesContent from "./ServicesContent";
import { CITY_URL, FETCH_TYPE } from "../../constants";
import "../../styles/city-services/city-services.css";

class CityServices extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCityListProp(CITY_URL);
  }

  render() {
    return (
      <div className="city-services">
        <CitySelect
          validState={this.props.validState.isCityValid}
          options={this.props.cityList}
          city={this.props.city}
          selectHandle={this.props.changeCity}
          dateTimeHandle={this.props.getDateTime}
          validation={this.props.validation}
        />
        <ServicesContent city={this.props.city} />
      </div>
    );
  }
}

//Подключаем CityServices к Store
const mapStateToProps = store => {
  return {
    validState: store.validState,
    cityList: store.cityList,
    city: store.city
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCityListProp: url => dispatch(getCityList(url, FETCH_TYPE)),
    changeCity: cityId => dispatch(changeCity(cityId)),
    getDateTime: cityId => dispatch(getDateTime(cityId)),
    validation: (validationType, value) =>
      dispatch(validate(validationType, value))
  };
};

//Оборачиваем App и отдаем
export default connect(mapStateToProps, mapDispatchToProps)(CityServices);
