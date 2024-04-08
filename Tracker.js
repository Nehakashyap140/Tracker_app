import React, { useState } from "react";
import { Typography, styled, Box } from "@mui/material";
import Balance from "./Balance";
import Expensecard from "./Expensecard";
import Newtransition from "./Newtransition";
import Transition from "./Transition";
const Header = styled(Typography)`
  font-size: 36px;
  color: blue;
  text-transform: uppercase;
`;

const Component = styled(Box)`
  display: flex;
  width: 800px;
  padding: 10px;
  border-radius: 20px;
  margin: auto;
  & > div {
    height: 70vh;
    width: 50%;
    padding: 10px;
  }
`;

const Tracker = () => {
  const [transitions, setTransition] = useState([
    {
      id: 1,
      text: "momos",

      amount: -20,
    },
    {
      id: 2,
      text: "salary",
      amount: 15000,
    },
    {
      id: 3,
      text: "Bonus",
      amount: 1200,
    },
    {
      id: 4,
      text: "Book",
      amount: -800,
    },
  ]);

  return (
    <>
      {/* <div className="App"> */}
      <Box className="App">
        <Header>Expense Tracker</Header>

        <Box>
          <Balance transitions={transitions} />
          <Expensecard transitions={transitions} />
          <Newtransition setTransition={setTransition} />
        </Box>
        <Box>
          <Transition transitions={transitions} setTransition={setTransition} />
        </Box>
      </Box>
      {/* </div> */}
    </>
  );
};

export default Tracker;
