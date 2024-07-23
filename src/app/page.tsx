import styles from "./page.module.css";
import course from "./course.json";

export default function Home() {
  return (
    <main className={styles.main}>
      {course.lessons.map((lesson) => (
        <li key={lesson.name}>
          {lesson.title}
          <h3>{lesson.name}</h3>
          <p>{lesson.points}</p>
        </li>
      ))}
    </main>
  );
}
