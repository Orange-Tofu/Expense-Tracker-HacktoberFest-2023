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
const TransactionBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  & > button {
    margin-top: -15px;
    margin-bottom: 10px;
    margin-left: 50px;
    margin-right: 50px;
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

  const addTransaction = ( credit ) => {
    let transactionAmount = parseFloat(amount); // Use parseFloat to ensure a valid number
    if (isNaN(transactionAmount)) {
      setError("Please enter a valid number for the amount.");
    } 
    else {
      transactionAmount = Math.abs(transactionAmount);
      if(credit === false) {
        transactionAmount = transactionAmount * -1;
      }

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
      <TransactionBox>
        <Button variant="contained" color="success" onClick={() => addTransaction(true)}>
          Income
        </Button>
        <Button variant="contained" color="error" onClick={() => addTransaction(false)}>
          Expense
        </Button>
      </TransactionBox>
    </Container>
  );
};

export default NewTransactions;
