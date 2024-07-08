import { Todo } from "../types";
import { useTodoDispatch } from "../App";

interface Props extends Todo {
  key: number;
}

const TodoItem = (props: Props) => {
  const dispatch = useTodoDispatch();
  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };
  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClickButton}>delete</button>
    </div>
  );
};

export default TodoItem;
