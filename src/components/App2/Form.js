import { Component } from 'react';

export class Form extends Component {
  // перерисувати інпут поки пишем, не для сабміта
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  //   nameInputId = shortid.generate();
  //   tagInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    // co, vnsole.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    //   console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenceChange = e => {
    // console.log(e.currentTarget.checked);
    this.setState({ licence: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ім*я
          {/* htmlFor="this.nameInputId" */}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            // id={this.nameInputId}
          ></input>
        </label>

        <label>
          {/* htmlFor="this.tagInputId" */}
          Прізвище
          <input type="text" name="tag" value={this.state.tag} onChange={this.handleChange}></input>
          {/* id={this.tagInputId} */}
        </label>

        <p>Ваш рівень</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senor"
            onChange={this.handleChange}
            checked={this.state.experience === 'senor'}
          />
          senor
        </label>

        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
        </label>

        <button type="submit" disabled={!this.state.licence}>
          ВІдправити
        </button>
      </form>
    );
  }
}
