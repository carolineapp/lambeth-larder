import React from "react";
import styled from "styled-components";
import clock from "../../../assets/clock1.png";
import arrow from "../../../assets/arrow.png";
// import { sortByTime, getTimeOptionArr } from "../../../helpers/getStatus";
const geolib = require("geolib");

const ResultItems = props => {
  const Results = styled.div`
    background: #e71242;
    padding: 0.75em;
  `;
  const Item = styled.div`
    margin-bottom: 5px;
    background-color: white;
    padding: 5px;
    color: #999999;
    display: flex;
    flex-direction: column;
    min-width: 79vw;
    height: 25vh;
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
  `;
  const NextPage = styled.button`
    min-width: 3rem;
    border: none;
    border-left: 4px solid #e71242;
    margin-bottom: 25px;
    padding: 5px;
    height: 26.5vh;
    background-color: white;
  `;
  const Flex = styled.div`
    display: flex;
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
    const distance =
      Math.round(
        geolib.getDistance(
          { latitude: latA, longitude: longA },
          { latitude: latB, longitude: longB }
        ) /
          1000 *
          0.62,
        2
      ) + " miles";
    return distance;
  };

  let today = [];
  let tomorrow = [];
  let later = [];
  let sortedItems = [];

  //&& time < a[mapTime[day + 7]]

  const sortByTime = () => {
    if (props.result) {
      props.result.map(a => {
        if (a[mapTime[day]] !== "Closed") {
          today.push(a);
        }
      });
      props.result.map(a => {
        if (a[mapTime[day + 1]] !== "Closed") {
          tomorrow.push(a);
        }
      });
      props.result.map(a => {
        later.push(a);
      });
    }
  };

  const getTimeOptionArr = () => {
    if (props.timeOption === "today") {
      sortedItems = today;
    } else if (props.timeOption === "tomorrow") {
      sortedItems = tomorrow;
    } else {
      sortedItems = later;
    }
  };

  sortByTime();
  getTimeOptionArr();

  const Advice = [];
  const Food = [];

  const sortByAdvice = () => {
    {
      props.result
        ? sortedItems.map(a => {
            if (a.FoodCentre === "true") {
              Food.push(a);
            } else if (a.FoodCentre === "false") {
              Advice.push(a);
            } else {
              console.log("database issue");
            }
          })
        : "something went wrong";
    }
  };
  sortByAdvice();

  const adviceMap = Advice => {
    if (Advice.length > 1) {
      return Advice.map(a => {
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
                console.log("no result")
              )}
              <Times>
                <img
                  src={clock}
                  alt="clock"
                  width={20}
                  height={20}
                  vertical-align="middle"
                />
                {a[mapTime[day]] !== "Closed" && time < a[mapTime[day + 7]]
                  ? `Closes today at ${a[mapTime[day + 7]]}`
                  : a[mapTime[day + 1]] !== "Closed"
                    ? `Opens tomorrow at ${a[mapTime[day + 1]]}`
                    : " Closed tomorrow"}
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
          Unfortunately there are no Advice Centres open at the moment. Try
          searching tomorrow or next week.
        </NoResults>
      );
    }
  };
  const foodMap = Food => {
    if (Food.length > 1) {
      return Food.map(a => {
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
                <img
                  alt="clock"
                  src={clock}
                  width={20}
                  height={20}
                  padding-left={10}
                  vertical-align="middle"
                />
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
          Unfortunately there are no Food Banks open at the moment. Try
          searching tomorrow or next week.
        </NoResults>
      );
    }
  };
  return (
    <Results className="results">
      {props.adviceCentres === true ? adviceMap(Advice) : foodMap(Food)}
    </Results>
  );
};

export default ResultItems;
