import React, {useEffect, useRef, useState} from "react";
import {Diary} from "./model/diary";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

interface DiaryEditorProps {
  onCreate(diary: Omit<Diary, "created_date" | "id">): void;
}

const DiaryEditor = ({onCreate}: DiaryEditorProps) => {
  useEffect(() => {
    console.log("DiaryEditor 렌더")
  }, );

  const authorInput = useRef<HTMLInputElement>(null);
  const contentInput = useRef<HTMLTextAreaElement>(null);

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  })

  const handleChangeState = (e: InputChangeEvent) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (state.author.length < 1) {
      authorInput.current?.focus();
      return;
    }

    if (state.content.length < 5) {
      contentInput.current?.focus();
      return;
    }

    onCreate(state)

    alert("저장 성공");

    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className={"DiaryEditor"}>
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name={"author"}
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name={"content"}
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>오늘의 감정점수 : </span>
        <select
          name={"emotion"}
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);
