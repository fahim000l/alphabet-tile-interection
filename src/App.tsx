import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Tile from "./components/Tile";

const alphabets: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function App() {
  const [displayText, setDisplayText] = useState<string>("");

  return (
    <div className="">
      <div className="lg:mx-20 lg:my-10 mx-5 my-5 flex flex-col gap-5">
        <p className="text-center text-xl font-semibold">Type Something</p>
        <Display setDisplayText={setDisplayText} displayText={displayText} />
        <div className="grid grid-cols-4 lg:grid-cols-12 w-[100%] lg:gap-10 gap-5">
          {alphabets?.map((alphabet: string) => (
            <Tile
              alphabet={alphabet}
              setDisplayText={setDisplayText}
              displayText={displayText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
