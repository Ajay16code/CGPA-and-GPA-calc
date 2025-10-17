export interface Subject {
  code: string;
  name: string;
  credits: number;
}

export interface GradePoint {
  grade: string;
  point: number;
}

export interface SemesterData {
  semester: number;
  subjects: Subject[];
  grades: { [key: string]: string };
}

export interface Department {
  id: string;
  name: string;
}
