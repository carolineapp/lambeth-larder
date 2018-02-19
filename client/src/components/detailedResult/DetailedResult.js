import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import clock from "../../assets/clock.png";
// import styles from "../../assets/styles/style.css";
import jug from "../../assets/jug.png";
import marker from "../../assets/red_marker.png";

const Div = styled.div`
  min-height: 100vh;
  background: #e71242;
`;

const Wrapper = styled.section`
  min-height: 85vh;
  background: white;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7vh;
  margin-bottom: ;
`;

const Header = styled.h1`
  color: rgb(24, 23, 24);
  text-align: center;
  padding-top: 10%;
  font-size: 18px;
  font-family: lato;
`;

const Button = styled.button`
  min-width: 30%;
  padding: 2%;
  margin-top: 15%;
  margin-left: 5%;
  color: #e71242;
  background: white;
  border: 2px solid #e71242;
  text-align: center;
  line-height: 250%;
  z-index: -1;
`;
const OpeningHours = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  color: #e71242;
  width: 80%;
`;

// const Hours = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

const Info = styled.div`
  padding: 1.5em;
`;

const Voucher = styled.div`
  font-size: 1.2em;
`;

const DetailedResult = ({ postcode, match, results }) => {
  return (
    <Div>
      {results
        ? results.map(result => {
            if (result.Name === match.params.name) {
              return (
                <div>
                  <Navbar />
                  <Wrapper>
                    <img
                      src={jug}
                      height={100}
                      width={100}
                      align="left"
                      vertical-align="top"
                      alt=""
                    />
                    <Header>{result.Name}</Header>

                    <Info>
                      <p>{result.Description}</p>

                      <div>
                        {result.Address_Line_2}
                        <br />
                        {result.Address_Line_3}
                        <br />
                        {result.Postcode}
                      </div>
                    </Info>
                    <div>
                      <Button>
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&origin=${postcode}&destination=${result.Postcode.split(
                            " "
                          ).join("")}&travelmode=transit`}
                        >
                          Get Directions{" "}
                          <img
                            src={marker}
                            height={30}
                            width={30}
                            align="right"
                            vertical-align="middle"
                            alt=""
                          />
                        </a>
                      </Button>
                    </div>
                    <Info>
                      <div>
                        {result.Phone}
                        <br />
                        {result.Email}
                        <br />
                        <a href={result.Website}>{result.Website}</a>
                      </div>
                      <Voucher>
                        {result.Requires_Voucher === "No" ? (
                          <div>No Voucher Required</div>
                        ) : (
                          <a href="/voucher">Voucher Required (click here)</a>
                        )}
                      </Voucher>
                    </Info>

                    <OpeningHours>
                      <img src={clock} height={30} width={30} alt={"clock"} />
                      <Column>
                        Opening Hours:
                        <p>
                          Monday:{" "}
                          {result.Monday_Open === "Closed"
                            ? "Closed"
                            : result.Monday_Open + "-" + result.Monday_Close}
                        </p>
                        <p>
                          Tuesday:{" "}
                          {result.Tuesday_Open === "Closed"
                            ? "Closed"
                            : result.Tuesday_Open + "-" + result.Tuesday_Close}
                        </p>
                        <p>
                          Wednesday:{" "}
                          {result.Wednesday_Open === "Closed"
                            ? "Closed"
                            : result.Wednesday_Open +
                              "-" +
                              result.Wednesday_Close}
                        </p>
                        <p>
                          Thursday:{" "}
                          {result.Thursday_Open === "Closed"
                            ? "Closed"
                            : result.Thursday_Open +
                              "-" +
                              result.Thursday_Close}
                        </p>
                        <p>
                          Friday:{" "}
                          {result.Friday_Open === "Closed"
                            ? "Closed"
                            : result.Friday_Open + "-" + result.Friday_Close}
                        </p>
                        <p>
                          Saturday:{" "}
                          {result.Saturday_Open === "Closed"
                            ? "Closed"
                            : result.Saturday_Open +
                              "-" +
                              result.Saturday_Close}
                        </p>
                        <p>
                          Sunday:{" "}
                          {result.Sunday_Open === "Closed"
                            ? "Closed"
                            : result.Sunday_Open + "-" + result.Sunday_Close}
                        </p>
                      </Column>
                    </OpeningHours>

                    <a href="/">
                      <Button>Back</Button>
                    </a>
                  </Wrapper>
                </div>
              );
            }
          })
        : console.log("there are no matches")}
    </Div>
  );
};

export default DetailedResult;
