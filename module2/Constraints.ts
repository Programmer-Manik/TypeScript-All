{
  // Constraints
  const addStudentCourse = <
    T extends { id: Number; name: string; gmail: string }
  >(
    student: T
  ) => {
    const course = "level 2";
    return {
      ...student,
      course,
    };
  };
  const student1 = addStudentCourse<{
    name: string;
    id: number;
    gmail: string;
  }>({
    name: "manik",
    id: 11,
    gmail: "manik@gmail.com",
  });
  const student2 = addStudentCourse({
    name: "manik1",
    id: 22,
    gmail: "manik1@gmail.com",
  });
  const student3 = addStudentCourse({
    name: "manik1",
    id: 22,
    gmail: "manik1@gmail.com",
    job: "not",
  });
}
