import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import FacultyCard from "@/components/shared/FacultyCard";
import { useState } from "react";
import PlaceholderModal from "@/components/shared/PlaceholderModal";
import { User } from "lucide-react";
import abirDuttaImage from "@/assets/faculty/abir-dutta.png";
import govindSahuImage from "@/assets/faculty/govind-sahu.jpg";

const facultyMembers = [
  {
    name: "Prof. Govind Narayan Sahu",
    designation: "Faculty Member, Department of Mechanical Engineering, IIT Tirupati",
    quote: "AME provides a vibrant platform for students to learn beyond the classroom.",
    image: govindSahuImage,
  },
  {
    name: "Dr. Abir Dutta",
    designation: "Faculty Member, Department of Mechanical Engineering, IIT Tirupati",
    quote: "The association bridges the gap between theoretical knowledge and practical applications.",
    image: abirDuttaImage,
  },
  {
    name: "Dr. Mohd Furquan",
    designation: "Faculty Member, Department of Mechanical Engineering, IIT Tirupati",
    quote: "AME nurtures future leaders in the field of mechanical engineering.",
  },
];

const studentReps = [
  { name: "Student Representative 1", role: "General Secretary" },
  { name: "Student Representative 2", role: "Event Coordinator" },
  { name: "Student Representative 3", role: "Technical Head" },
  { name: "Student Representative 4", role: "Media & Outreach" },
];

const Team = () => {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  return (
    <Layout>
      <PageHeader
        title="Our Team"
        subtitle="Faculty mentors and student representatives behind AME"
      />

      {/* Faculty Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <h2 className="heading-3 text-foreground text-center mb-4">
            <span className="text-primary">Faculty</span> Members
          </h2>
          <p className="body-text text-center mb-12 max-w-2xl mx-auto">
            Our dedicated faculty mentors who guide and support AME initiatives
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {facultyMembers.map((faculty, index) => (
              <div
                key={faculty.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FacultyCard {...faculty} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Representatives Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-section">
          <h2 className="heading-3 text-foreground text-center mb-4">
            <span className="text-primary">Student</span> Representatives
          </h2>
          <p className="body-text text-center mb-12 max-w-2xl mx-auto">
            The student leaders driving AME's vision forward
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {studentReps.map((student, index) => (
              <button
                key={student.name}
                onClick={() => setSelectedStudent(student.name)}
                className="group bg-card border border-border rounded-xl p-6 card-hover text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4 mx-auto border-4 border-primary/20 group-hover:border-primary transition-colors">
                  <User className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {student.name}
                </h3>
                <p className="text-sm text-muted-foreground">{student.role}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <PlaceholderModal
        isOpen={!!selectedStudent}
        onClose={() => setSelectedStudent(null)}
        title={selectedStudent || ""}
      />
    </Layout>
  );
};

export default Team;
