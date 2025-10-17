import { Subject } from '../types';
import { getGradePoint } from '../data/grades';

export const calculateGPA = (subjects: Subject[], grades: { [key: string]: string }): number => {
  let totalCredits = 0;
  let totalPoints = 0;

  subjects.forEach(subject => {
    const grade = grades[subject.code];
    if (grade) {
      const point = getGradePoint(grade);
      totalCredits += subject.credits;
      totalPoints += point * subject.credits;
    }
  });

  return totalCredits > 0 ? totalPoints / totalCredits : 0;
};

export const calculateCGPA = (gpas: number[]): number => {
  if (gpas.length === 0) return 0;
  const total = gpas.reduce((sum, gpa) => sum + gpa, 0);
  return total / gpas.length;
};

export const getClassification = (cgpa: number, hasArrears: boolean): string => {
  if (cgpa >= 8.5 && !hasArrears) {
    return 'First Class with Distinction';
  } else if (cgpa >= 6.5) {
    return 'First Class';
  } else if (cgpa < 6.5) {
    return 'Second Class';
  }
  return '';
};
