/** 1 . Complete the CourseOptions component. Use map() to create one <option> for each course.
Use course.id as the key and value, and display the course title. */

/**2. Complete handleCourseChange(event). Read event.target.value and update the selectedId
state. */

/**3. Create selectedCourse using find(). Match the course id with Number(selectedId). */

/**4. Create selectedCourse using find(). Match the course id with Number(selectedId). */

/**5. Complete the CourseDetails component. If no course is selected, display: "Please select a
course." Otherwise, display the selected course title and credits. */

import { useState } from "react";

const courses = [
  { id: 1, title: "Web Engineering", credits: 3 },
  { id: 2, title: "Software Testing", credits: 3 },
  { id: 3, title: "Database Systems", credits: 4 },
];
/*
 Task 1:
 Use map() to create an option for every course.
 Use course.id as the key and value.
*/

function CourseOptions({ courses }) {
  return courses.map((course) => (
    <option key={course.id} value={course.id}>
      {course.title}
    </option>
  ));
}
/*
 Task 4:
 Show a message when no course is selected.
 Otherwise display the selected course title and credits.
*/
function CourseDetails({ course }) {
  //Task 4: Write the conditional JSX code here

  if (!course) {
    return <p>Please Select a Course</p>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p>Credit : {course.credits}</p>
    </div>
  );
}
export default function App() {
  const [selectedId, setSelectedId] = useState("");
  /*
 Task 2:
 Read the selected value from the event
 and update selectedId.
 */
  function handleCourseChange(event) {
    //Task 2: Update selectedId here
    setSelectedId(event.target.value);
  }
  /*
 Task 3:
 Use find() to get the course whose id
 matches selectedId.
 */
  //Task 3: Create selectedCourse here
  const selectedCourse = courses.find(
    (course) => course.id === Number(selectedId),
  );
  return (
    <main>
      <h1>Course Selection Viewer</h1>
      <select value={selectedId} onChange={handleCourseChange}>
        <option value="">Select a coursew</option>
        <CourseOptions courses={courses} />
      </select>
      <CourseDetails course={selectedCourse} />
    </main>
  );
}
