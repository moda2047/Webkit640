import { Grid, TextField } from "@mui/material";

import { useState } from "react";

const AddTodo = () => {
  const [item, setItem] = useState({ title: "" });

  return (
    <Grid container style={{ marginTop: 20 }}>
      <Grid>
        <TextField></TextField>y
      </Grid>
      <Grid>
        <TextField></TextField>
      </Grid>
    </Grid>
  );
};

export default AddTodo;
