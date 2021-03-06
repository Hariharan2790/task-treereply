import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.css";
import Reply from "./Reply";
import swal from "sweetalert";

function App() {
  const [msg, setMsg] = useState("");
  const [nextMsg, setNextMsg] = useState([]);

  const handleClick = () => {
    if (msg === "") {
      swal("Fail", "Please enter some text", "error");
    } else {
      const msgCopy = [...nextMsg];
      msgCopy.push(msg);
      setNextMsg(msgCopy);
      setMsg("");
    }
  };

  return (
    <div className="tree_reply">
      <TextField
        id="filled-basic"
        label="Type Something....."
        variant="filled"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <div className="hello">
        <p>Hello Everyone</p>
        <Button variant="contained" onClick={() => handleClick()}>
          Reply
        </Button>
      </div>
      <div className="reply">
        {nextMsg.map((value, index) => (
          <Reply value={value} index={index} msg={msg} setMsg={setMsg} />
        ))}
      </div>
    </div>
  );
}

export default App;
