import { Component } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import {
  Container,
  Header,
  SearchForm,
  Section,
  Text,
  TodoList,
} from 'components';

export const App = () => {
  const todos = useSelector(state => state.todos);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <TodoList todos={todos} />
        </Container>
      </Section>
    </>
  );
};
