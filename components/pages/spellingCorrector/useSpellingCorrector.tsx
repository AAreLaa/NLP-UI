import React, { useState } from "react";

export default function useSpellingCorrector() {
  const [text, setText] = useState<string>("");
  const [fetchedData, setFetchedData] = useState<any>({});
  const [option, setOption] = useState<"knlm" | "transformer">("knlm");
  const [correctionType, setCorrectionType] =
    useState<string>("Auto Correction");
  const [wordArray, setWordArray] = useState([]);
  const [choiceIndex, setChoiceIndex] = useState<number>(0);
  const [status, setStatus] = useState<
    "waiting" | "loading" | "error" | "loaded"
  >("waiting");

  const show = () => {
    let url = `/api/spellchecker/`;
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
        models: option,
      }),
    })
      .then((response) => response.json())

      .then((json) => {
        setFetchedData(json);
        setWordArray(json["Input String"].trim().split(" "));
        setStatus("loaded");
      })
      .catch((err) => setStatus("error"));
  };

  const showOutput = () => {
    if (correctionType == "Auto Correction")
      return (
        <div>
          {fetchedData["Choices list"].map((element: any, i: number) => {
            return (
              <div key={element} className="inline-block relative">
                <span
                  className="relative"
                  key={`${element}`}
                  id={`choice${i}`}
                  style={{
                    color: wordArray[i] === element[0] ? "white" : "red",
                  }}
                >
                  {element[0] + "\xa0"}
                </span>
              </div>
            );
          })}
        </div>
      );
    else
      return (
        <div>
          {fetchedData["Choices list"].map((element: any, i: number) => {
            return (
              <div key={element} className="inline relative">
                <button
                  className="relative"
                  key={`${element}`}
                  id={`choice${i}`}
                  onClick={() => {
                    setChoiceIndex(i);
                    document
                      .getElementById(`optionModal${i}`)
                      ?.classList.toggle("hidden");
                    if (i != choiceIndex) {
                      document
                        .getElementById(`optionModal${choiceIndex}`)
                        ?.classList.add("hidden");
                    }
                  }}
                  style={{
                    color: wordArray[i] === element[0] ? "white" : "red",
                  }}
                >
                  {element[0] + "\xa0"}
                </button>
                <button
                  id={`optionModal${i}`}
                  onClick={() => {
                    document
                      .getElementById(`optionModal${i}`)
                      ?.classList.toggle("hidden");
                  }}
                  className="absolute z-20 hidden top-6 left-0 bg-gray-800 border border-white p-2 rounded-lg text-gray-50 overflow-y-auto max-h-48"
                >
                  {fetchedData["Choices list"][choiceIndex].map(
                    (element: any, i: number) => {
                      return (
                        <div key={`${element}`}>
                          <option
                            className="hover:bg-gray-900 cursor-pointer"
                            onClick={() => {
                              replaceText(i);
                            }}
                          >
                            {element}
                          </option>
                          <hr></hr>
                        </div>
                      );
                    }
                  )}
                </button>
              </div>
            );
          })}
        </div>
      );
  };
  const replaceText = (i: number) => {
    document.getElementById(`choice${choiceIndex}`)!.innerHTML =
      fetchedData["Choices list"][choiceIndex][i] + "\xa0";
    document.getElementById(`choice${choiceIndex}`)!.style.color =
      wordArray[choiceIndex] === fetchedData["Choices list"][choiceIndex][i]
        ? "white"
        : "red";
  };

  const modalState = () => {
    let modal = document.getElementById("popup-modal");
    modal?.classList.remove("hidden");
    modal?.classList.add("flex");
  };

  const setCorrectionOption = (type: string) => {
    setCorrectionType(type);
    if (type == "Auto Correction") {
      document.getElementById("Auto Correction")?.classList.add("bg-green-900");
      document
        .getElementById("Manual Correction")
        ?.classList.remove("bg-green-900");
    } else {
      document
        .getElementById("Auto Correction")
        ?.classList.remove("bg-green-900");
      document
        .getElementById("Manual Correction")
        ?.classList.add("bg-green-900");
    }
  };

  const setModelOption = (type: "knlm" | "transformer") => {
    setOption(type);
    if (type == "knlm") {
      document.getElementById("knlm")?.classList.add("bg-green-900");
      document.getElementById("transformer")?.classList.remove("bg-green-900");
    } else {
      document.getElementById("knlm")?.classList.remove("bg-green-900");
      document.getElementById("transformer")?.classList.add("bg-green-900");
    }
  };

  return {
    text,
    setText,
    show,
    modalState,
    setCorrectionOption,
    setModelOption,
    status,
    showOutput,
  };
}
