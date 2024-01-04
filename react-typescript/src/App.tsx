import React, {useCallback, useEffect, useMemo, useReducer, useRef, useState} from 'react';
import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import {Diary, DiaryAction} from "./model/diary";

type FetchData = {
  email: string;
  body: string;
};

type MemoizedDispatcher = {
  onCreate: ({author, content, emotion}: Omit<Diary, "created_date" | "id">) => void;
  onDelete: ({id}: Pick<Diary, "id">) => void;
  onEdit: ({id, content}: Pick<Diary, "id" | "content">) => void;
}

const reducer = (state: Diary[], action: DiaryAction) => {
  switch (action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE':
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date
      }
      return [newItem, ...state];
    case 'DELETE':
      return state.filter(d => d.id !== action.id)
    case 'EDIT':
      return state.map(d => d.id === action.id ? {...d, content: action.content} : d)
    default:
      return state;
  }
};

export const DiaryStateContext = React.createContext<Diary[]>([]);
export const DiaryDispatchContext = React.createContext<MemoizedDispatcher | undefined>(undefined);


function App() {

  const [data, dispatch] = useReducer(reducer, [])

  const dataId = useRef(0);

  const getData = async () => {
    const res: FetchData[] = await fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json());

    const data: Diary[] = res.slice(0, 20)
      .map(d => {
        return {
          author: d.email,
          content: d.body,
          emotion: Math.floor(Math.random() * 5) + 1,
          created_date: new Date().getTime(),
          id: dataId.current++,
        }
      });

    dispatch({type: 'INIT', data})
  }

  useEffect(() => {
    getData()
  }, []);

  const onEdit = useCallback(({id, content}: Pick<Diary, "id" | "content">) => {
    dispatch({type: 'EDIT', id, content})
  }, [])

  const onCreate = useCallback(({author, content, emotion}: Omit<Diary, "created_date" | "id">) => {
    dispatch({
      type: 'CREATE',
      data: {author, content, emotion, id: dataId.current}
    })
    dataId.current += 1;
  }, []);

  const onDelete = useCallback(({id}: Pick<Diary, "id">) => {
    dispatch({type: 'DELETE', id: id});
  }, [])

  const memoizedDispatches = useMemo(() => {
    return {onCreate, onDelete, onEdit};
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter(d => d.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return {goodCount, badCount, goodRatio}
  }, [data.length]);

  const {goodCount, badCount, goodRatio} = getDiaryAnalysis;

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          <DiaryEditor/>
          <div>전체 일기 : {data.length}</div>
          <div>기분 좋은 일기 : {goodCount}</div>
          <div>기분 나쁜 일기 : {badCount}</div>
          <div>기분 좋은 일기 비율: {goodRatio}</div>
          <DiaryList/>
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;

/*
When to useMemo and useCallback
https://goongoguma.github.io/2021/04/26/When-to-useMemo-and-useCallback/
 */
