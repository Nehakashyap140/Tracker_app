import { ListItem, ListItemText, styled } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Details = styled(ListItem)`
  margin-top: 10px;
`;

const Storetransition = ({ transition, setTransition, transitions }) => {
  const color = transition.amount > 0 ? "green" : "Red";
  const deleteTranstion = (id) => {
    setTransition(transitions.filter((transition) => transition.id !== id));
  };

  return (
    <>
      <Details style={{ background: `${color}`, color: "#fff" }}>
        <ListItem>
          <DeleteIcon onClick={() => deleteTranstion(transition.id)} />
        </ListItem>
        <ListItemText>{transition.text}</ListItemText>
        <ListItemText>{transition.amount}</ListItemText>
      </Details>
    </>
  );
};

export default Storetransition;
