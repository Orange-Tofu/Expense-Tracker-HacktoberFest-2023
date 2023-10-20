import { ListItem, ListItemText, styled } from "@mui/material";

const Detail = styled(ListItem)`
  margin-top: 15px;
`;
const Transaction = ({ transaction }) => {
  return (
    <>
      {
        transaction.amount >= 0 ?
        <Detail style={{ background: "#8fe28f",borderRadius:'8px' }}>
          
          <ListItemText style={{width:'50%',justifyContent:'flex-start'}}>{transaction.text}</ListItemText>
          <ListItemText style={{width:'50%',justifyContent:'flex-end'}}>{'+'+transaction.amount}</ListItemText>
        </Detail>
        :
        <Detail style={{ background: "#ff9d9d",borderRadius:'8px' }}>
          <ListItemText style={{width:'50%',justifyContent:'flex-start'}}>{transaction.text}</ListItemText>
          <ListItemText style={{width:'50%',justifyContent:'flex-end'}}>{transaction.amount}</ListItemText>
        </Detail>
      }
    </>
  );
};

export default Transaction;
