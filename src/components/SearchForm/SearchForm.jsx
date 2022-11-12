import { useDispatch } from 'react-redux';
import { addTodos } from '../../redux/TodoSlice.js';
import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { nanoid } from 'nanoid';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const handleSunmit = e => {
    e.preventDefault();
    const {
      elements: { search },
    } = e.currentTarget;

    const todo = { id: nanoid(), text: search.value };

    dispatch(addTodos(todo));
    e.currentTarget.reset();
  };

  return (
    <SearchFormStyled onSubmit={handleSunmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </SearchFormStyled>
  );
};

// export class SearchForm extends Component {
//   state = {
//     query: '',
//   };

//   handleInput = e => {
//     this.setState({
//       query: e.currentTarget.value,
//     });
//   };

//   handleSubmit = e => {
//     const { query } = this.state;

//     e.preventDefault();

//     this.props.onSubmit(query);

//     this.setState({
//       query: '',
//     });
//   };
//   render() {
//     const { query } = this.state;

//     return (
//       <SearchFormStyled onSubmit={this.handleSubmit}>
//         <FormBtn type="submit">
//           <FiSearch size="16px" />
//         </FormBtn>
//         <InputSearch
//           onChange={this.handleInput}
//           placeholder="What do you want to write?"
//           name="search"
//           required
//           value={query}
//           autoFocus
//         />
//       </SearchFormStyled>
//     );
//   }
// }
