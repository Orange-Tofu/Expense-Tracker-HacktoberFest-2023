import { ListItem, ListItemText, styled } from "@mui/material";

const Detail = styled(ListItem)`
  margin-top: 15px;
`;
const Transaction = ({ transaction }) => {
  return (
    <>
      <Detail style={{ background: "grey" }}>
        <ListItemText>{transaction.text}</ListItemText>
        <ListItemText>{transaction.amount}</ListItemText>
      </Detail>
    </>
  );
};

export default Transaction;
