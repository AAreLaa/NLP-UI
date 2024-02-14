import React from "react";

interface TextBoxProps {
  label: string;
}
export default function TextBox(props: Readonly<TextBoxProps>) {
  const { label } = props;

  return (
    <div className="relative">
      <label
        htmlFor="input"
        className="block mb-2 text-md font-bold text-green-300"
      >
        {label}
      </label>
      <textarea
        id="input"
        rows={15}
        className="block form-textarea p-2.5 w-full text-sm text-white bg-transparent rounded-lg border border-green-600 focus:ring-green-500 focus:border-green-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
}
