import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const UseState = () => {
  const [reg, setReg] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${name} ${reg} ${title} ${description}`);
  };

  return (
    <div>
      <h1 className="text-3xl text-center">Todos</h1>
      <div className="w-96 m-auto">
        <form onSubmit={handleSubmit}>
          <div className="mt-2 mb-2">
            <TextField
              className="w-96"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <TextField
              className="w-96"
              id="outlined-basic"
              label="Regno"
              variant="outlined"
              value={reg}
              onChange={(e) => setReg(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <TextField
              className="w-96"
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <TextField
              className="w-96"
              id="outlined-basic"
              label="Description"
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
