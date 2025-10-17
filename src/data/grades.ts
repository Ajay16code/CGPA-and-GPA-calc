import { GradePoint } from '../types';

export const gradePoints: GradePoint[] = [
  { grade: 'O', point: 10 },
  { grade: 'A+', point: 9 },
  { grade: 'A', point: 8 },
  { grade: 'B+', point: 7 },
  { grade: 'B', point: 6 },
  { grade: 'C', point: 5 },
  { grade: 'P', point: 4 },
  { grade: 'F', point: 0 },
  { grade: 'AB', point: 0 },
];

export const getGradePoint = (grade: string): number => {
  const gradeData = gradePoints.find(g => g.grade === grade);
  return gradeData ? gradeData.point : 0;
};
