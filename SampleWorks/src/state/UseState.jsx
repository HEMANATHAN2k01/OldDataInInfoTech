import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const UseState = () => {
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [stack, setStack] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name : ${name}`)
    setName('')
    setDept('')
    setStack('')  
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mt-2 mb-5">
            <TextField
              className="w-96"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <TextField
              className="w-96"
              id="outlined-basic"
              label="Department"
              variant="outlined"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <TextField
              className="w-96"
              id="outlined-basic"
              label="Stack"
              variant="outlined"
              value={stack}
              onChange={(e) => setStack(e.target.value)}
              required
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
