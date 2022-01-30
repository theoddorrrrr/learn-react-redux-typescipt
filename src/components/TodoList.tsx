import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchTodos, setTodosPage } from "../store/action-creator/todo";

const TodoList: React.FC = () => {
  const { page, error, loading, todos, limit } = useTypedSelector(
    (state) => state.todo
  );
  const dispatch = useDispatch();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    dispatch(fetchTodos(page, limit));
  }, [page]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
          margin: 10,
        }}
      >
        {pages.map((p) => (
          <div
            onClick={() => dispatch(setTodosPage(p))}
            key={p}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: p === page ? "2px solid green" : "1px solid black",
              padding: 10,
              borderRadius: "50%",
              height: 15,
              width: 15,
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
