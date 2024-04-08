import { Box, Typography, TextField, Button, styled } from "@mui/material";
import { useState } from "react";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h5,
  & > div & > button {
    margin-top: 30px;
  }
`;

const Newtransition = ({ setTransition }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handlesubmit = () => {
    const transition = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: +amount,
    };
    setTransition((prevState) => [transition, ...prevState]);
  };
  return (
    <>
      <Container>
        <Typography variant="h5">New Transtion</Typography>
        <TextField
          label="Enter expense"
          onChange={(e) => setText(e.target.value)}
        />
        <TextField
          label="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button variant="contained" onClick={handlesubmit}>
          Add Transition
        </Button>
      </Container>
    </>
  );
};

export default Newtransition;
