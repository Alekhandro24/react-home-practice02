import { Component } from 'react';
// import { FaRegThumbsDown } from 'react-icons/fa';
import 'components/App2/TodoEditor/TodoEditor.scss';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button className="TodoEditor__button" type="submit">
          Добавити{' '}
        </button>
      </form>
    );
  }
}

// class TodoEditor extends Component {
//   state = {
//     message: '',
//   };

//   handleChange = e => {
//     this.setState({ message: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state.message);

//     this.setState({ message: '' });
//   };

//   render() {
//     return (
//       <form className="TodoEditor" onSubmit={this.handleSubmit}>
//         <textarea
//           className="TodoEditor__textarea"
//           value={this.state.message}
//           onChange={this.handleChange}
//         ></textarea>
//         <button type="submit" className="TodoEditor__button">
//           Сохранить
//         </button>
//       </form>
//     );
//   }
// }

export default TodoEditor;
