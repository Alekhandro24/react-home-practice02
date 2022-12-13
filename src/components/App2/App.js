import { Component } from 'react';
import initialTodos from './todos.json';
import Container from 'components/App2/Container/Container';
import { Form } from './Form';

export class App extends Component {
  state = {
    todos: initialTodos,
    // inputValue: '',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  //   handleInputChange = event => {
  //     this.setState({ inputValue: event.currentTarget.value });
  //   };

  //   handleNameChange = event => {
  //     this.setState({ name: event.currentTarget.value });
  //   };
  //   handleTagChange = event => {
  //     this.setState({ tag: event.currentTarget.value });
  //   };
  formSubmitHandler = data => {
    setTimeout(() => {
      console.log(data);
    }, 1000);
  };

  render() {
    return (
      //   <Container>
      //     <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}></input>
      //   </Container>
      <Container>
        <Form onSubmit={this.formSubmitHandler} />
      </Container>
    );
  }
}
