import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector((state) => state.contacts.contacts.items);

  return (
    <ul className={s.container}>
      {contacts.map((contact) => (
        <li className={s.contactList} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
