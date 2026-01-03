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
import kiranKumarImage from "@/assets/team/kiran-kumar.jpg";
import dhanumjayImage from "@/assets/team/dhanumjay.webp";
import prithiviImage from "@/assets/team/prithivi.png";
import pranaveshImage from "@/assets/team/pranavesh.jpeg";

const facultyMembers = [
  {
    name: "Dr. Govind Narayan Sahu",
    designation: "Faculty, Department of Mechanical Engineering, IIT Tirupati",
    email: "govinds@iittp.ac.in",
    linkedin: "https://www.linkedin.com/in/govind-sahu",
    image: govindSahuImage,
  },
  {
    name: "Dr. Abir Dutta",
    designation: "Faculty, Department of Mechanical Engineering, IIT Tirupati",
    email: "abir.dutta@iittp.ac.in",
    linkedin: "https://www.linkedin.com/in/abir-dutta",
    image: abirDuttaImage,
  },
  {
    name: "Dr. Mohd Furquan",
    designation: "Faculty, Department of Mechanical Engineering, IIT Tirupati",
    email: "mfurquan@iittp.ac.in",
    linkedin: "https://www.linkedin.com/in/mohd-furquan",
    image: mohdFurquanImage,
  },
];

interface StudentRep {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  email?: string;
  row: 1 | 2 | 3;
}

const studentReps: StudentRep[] = [
  // Row 1: President & Vice President
  { 
    name: "K Kiran Kumar", 
    role: "President",
    image: kiranKumarImage,
    linkedin: "https://www.linkedin.com/in/kiran-kumar-kambala/",
    email: "me22b013@iittp.ac.in",
    row: 1
  },
  { 
    name: "Nandagovind J V", 
    role: "Vice-President", 
    image: nandagovindImage,
    linkedin: "https://www.linkedin.com/in/nandagovind-jv",
    email: "me22b023@iittp.ac.in",
    row: 1
  },
  // Row 2: Secretaries
  { 
    name: "Pramod Kumar M", 
    role: "Secretary", 
    image: pramodKumarImage,
    linkedin: "https://www.linkedin.com/in/pramodkumar-m",
    email: "me24m207@iittp.ac.in",
    row: 2
  },
  { 
    name: "Sree Advaithi", 
    role: "Secretary",
    email: "me24b045@iittp.ac.in",
    row: 2
  },
  // Row 3: Coordinators
  { 
    name: "Prithivi Nandakumar", 
    role: "Coordinator",
    image: prithiviImage,
    linkedin: "https://www.linkedin.com/in/prithivi-nandakumar",
    email: "me23b030@iittp.ac.in",
    row: 3
  },
  { 
    name: "Geddam Dhanumjay", 
    role: "Coordinator",
    image: dhanumjayImage,
    linkedin: "https://www.linkedin.com/in/dhanumjayg",
    email: "me23b011@iittp.ac.in",
    row: 3
  },
  { 
    name: "Dasari Pranavesh Reddy", 
    role: "Coordinator",
    image: pranaveshImage,
    linkedin: "https://www.linkedin.com/in/pranavesh-reddy-944b5a255",
    email: "me23b008@iittp.ac.in",
    row: 3
  },
];

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const StudentCard = ({ student }: { student: StudentRep }) => (
  <div className="group bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center h-full w-full">
    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-4 border-4 border-primary/30 group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300 overflow-hidden">
      {student.image ? (
        <img src={student.image} alt={student.name} className="w-full h-full object-cover" />
      ) : (
        <User className="w-16 h-16 text-primary" />
      )}
    </div>
    <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
      {student.role}
    </p>
    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-4">
      {student.name}
    </h3>
    
    {/* Social Links - Only LinkedIn and Email */}
    <div className="flex items-center gap-3 mt-auto">
      {student.linkedin && (
        <a
          href={student.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          title="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      )}
      {student.email && (
        <a
          href={`mailto:${student.email}`}
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          title="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
      )}
    </div>
  </div>
);

const Team = () => {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  const row1 = studentReps.filter(s => s.row === 1);
  const row2 = studentReps.filter(s => s.row === 2);
  const row3 = studentReps.filter(s => s.row === 3);

  return (
    <Layout>
      <PageHeader
        title="Our Team"
        subtitle="Faculty mentors and student representatives behind AME"
      />

      {/* Faculty Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-section">
          <h2 className="heading-3 text-foreground text-center mb-4">
            <span className="text-primary">Faculty</span>
          </h2>
          <p className="body-text text-center mb-10 max-w-2xl mx-auto">
            Our dedicated faculty mentors who guide and support AME initiatives
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {facultyMembers.map((faculty, index) => (
              <div
                key={faculty.name}
                className="bg-card border border-border rounded-xl p-8 text-center animate-fade-in-up hover:border-primary/30 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Avatar */}
                <div className="w-40 h-40 rounded-full bg-secondary flex items-center justify-center mb-6 mx-auto overflow-hidden border-4 border-primary/20">
                  {faculty.image ? (
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-20 h-20 text-muted-foreground" />
                  )}
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {faculty.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-5">
                  {faculty.designation}
                </p>

                {/* Icons - Only LinkedIn and Email */}
                <div className="flex items-center justify-center gap-3">
                  {faculty.linkedin && (
                    <a
                      href={faculty.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      title="LinkedIn"
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                  <a
                    href={`mailto:${faculty.email}`}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    title={`Email ${faculty.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Representatives Section */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container-section">
          <h2 className="heading-3 text-foreground text-center mb-4">
            <span className="text-primary">Student</span> Representatives
          </h2>
          <p className="body-text text-center mb-10 max-w-2xl mx-auto">
            The student leaders driving AME's vision forward
          </p>

          {/* Row 1: President & Vice President */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-2xl mx-auto">
            {row1.map((student) => (
              <StudentCard key={student.name} student={student} />
            ))}
          </div>

          {/* Row 2: Secretaries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-2xl mx-auto">
            {row2.map((student) => (
              <StudentCard key={student.name} student={student} />
            ))}
          </div>

          {/* Row 3: Coordinators - All 3 in one row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {row3.map((student) => (
              <StudentCard key={student.name} student={student} />
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