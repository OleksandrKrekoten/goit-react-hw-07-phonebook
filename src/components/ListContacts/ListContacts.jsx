import { useSelector, useDispatch } from 'react-redux';
import { List, Item, Name, DeleteBtn, Avatar } from './ListContact.styled';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import { AvatarGenerator } from 'random-avatar-generator';
import { BiTrash } from 'react-icons/bi';

const generator = new AvatarGenerator();

export const ListContacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const query = useSelector(selectFilter);
    function getvisiableTodos() {
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(query.toLowerCase())
        );
    }
    const visiableTodos = getvisiableTodos();
    return (
        <List>
            {visiableTodos.map(({ id, name, phoneNumber }) => (
                <Item key={id}>
                    <DeleteBtn
                        id={id}
                        onClick={e => {
                            dispatch(deleteContact(id));
                        }}
                    >
                        <BiTrash />
                    </DeleteBtn>
                    <Avatar src={generator.generateRandomAvatar(id)} alt="" />
                    <Name>{name}</Name>
                    <p>{phoneNumber}</p>
                </Item>
            ))}
        </List>
    );
};
