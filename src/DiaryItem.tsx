import {Diary} from "./model/diary";
import {useRef, useState} from "react";

interface DiaryItemProps extends Diary {
  onDelete: ({id}: Pick<Diary, "id">) => void;
  onEdit: ({id, content}: Pick<Diary, "id" | "content">) => void;
}

const DiaryItem = ({id, author, content, emotion, created_date, onDelete, onEdit}: DiaryItemProps) => {

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef<HTMLTextAreaElement>(null);

  const toggleIsEdit = () => setIsEdit(!isEdit);

  const handleDelete = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onDelete({id});
    }
  }

  const handleQuitEdit = () => {
    toggleIsEdit();
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current?.focus();
      return;
    }

    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
      onEdit({id, content: localContent});
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author_info">
          | 작성자 : {author} | 감정점수 : {emotion} |
        </span>
        <br/>
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            ref={localContentInput}
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          />
        ) : (
          content
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleDelete}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
