import { useDispatch, useSelector } from 'react-redux';
import { ContactData, Item, List } from './ContactList.styled';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contacts.id));
  const visibleContacts = filterValue
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase())
      )
    : contacts;
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <ContactData>
            {name}: {number}
          </ContactData>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
