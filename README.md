# CGPA and GPA Calculator

This project helps calculate a student's GPA for a single semester and CGPA over multiple semesters. Enter your subject grades and credits, and let the calculator handle the math and present results instantly.

---

## How to Use

- Input the grade and credit hours for each subject/course.
- View calculated results for GPA and CGPA.
- Save, edit, or reset your information as needed.
- Supports tracking and recording of multiple course details for comprehensive academic evaluation.

---

## Calculation Formulas

### GPA Calculation

\[
\text{GPA} = \frac{\sum (\text{Credit Hours} \times \text{Grade Point})}{\text{Total Credit Hours}}
\]

**Example:**

| Course   | Credits | Grade Point | Points |
|----------|---------|-------------|--------|
| Math     |    3    |   4.0       | 12.0   |
| English  |    4    |   3.5       | 14.0   |
| Science  |    2    |   3.7       | 7.4    |

GPA = (12.0 + 14.0 + 7.4) / (3 + 4 + 2) = 33.4 / 9 = **3.71**

---

### CGPA Calculation

\[
\text{CGPA} = \frac{\sum (\text{Credit Hours} \times \text{Grade Point})}{\text{Total Credit Hours (All Semesters)}}
\]

For two semesters with GPAs 2.81 (17 credits) and 1.92 (18 credits):

CGPA = (47.8 + 34.5) / (17 + 18) = 82.3 / 35 = **2.35**

---

### CGPA Percentage (Scale of 10)

\[
\text{CGPA\%} = \text{CGPA} \times 9.5
\]

**Example**: CGPA = 8.1, Percentage = 8.1 × 9.5 = **76.95%**

---

## Features

- Add, edit, or remove courses easily.
- Calculates CGPA and GPA instantly after data entry.
- Stores input and results for future reference in a plain text file.
- Supports resetting data to start calculations anew.

---

## Example Data Structure

Sample data file or input might look like:


Each line logs your course details and resulting CGPA for tracking.

---

## Credits and Contributing

- Fork and clone the repository
- Make edits or suggestions
- Submit a pull request for updates or additional features

---

## License

Open source for educational use; see LICENSE file for more on terms.
