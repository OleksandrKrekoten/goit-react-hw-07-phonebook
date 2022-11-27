import { useSelector, useDispatch } from 'react-redux';
import { List, Item, Name, DeleteBtn } from './ListContact.styled';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
export const ListContacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
console.log(contacts);
    const query = useSelector(selectFilter);
    function getvisiableTodos() {
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(query.toLowerCase())
        );
    }
    const visiableTodos = getvisiableTodos();
    return (
        <List>
            {visiableTodos.map(({ id, name, number }) => (
                <Item key={id}>
                    <Name>{name}</Name>
                    <p>{number}</p>
                    <DeleteBtn
                        id={id}
                        onClick={e => {
                            dispatch(deleteContact(e.target.id));
                        }}
                    >
                        delete
                    </DeleteBtn>
                </Item>
            ))}
        </List>
    );
};
