import { FaPhone, FaUser } from "react-icons/fa";
import s from "./Contact.module.css";

function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={s.container}>
      <div className={s.contact}>
        <p className={s.items}>
          <FaUser />
          {name}
        </p>
        <p className={s.items}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={s.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
