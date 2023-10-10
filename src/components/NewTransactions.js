import { useState } from "react";

import { Box, Typography, TextField, Button, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h4 {
    margin-top: 40px;
  }
  & > div,
  & > button {
    margin-top: 40px;
  }
`;

const NewTransactions = ({ setTransactions }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const addTransaction = () => {
    const transaction = {
      id: Math.floor(Math.random() * 100000),
      text: text,
      amount: +amount,
    };
    setTransactions((prevState) => [transaction, ...prevState]);
  };
  return (
    <Container>
      <Typography variant="h4"> New Transaction </Typography>
      <TextField
        variant="filled"
        label="Enter Transaction"
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        variant="filled"
        label="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button variant="contained" onClick={() => addTransaction()}>
        Add Transaction
      </Button>
    </Container>
  );
};
export default NewTransactions;
