import { Box, Typography, Divider, List } from "@mui/material";
import Storetransition from "./Storetransition";

const Transition = ({ transitions, setTransition }) => {
  return (
    <>
      <Box>
        <Typography varient="h5">Transition History</Typography>

        <Divider />
        <List>
          {transitions.map((transition, index) => (
            <Storetransition
              transition={transition}
              setTransition={setTransition}
              transitions={transitions}
            />
          ))}
        </List>
      </Box>
    </>
  );
};

export default Transition;
