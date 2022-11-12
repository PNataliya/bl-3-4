import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { useDispatch } from 'react-redux';
import { removeTodos } from '../../redux/TodoSlice';

import { DeleteButton, TodoWrapper } from './Todo.styled';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => dispatch(removeTodos(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
