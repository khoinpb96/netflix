import { useRef, useState } from "react";
import "./Search.scss";

export default function Search() {
  //Toggle input when click on search icon
  const [isOpened, setIsOpended] = useState(false);

  //Show close-btn when input not empty
  const [inputVal, setInputVal] = useState("");
  const isHidden = !inputVal ? "hidden" : "";

  const inputRef = useRef();

  return (
    <span className={isOpened ? "search active" : "search"}>
      <i
        className="fas fa-search search-btn"
        onClick={() => {
          setIsOpended((prev) => !prev);
          inputRef.current.focus();
        }}
      />
      <input
        type="text"
        placeholder="Titles, people, genres"
        onBlur={() => {
          if (!inputVal) setIsOpended(false);
        }}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        ref={inputRef}
      />
      <i
        className={`fas fa-times close-btn ${isHidden}`}
        onClick={() => {
          setIsOpended(true);
          setInputVal("");
          inputRef.current.focus();
        }}
      />
    </span>
  );
}
