import { Component } from 'react';
import Container from 'components/App2/Container/Container';
import TodoList from 'components/TodoList/TodoList';
import TodoEditor from 'components/TodoList/TodoEditor';
import Filter from 'components/TodoList/Filter';
// import initialTodos from 'components/App2/todos.json';
import shortid from 'shortid';
import Modal from 'components/Modal-3/Modal';
import Tabs from 'components/Tabs';
import tabs from 'components/Tabs/tabs.json';
import IconButton from 'components/IconButton';
import { ReactComponent as CheckIcon } from 'components/IconButton/check-vector.svg';

export class App extends Component {
  state = {
    // todos: initialTodos,
    todos: [],
    filter: '',
    showModal: false,
  };

  // прочитати з localStorage, коли todos: initialTodos пусто(пустий []), але є в localStorage
  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    // щоб не впало, якщо нічого не має
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  // записуємо в localStorage значення/ при першому рендері - пусто/не робити => стрілкою
  componentDidUpdate(prevProps, prevState) {
    // console.log('Аpp componentDidUpdate');
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    if (nextTodos.length > prevState.todos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
    // мене связанная логика, отвязіваем addTodo от закрития модалки и проверяем отдельно
  }

  //  / отримаємо данні з todoeditor під час submit і в ній робимо нову todo
  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));

    // this.toggleModal(); тут закриває ще модалку
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  // щось змінити, оновити в середині масива не змінюючи весь масив
  toggleCompleted = todoId => {
    // console.log(todoId);
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.is === todoId) {
    //       console('це саме тот todo');
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizegFilter = filter.toLowerCase();

    return todos.filter(todo => todo.text.toLowerCase().includes(normalizegFilter));
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
  };

  toggleModal = () => {
    // this.setState(state => ({
    //   showModal: !state.showModal,
    // }));
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;

    // TODO:рефакторинг висляеміх данних
    // const visibleTodos = this.getVisibleTodos();
    // const completedTodoCount = this.calculateCompletedTodos();
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();

    // const normalizegFilter = filter.toLowerCase();
    // const visibleTodos = todos.filter(todo => todo.text.toLowerCase().includes(normalizegFilter));
    const visibleTodos = this.getVisibleTodos();
    return (
      <Container>
        {/* <Tabs items={tabs} /> */}

        {/* <CheckIcon width="140" height="140" fill="red" /> */}
        <IconButton onClick={this.toggleModal} aria-lebel="Добавити todo">
          <CheckIcon width="40" height="40" fill="red" />
        </IconButton>

        <button type="button" onClick={this.toggleModal}>
          відкрий мене
        </button>
        {/* {showModal && <Modal />} */}
        {/* все, що всередині определ*етс* местом визова */}
        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hey. What*s up?</h1>
            <p>lorem20</p>
            <button type="button" onClick={this.toggleModal}>
              Закрити
            </button>
          </Modal>
        )} */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}

        {/* TODO: вынести в отдельный компонент */}

        <div>
          <p>Всего заметок: {totalTodoCount}</p>
          <p>Выполнено: {completedTodoCount}</p>
        </div>

        {/* <TodoEditor onSubmit={this.addTodo} /> */}

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        {/* <Modal /> */}
      </Container>
    );
  }
}
