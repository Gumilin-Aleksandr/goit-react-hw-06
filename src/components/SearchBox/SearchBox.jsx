// import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filters.filters.name);

  const handleFilter = (e) => {
    const name = e.target.value.trim();
    dispatch(changeFilter(name));
  };

  return (
    <form className={s.form}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        className={s.field}
      />
    </form>
  );
}

export default SearchBox;
