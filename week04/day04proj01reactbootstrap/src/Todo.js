import { Checkbox, InputBase, ListItem, ListItemText } from "@mui/material";

const Todo = ({ item }) => {
  return (
    <ListItem>
      <Checkbox />
      <ListItemText>
        <InputBase value={item.title} />
      </ListItemText>
    </ListItem>
  );
};

export default Todo;
