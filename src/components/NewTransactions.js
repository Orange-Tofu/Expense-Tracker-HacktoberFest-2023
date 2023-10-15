import { useState } from "react";
import { Box, Typography, TextField, Button, styled, Alert, Input } from "@mui/material";

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

const InputAmount = styled(Input)`
  background: #f0f0f0;
  padding : 15px 15px;
  height: 55px;
`;


const NewTransactions = ({ setTransactions }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(47920);
  const [error, setError] = useState(null);

  const addTransaction = () => {
    const transactionAmount = parseFloat(amount); // Use parseFloat to ensure a valid number
    if (isNaN(transactionAmount)) {
      setError("Please enter a valid number for the amount.");
    } else {
      const newBalance = balance + transactionAmount;
      console.log(balance);
      console.log(transactionAmount);
      console.log(newBalance);
      if (newBalance < 0) {
        setError("You don't have enough balance.");
      } else {
        const transaction = {
          id: Math.floor(Math.random() * 100000),
          text: text,
          amount: transactionAmount,
        };
        setTransactions((prevState) => [transaction, ...prevState]);
        setBalance(newBalance);
        setError(null);
        setText("");
        setAmount("");
      }
    }
  };

  return (
    <Container>
      <Typography variant="h4">New Transaction</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        variant="filled"
        label="Enter Transaction"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <InputAmount
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button variant="contained" onClick={() => addTransaction()}>
        Add Transaction
      </Button>
    </Container>
  );
};

export default NewTransactions;
