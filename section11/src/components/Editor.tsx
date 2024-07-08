import { useState } from "react";
import { useTodoDispatch } from "../App";

// interface Props {}

const Editor = () => {
  const [text, setText] = useState<string>("");
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const dispatch = useTodoDispatch();

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button
        onClick={() => {
          onClickButton();
          setText("");
        }}
      >
        추가
      </button>
    </div>
  );
};

export default Editor;
