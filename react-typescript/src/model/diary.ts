export type Diary = {
  id: number,
  author: string,
  content: string,
  emotion: number,
  created_date: number
}

export type DiaryAction =
  | { type: 'INIT'; data: Diary[] }
  | { type: 'CREATE'; data: Omit<Diary, "created_date"> }
  | { type: 'DELETE'; id: number }
  | { type: 'EDIT'; id: number; content: string };
