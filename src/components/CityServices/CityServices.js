import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCityList } from "../../actions/getCityList";
import CitySelect from "./CitySelect";
import { changeCity } from "../../actions/changeCity";
import ServicesContent from "./ServicesContent";
import { CITY_URL, FETCH_TYPE } from "../../initStore";
import { fetchRequest } from "../../actions/fetchRequest";

class CityServices extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCityListProp(CITY_URL);
  }

  render() {
    const cityList = this.props.cityList;
    return (
      <div>
        <CitySelect options={cityList} selectHandle={this.props.changeCity} />
        <ServicesContent city={this.props.city} />
      </div>
    );
  }
}

//Подключаем CityServices к Store
const mapStateToProps = store => {
  return {
    cityList: store.cityList,
    city: store.city
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getCityList: bindActionCreators(getCityList, dispatch)
    getCityListProp: url => dispatch(getCityList(url, FETCH_TYPE)),
    changeCity: cityId => dispatch(changeCity(cityId))
  };
};

//Оборачиваем App и отдаем
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityServices);
