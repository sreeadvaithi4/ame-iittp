import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import FacultyCard from "@/components/shared/FacultyCard";
import { useState } from "react";
import PlaceholderModal from "@/components/shared/PlaceholderModal";
import { User } from "lucide-react";
import abirDuttaImage from "@/assets/faculty/abir-dutta.png";
import govindSahuImage from "@/assets/faculty/govind-sahu.jpg";
import pramodKumarImage from "@/assets/team/pramod-kumar.jpg";

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
  { name: "Kambala Kiran Kumar", role: "President" },
  { name: "Nandagovind J V", role: "Vice-President" },
  { name: "Pramod Kumar M", role: "Secretary", image: pramodKumarImage },
  { name: "Sree Advaithi", role: "Secretary" },
  { name: "Prithivi Nandakumar", role: "Coordinator" },
  { name: "Geddam Dhanumjay", role: "Coordinator" },
  { name: "Dasari Pranavesh Reddy", role: "Coordinator" },
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {facultyMembers.map((faculty, index) => (
              <div
                key={faculty.name}
                className="animate-fade-in-up h-full"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {studentReps.map((student, index) => (
              <div
                key={student.name}
                className="group bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center animate-fade-in-up h-48 flex flex-col items-center justify-center"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 border-2 border-primary/30 group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300 overflow-hidden">
                  {student.image ? (
                    <img src={student.image} alt={student.name} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-8 h-8 text-primary" />
                  )}
                </div>
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                  {student.role}
                </p>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                  {student.name}
                </h3>
              </div>
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
