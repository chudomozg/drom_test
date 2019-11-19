//фильтруем общий объект dateTime
//от дней в которых все занято (везде is_not_free==true)
export const getFiltredDateTime = dateTime => {
  let filtredDateTimeObj = [];
  if (Object.keys(dateTime).length) {
    //Фильтруем только дни со свободным временем
    for (let day of Object.keys(dateTime)) {
      let isDayDisable = true;
      for (let time of Object.values(dateTime[day])) {
        if (!time.is_not_free) isDayDisable = false;
      }
      //формируем вывод данных
      if (!isDayDisable) {
        filtredDateTimeObj[day] = dateTime[day];
      }
    }
  }
  return {
    dateTime: filtredDateTimeObj,
    currentDate: 0,
    timeList: []
  };
};

//фильтруем timeList на is_not_free - кладем в store уже отфильтрованный массив
export const getFiltredTimeList = timeList => {
  return Object.values(timeList).filter(item => {
    return !item.is_not_free;
  });
};
