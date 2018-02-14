import React from "react";
import styled from "styled-components";

const Container = styled.section``;


const Address = props => {
  return (
    <Container>
      {props.results &&
        props.results.map(res => {
          if (res.Name === props.name) {
            return (
              <div>
                <p>
                  {res.Address_Line_1}
                  <br />
                  {res.Address_Line_2}
                  <br />
                  {res.Address_Line_3}
                  <br />
                  {res.Postcode}
                </p>
                {/* link to google maps here */}
                <button />
              </div>
            );
          }
        })}
    </Container>
  );
};

export default Address;

// const getPlace =(props) => {
//     props.results.map(res => {
//         res.Name === props.name && theRes.push(res);
//     })
//     return theRes;
// }
//   // {theRes.length >0 && (console.log(theRes))}

//   // console.log('name ', props.name, 'result ', props.results)
//   return (
//     <Container>
//     {console.log(getPlace())
//     }

//     {/* {theRes.length > 0 ? <p>{theRes.Name}</p> : console.log("empty array")} */}
//     </Container>
//   );
// };
