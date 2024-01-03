import React from 'react';
import {Diary} from "./model/diary";
import DiaryItem from "./DiaryItem";

interface DiaryListProps {
  onDelete: ({id}: Pick<Diary, "id">) => void;
  diaryList: Diary[]
}

const DiaryList = ({onDelete, diaryList}: DiaryListProps) => {
  return (
    <div className={"DiaryList"}>
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={`diaryitem_${it.id}`} {...it} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
