"use client";

import React from "react";

interface TextBoxProps {
  label: string;
}
export default function TextBox(props: Readonly<TextBoxProps>) {
  const { label } = props;
  const [text, setText] = React.useState("");
  const changedvalue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === " " || e.key === "Enter") {
      const lang = "ne";
      const url = `https://www.google.com/inputtools/request?ime=transliteration_en_${lang}&num=5&cp=0&cs=0&ie=utf-8&oe=utf-8&app=jsapi&text=${text}`;
      fetch(url)
        .then((res) =>
          res.json().then((data) => {
            setText(data[1][0][1][0] + " ");
          })
        )
        .catch((err) => setText(err));
    }
  };

  return (
    <div className="relative">
      <label
        htmlFor="input"
        className="block mb-2 text-md font-bold text-green-300"
      >
        {label}
      </label>
      <textarea
        value={text}
        onKeyDown={handleKey}
        onChange={changedvalue}
        autoFocus
        id="input"
        rows={15}
        className="block form-textarea p-2.5 w-full text-sm text-white bg-transparent rounded-lg border border-green-600 focus:ring-green-500 focus:border-green-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
}
