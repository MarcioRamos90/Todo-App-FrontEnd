import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import IconButton from "../template/iconButton";
import { markAsDone, masAsPending, remove } from "./todoActions";

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>

        <td>
          <IconButton
            hide={todo.done}
            style="success"
            icon="check"
            onClick={() => props.markAsDone(todo)}
          />
          <IconButton
            hide={!todo.done}
            style="warning"
            icon="undo"
            onClick={() => props.masAsPending(todo)}
          />
          <IconButton
            hide={!todo.done}
            style="danger"
            icon="trash-o"
            onClick={() => props.remove(todo)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  list: state.todo.list
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ markAsDone, masAsPending, remove }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
