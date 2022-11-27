import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/filterSlice';

export const SearchForm = () => {
    const dispatch = useDispatch();
    return (
        <input
            type="text"
            onChange={e => dispatch(filteredContacts(e.target.value))}
            placeholder="Search"
        />
    );
};
