import React, { useState } from "react";

export default function useTextGenerator() {
  const [text, setText] = React.useState<string>("");
  const [generated, setGenerated] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [number, setNumber] = useState<string>("3");
  const [status, setStatus] = useState<
    "waiting" | "loading" | "error" | "loaded"
  >("waiting");

  const show = () => {
    let url = "/api/transformer-lm/";
    setStatus("loading");

    fetch(url, {
      method: "post",
      mode: "cors",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        body: text.trim(),
        num_words: number.trim().length === 0 ? 3 : number,
      }),
    })
      .then((response) => response.json())

      .then((json) => {
        setInput(json["Input String"]);
        setGenerated(json["Generated String"]);
        setStatus("loaded");
      })
      .catch((err) => setStatus("error"));
  };

  const showOutput = () => {
    return (
      <div>
        <span className="text-white">{input}</span>
        <span className="text-green-400">&nbsp;{generated}</span>
      </div>
    );
  };

  const modalState = () => {
    let modal = document.getElementById("popup-modal");
    modal?.classList.remove("hidden");
    modal?.classList.add("flex");
  };

  return {
    text,
    setText,
    show,
    number,
    setNumber,
    showOutput,
    status,
    modalState,
  };
}
