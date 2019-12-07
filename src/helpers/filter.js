//фильтруем общий объект dateTime
//от дней в которых все занято (везде is_not_free==true)
export const getFiltredDateTime = dateTime => {
  let filtredDateTimeObj = Object.entries(dateTime)
    .filter(([key, day]) => Object.values(day).some(time => !time.is_not_free))
    .reduce((a, [key, day]) => ({ ...a, [key]: day }), {});
  return filtredDateTimeObj;
};

//фильтруем timeList на is_not_free - кладем в store уже отфильтрованный массив
export const getFiltredTimeList = timeList => {
  return Object.values(timeList).filter(item => {
    return !item.is_not_free;
  });
};
