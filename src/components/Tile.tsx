import React, { Dispatch, SetStateAction } from "react";

interface props {
  alphabet: string;
  setDisplayText: Dispatch<SetStateAction<string>>;
  displayText: string;
}

const Tile = ({ alphabet, setDisplayText, displayText }: props) => {
  return (
    <div
      onClick={() => {
        const secondLast = displayText[displayText?.length - 1];
        const thirdLast = displayText[displayText?.length - 2];

        if (
          secondLast === thirdLast &&
          thirdLast === alphabet &&
          alphabet === secondLast
        ) {
          setDisplayText((text: string) => {
            const copy = text;
            const splitted = copy?.split("");
            splitted[splitted?.length - 1] = "";
            splitted[splitted?.length - 2] = "";
            splitted?.push("_");
            const join = splitted?.join("");

            return join;
          });
        } else {
          setDisplayText((text: string) => text + alphabet);
        }
      }}
      className="bg-[steelblue] capitalize text-white lg:text-5xl text-3xl font-bold text-center p-2 rounded-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
    >
      {alphabet}
    </div>
  );
};

export default Tile;
