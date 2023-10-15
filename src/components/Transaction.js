import { ListItem, ListItemText, styled } from "@mui/material";

const Detail = styled(ListItem)`
  margin-top: 15px;
`;
const Transaction = ({ transaction }) => {
  return (
    <>
      {
        transaction.amount >= 0 ?
        <Detail style={{ background: "green" }}>
          <ListItemText>{transaction.text}</ListItemText>
          <ListItemText>{transaction.amount}</ListItemText>
        </Detail>
        :
        <Detail style={{ background: "red" }}>
          <ListItemText>{transaction.text}</ListItemText>
          <ListItemText>{transaction.amount}</ListItemText>
        </Detail>
      }
    </>
  );
};

export default Transaction;
