import React, {useRef, useState} from 'react';
import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import {Diary} from "./model/diary";

function App() {

  const [data, setData] = useState<Diary[]>([]);

  const dataId = useRef(0);

  const onCreate = ({author, content, emotion}: Omit<Diary, "created_date" | "id">) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = ({id}: Pick<Diary, "id">) => {
    setData(data.filter(d => d.id !== id))
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onDelete={onDelete} diaryList={data}/>
    </div>
  );
}

export default App;
