import Image from "next/image";
import React from "react";
import Waiting from "@/public/images/loadingImages/waiting.svg";
import Model from "@/public/images/loadingImages/model.svg";
import Error from "@/public/images/loadingImages/error.svg";

interface AnimationScreenProps {
  message: "waiting" | "loading" | "error";
}

export default function AnimationScreen(props: Readonly<AnimationScreenProps>) {
  const { message } = props;
  const getImageAndMsg = (message: string) => {
    if (message == "loading") {
      return {
        imgSrc: Model,
        msg: "Loading the model.",
      };
    } else if (message == "error") {
      return {
        imgSrc: Error,
        msg: "Failed to load the model. Try Again.",
      };
    } else {
      return {
        imgSrc: Waiting,
        msg: "Waiting for your action.",
      };
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="relative flex justify-center items-center mb-2">
        {message != "error" ? (
          <div className="absolute animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-yellow-300"></div>
        ) : null}
        <Image
          src={getImageAndMsg(message).imgSrc}
          className="rounded-full h-10 w-8"
          alt="loading image"
        />
      </div>
      <div className="text-gray-300">{getImageAndMsg(message).msg}</div>
    </div>
  );
}
