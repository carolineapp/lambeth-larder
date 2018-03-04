import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import clock from "../../assets/clock.png";
import styles from "../../assets/styles/style.css";
import jug from "../../assets/jug.png";
import marker from "../../assets/red_marker.png";
import banner from "../../assets/EmergencyFood_temp.png";

const Container = styled.div`
  min-height: 100vh;
  background: #e71242;
  @media screen and (min-width: 600px) {
    background-color: white;
  }
`;

const Wrapper = styled.section`
  min-height: 85vh;
  background: white;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  @media screen and (min-width: 600px) {
    width: 70%;
    margin: 5% auto;
    border: 5px solid #e71242;
    padding: 4%;
    font-size: 1.125rem;
    display: flex;
  }
`;

const Header = styled.h1`
  color: rgb(24, 23, 24);
  text-align: center;
  padding-top: 10%;
  padding-right: 2%;

  font-family: lato;
  @media screen and (min-width: 600px) {
    padding: 2%;
    font-size: 1.875rem;
  }
`;

const Button = styled.button`
  min-width: 30%;
  padding: 1%;
  margin-top: 3%;
  margin-left: 6%;
  margin-bottom: 5%;
  color: #e71242;
  background: white;
  border: 2px solid #e71242;
  text-align: center;
  line-height: 250%;
  z-index: -1;
  font-size: 1rem;
  @media screen and (min-width: 600px) {
    width: 10%;
    margin-bottom: 3%;
  }
`;
const GetDirections = styled.button`
  min-width: 30%;
  padding: 1%;
  margin-top: 3%;
  margin-left: 6%;
  margin-bottom: 5%;
  color: #e71242;
  background: white;
  border: 2px solid #e71242;
  text-align: center;
  line-height: 250%;
  z-index: -1;
  font-size: 1rem;
  @media screen and (min-width: 600px) {
    min-width: 10%;
    margin-bottom: 3%;
  }
`;
const OpeningHours = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  @media screen and (min-width: 600px) {
    width: 50%;
    align-self: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  color: #e71242;
  width: 80%;
`;

const Banner = styled.img`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

// const Hours = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

const Info = styled.div`
  padding: 1.2em;
`;
const Link = styled.p`
  text-decoration: underline;
  overflow-wrap: break-word;
`;
const Voucher = styled.div`
  font-weight: 700;
  @media screen and (min-width: 600px) {
    font-size: 1.125rem;
  }
`;

const DetailedResult = ({ postcode, match, results }) => {
  return (
    <Container>
      {results
        ? results.map(result => {
            if (result.Name === match.params.name) {
              return (
                <div>
                  <Navbar />
                  <Banner src={banner} width={"100%"} />
                  <Wrapper>
                    <div>
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

                      <GetDirections>
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&origin=${postcode}&destination=${result.Postcode.split(
                            " "
                          ).join("")}&travelmode=transit`}
                        >
                          Get Directions<img
                            src={marker}
                            height={30}
                            width={30}
                            align="right"
                            vertical-align="middle"
                            alt=""
                          />
                        </a>
                      </GetDirections>

                      <Info>
                        <Voucher>
                          {result.Requires_Voucher === "No" ? (
                            <div>No Voucher Required</div>
                          ) : (
                            <a href="/voucher">Voucher Required (click here)</a>
                          )}
                        </Voucher>
                        <div>
                          <p>{result.Phone}</p>

                          <p>{result.Email}</p>

                          <a href={result.Website}>
                            <Link>{result.Website}</Link>
                          </a>
                        </div>
                      </Info>
                      <a href="/">
                        <Button>Back</Button>
                      </a>
                    </div>
                    <OpeningHours>
                      <img src={clock} height={30} width={30} alt={"clock"} />
                      <Column>
                        <p style={{ marginTop: "0" }}>Opening Hours:</p>
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
                  </Wrapper>
                </div>
              );
            }
          })
        : console.log("there are no matches")}
    </Container>
  );
};

export default DetailedResult;