import { useId } from "react";
import s from "./SearchBox.module.css";

function SearchBox({ value, onFilter }) {
  const inputNameId = useId();
  return (
    <form className={s.form}>
      <label htmlFor={inputNameId}>Find contacts by name</label>
      <input
        type="text"
        id={inputNameId}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={s.field}
      />
    </form>
  );
}

export default SearchBox;
