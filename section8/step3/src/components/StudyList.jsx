import { useStudyState } from "../context/StudyContext";
import { StudyItem } from "./StudyItem";

export function StudyList() {
  const { studys } = useStudyState();

  return (
    <ul>
      {studys.map((study) => (
        <StudyItem key={study.id} study={study} />
      ))}
    </ul>
  );
}
