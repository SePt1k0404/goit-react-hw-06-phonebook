import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/actions';
import { InputFilterWrapper, InputFilter } from './ContactsFilter.styled';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const handlerChange = evt => dispatch(filterContacts(evt.target.value));
  return (
    <>
      <InputFilterWrapper>
        <label>
          Find contacts by name
          <InputFilter type="text" name="filter" onChange={handlerChange} />
        </label>
      </InputFilterWrapper>
    </>
  );
};
