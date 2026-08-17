// src/components/StudentDirectory.jsx
import StudentCard from './StudentCard';

export default function StudentDirectory({ students }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Student Directory</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}