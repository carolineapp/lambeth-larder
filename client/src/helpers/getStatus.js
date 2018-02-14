let today = [];
let tomorrow = [];
let later = [];

const sortByTime = () => {
  if (props.result) {
    props.result.map(a => {
      if (a[mapTime[day]] !== "Closed" && time < a[mapTime[day + 7]]) {
        today.push(a);
      } else if (a[mapTime[day + 1]] !== "Closed") {
        tomorrow.push(a);
      } else {
        later.push(a);
      }
    });
  }
};

const getTimeOptionArr = () => {
  if (props.timeOption == "today") {
    sortedItems = today;
  } else if (props.timeOption == "tomorrow") {
    sortedItems = tomorrow;
  } else {
    sortedItems = later;
  }
};

module.exports = {
  sortByTime,
  getTimeOptionArr
};
