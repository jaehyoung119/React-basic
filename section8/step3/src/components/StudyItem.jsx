import { useStudyActions } from "../hooks/useStudyActions";

export function StudyItem({ study }) {
  const { onDelete, onUpdateStart } = useStudyActions();
  console.log(study);
  return (
    <li>
      {study.title} - {study.dueDate}
      <button onClick={() => onDelete(study.id)}>삭제</button>
      <button onClick={() => onUpdateStart(study)}>수정</button>
    </li>
  );
}
