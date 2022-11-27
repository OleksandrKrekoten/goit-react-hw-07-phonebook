import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { ListContacts } from './ListContacts/ListContacts';
import { SearchForm } from './SearchForm/SearchForm';
import { Section } from './Section/Section';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError, selectContacts } from 'redux/selectors';

export function App() {
    const dispatch = useDispatch();
        const isLoading = useSelector(selectIsLoading);
        const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    const contacts = useSelector(selectContacts);
    return (
        <div>
            <Section title="Phonebook">
                <FormAddContacts />
                {isLoading && !error && <b>Request in progress...</b>}
            </Section>
            <Section title="Contacts">
                {!!contacts.length ? (
                    <>
                        <SearchForm />

                        <ListContacts />
                    </>
                ) : (
                    <p>Add your first contact</p>
                )}
            </Section>
        </div>
    );
}
