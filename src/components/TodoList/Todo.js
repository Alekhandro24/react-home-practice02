// винесли окремо від листа

const Todo = ({ text, onToggleCompleted, onDeleteTodo, completed }) => {
  return (
    <>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className="TodoList__text">{text}</p>
      <button type="button" className="TodoList__btn" onClick={onDeleteTodo}>
        Удалить
      </button>
    </>
  );
};

export default Todo;
