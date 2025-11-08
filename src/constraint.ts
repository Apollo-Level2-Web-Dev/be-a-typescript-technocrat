// constraint : strict rules deya

type Stuent = { id: number; name: string; dateOfBirth: string; class: string };

const addStudentToCourse = <T extends Stuent>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Mezba",
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};

const student3 = {
  id: 444,
  name: "Abdur Rakib",
  hasWatch: true,
  dateOfBirth: "20-20-2020",
  class: "1",
};

const result = addStudentToCourse(student3);
console.log(result);
