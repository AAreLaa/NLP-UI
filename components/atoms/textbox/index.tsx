"use client";

import React from "react";

interface TextBoxProps {
  label: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}
export default function TextBox(props: Readonly<TextBoxProps>) {
  const { label, text, setText } = props;
  const changedvalue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === " " || e.key === "Enter" && text.trim().length !== 0 ) {
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
        className="block form-textarea p-2.5 w-full text-sm text-white bg-transparent rounded-lg border border-green-600 focus:ring-green-500 focus:border-green-50 resize-none"
        placeholder="Write your thoughts here or paste something..."
      ></textarea>
    </div>
  );
}
