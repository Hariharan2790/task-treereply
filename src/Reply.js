import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./App.css";
import swal from "sweetalert";

function Reply({ value, text, index, msg, setMsg }) {
  const [replyMsg, setReplyMsg] = useState("");
  const [nextMsg, setNextMsg] = useState([]);

  const handleClick = () => {
    if (msg === "") {
      swal("Fail", "Please enter some text", "error");
    } else {
      setReplyMsg(msg);
      const msgCopy = [...nextMsg];
      msgCopy.push(msg);
      setNextMsg(msgCopy);
      setMsg("");
    }
  };

  return (
    <div>
      <div className="hello">
        <p>{value}</p>
        <Button variant="contained" onClick={() => handleClick()}>
          Reply
        </Button>
      </div>
      <div className="reply">
        {nextMsg.map((value, index) => (
          <Reply
            value={value}
            index={index}
            msg={msg}
            text={text}
            setMsg={setMsg}
          />
        ))}
      </div>
    </div>
  );
}

export default Reply;
