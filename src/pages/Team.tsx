import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { useState } from "react";
import PlaceholderModal from "@/components/shared/PlaceholderModal";
import { User, Mail } from "lucide-react";
import abirDuttaImage from "@/assets/faculty/abir-dutta.png";
import govindSahuImage from "@/assets/faculty/govind-sahu.jpg";
import mohdFurquanImage from "@/assets/faculty/mohd-furquan.png";
import pramodKumarImage from "@/assets/team/pramod-kumar.jpg";
import nandagovindImage from "@/assets/team/nandagovind.jpg";

const facultyMembers = [
  {
    name: "Dr. Govind Narayan Sahu",
    designation: "Faculty Member, Department of Mechanical Engineering, IIT Tirupati",
    email: "govinds@iittp.ac.in",
    image: govindSahuImage,
  },
  {
    name: "Dr. Abir Dutta",
    designation: "Faculty Member, Department of Mechanical Engineering, IIT Tirupati",
    email: "abir.dutta@iittp.ac.in",
    image: abirDuttaImage,
  },
  {
    name: "Dr. Mohd Furquan",
    designation: "Faculty Member, Department of Mechanical Engineering, IIT Tirupati",
    email: "mfurquan@iittp.ac.in",
    image: mohdFurquanImage,
  },
];

const studentReps = [
  { name: "Kambala Kiran Kumar", role: "President" },
  { name: "Nandagovind J V", role: "Vice-President", image: nandagovindImage },
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {facultyMembers.map((faculty, index) => (
              <div
                key={faculty.name}
                className="bg-card border border-border rounded-xl p-6 text-center animate-fade-in-up hover:border-primary/30 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-4 mx-auto overflow-hidden border-4 border-primary/20">
                  {faculty.image ? (
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-12 h-12 text-muted-foreground" />
                  )}
                </div>

                {/* Info */}
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {faculty.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {faculty.designation}
                </p>

                {/* Email Icon */}
                <a
                  href={`mailto:${faculty.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  title={`Email ${faculty.name}`}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Contact</span>
                </a>
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
