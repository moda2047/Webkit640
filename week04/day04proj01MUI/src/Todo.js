import { CheckBox, DeleteOutlined } from "@mui/icons-material";
import { IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";

const Todo = ({item})=>{
    return (<ListItem>
        <CheckBox checked={item.done} />
        <ListItemText>
            <InputBase 
                value={item.title}
                inputProps={{"aria-label": "naked"}} 
                id={item.id}
                name={item.id}
                fullWidth={true}
                />
        </ListItemText>
        <ListItemSecondaryAction>
            <IconButton aria-label="Delete Todo">
                <DeleteOutlined fontSize="inherit" />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>);
}

export default Todo;