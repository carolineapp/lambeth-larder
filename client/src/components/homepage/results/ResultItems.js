import React from "react";
import styled from "styled-components";
import clock from "../../../assets/clock1.png";
import arrow from "../../../assets/arrow.png";
// import { sortByTime, getTimeOptionArr } from "../../../helpers/getStatus";
const geolib = require("geolib");

const ResultItems = props => {
  const Results = styled.div`
    background: #e71242;
    padding-top: 1rem;
    padding: 0.75em;
    @media screen and (min-width: 600px) {
      width: 500px;
    }
  `;
  const Item = styled.div`
    background-color: white;
    color: #999999;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
    padding: 2%;
  `;
  const Title = styled.div`
    font-size: 1.2rem;
    color: #999999;
    padding-bottom: 0.2em;
  `;
  const Times = styled.div`
    color: #e71242;
    padding-top: 0.4em;
    padding-left: 0.2em;
    display: flex;
    align-items: center;
  `;

  //Flex contains the list item result and the link to "more detail"//
  const Flex = styled.div`
    display: flex;
    margin: auto;
    min-height: 25vh;
    justify-content: space-between;
    margin-bottom: 5%;
  `;
  const NextPage = styled.button`
    border: none;
    padding: 5px;
    background-color: white;
    width: 15%;
  `;

  const OpenClosed = styled.span`
    margin-left: 3%;
    line-height: 1rem;
  `;
  const NoResults = styled.div`
    color: white;
    text-align: center;
    height: 20vh;
  `;

  const d = new Date();
  const day = d.getDay(); // returns the current day as a value between 0-6 where Sunday = 0
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const time = `${hours}:${minutes}`;

  // mapTime object gives the current day from getDay as the key and returns the corresponding value. ie. today is Tuesday which = 2 so mapTime[2] returns a.Tuesday_Open which gives either "Closed" or it's opening time.

  //The closing time is found by getting the day+7 ie. 2: Tuesday_Open, 9: Tuesday_Close

  const mapTime = {
    0: "Sunday_Open",
    1: "Monday_Open",
    2: "Tuesday_Open",
    3: "Wednesday_Open",
    4: "Thursday_Open",
    5: "Friday_Open",
    6: "Saturday_Open",
    7: "Sunday_Close",
    8: "Monday_Close",
    9: "Tuesday_Close",
    10: "Wednesday_Close",
    11: "Thursday_Close",
    12: "Friday_Close",
    13: "Saturday_Close"
  };

  const distanceFinder = (arr, lat, long) => {
    const latA = parseFloat(arr.Lat);
    const longA = parseFloat(arr.Long);
    const latB = parseFloat(lat);
    const longB = parseFloat(long);
    const distance = geolib.getDistance(
          { latitude: latA, longitude: longA },
          { latitude: latB, longitude: longB }
        ) /
          1000;
    const roundedDist = (distance*0.62).toFixed(1) + " miles";
    return roundedDist;
  };

  let sortedItemsTime = [];

  const sortByTime = () => {
    if (props.result) {
      if (props.timeOption === "today") {
        sortedItemsTime = props.result.filter(function(r) {
          return r[mapTime[day]] !== "Closed";
        });
      } else if (props.timeOption === "tomorrow") {
        sortedItemsTime = props.result.filter(function(r) {
          return r[mapTime[day + 1]] !== "Closed";
        });
      } else {
        sortedItemsTime = props.result;
      }
    }
  };

sortByTime();


  let advice = [];
  let food = [];

  const sortByAdvice = () => {
    if (sortedItemsTime) {
      food = sortedItemsTime.filter(function(item) {
        return item.FoodCentre === "true";
      });
      advice = sortedItemsTime.filter(function(item) {
        return item.FoodCentre === "false";
      });
    }
  };

  sortByAdvice();

  const foodAdviceMap = array => {
    if (array.length > 1) {
      return array.map(a => {
        return (
          <Flex>
            <Item key={a.Name + a.Description}>
              <Title>{a.Name}</Title>
              <br />
              {a.Description}
              <br />
              {a.Address_Line_3}
              <br />
              {props.lat ? (
                <span>
                  Distance: {distanceFinder(a, props.lat, props.long)}
                </span>
              ) : (
                console.log(" ")
              )}
              <Times>
                <img alt="clock" src={clock} width={20} height={20} />
                <OpenClosed>
                  {props.timeOption === "today" && time < a[mapTime[day]]
                    ? `Opens today at ${a[mapTime[day]]}`
                    : ""}
                  {props.timeOption === "today" &&
                  time > a[mapTime[day]] &&
                  time < a[mapTime[day + 7]]
                    ? `Closes today at ${a[mapTime[day + 7]]}`
                    : ""}
                  {props.timeOption === "today" && time > a[mapTime[day + 7]]
                    ? `Has closed for today`
                    : ""}
                  {props.timeOption === "tomorrow"
                    ? `Opens tomorrow at ${a[mapTime[day + 1]]}`
                    : ""}
                  {props.timeOption === "later" && a.Monday_Open !== "Closed"
                    ? `Opens Monday at ${a.Monday_Open}`
                    : ""}
                  {props.timeOption === "later" &&
                  a.Monday_Open === "Closed" &&
                  a.Tuesday_Open !== "Closed"
                    ? `Opens Tuesday at ${a.Tuesday_Open}`
                    : ""}
                  {props.timeOption === "later" &&
                  a.Monday_Open === "Closed" &&
                  a.Tuesday_Open === "Closed" &&
                  a.Wednesday_Open !== "Closed"
                    ? `Opens Wednesday at ${a.Wednesday_Open}`
                    : ""}
                  {props.timeOption === "later" &&
                  a.Monday_Open === "Closed" &&
                  a.Tuesday_Open === "Closed" &&
                  a.Wednesday_Open === "Closed" &&
                  a.Thursday_Open !== "Closed"
                    ? `Opens Thursday at ${a.Thursday_Open}`
                    : ""}
                  {props.timeOption === "later" &&
                  a.Monday_Open === "Closed" &&
                  a.Tuesday_Open === "Closed" &&
                  a.Wednesday_Open === "Closed" &&
                  a.Thursday_Open === "Closed" &&
                  a.Friday_Open !== "Closed"
                    ? `Opens Friday at ${a.Friday_Open}`
                    : ""}
                  {props.timeOption === "later" &&
                  a.Monday_Open === "Closed" &&
                  a.Tuesday_Open === "Closed" &&
                  a.Wednesday_Open === "Closed" &&
                  a.Thursday_Open === "Closed" &&
                  a.Friday_Open === "Closed" &&
                  a.Saturday_Open !== "Closed"
                    ? `Opens Saturday at ${a.Saturday_Open}`
                    : ""}
                  {props.timeOption === "later" &&
                  a.Monday_Open === "Closed" &&
                  a.Tuesday_Open === "Closed" &&
                  a.Wednesday_Open === "Closed" &&
                  a.Thursday_Open === "Closed" &&
                  a.Friday_Open === "Closed" &&
                  a.Saturday_Open === "Closed" &&
                  a.Sunday_Open !== "Closed"
                    ? `Opens Sunday at ${a.Sunday_Open}`
                    : ""}
                </OpenClosed>
              </Times>
            </Item>
            <NextPage>
              <a href={"/results/" + a.Name}>
                <img alt="button-arrow" src={arrow} height={20} width={15} />
              </a>
            </NextPage>
          </Flex>
        );
      });
    } else {
      return (
        <NoResults>
          Unfortunately there are no centres open at the moment. Try searching
          tomorrow or next week.
        </NoResults>
      );
    }
  };
  return (
    <Results className="results">
      {props.adviceCentres === true
        ? foodAdviceMap(advice)
        : foodAdviceMap(food)}
    </Results>
  );
};

export default ResultItems;
