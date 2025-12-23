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

interface StudentRep {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
}

const studentReps: StudentRep[] = [
  { 
    name: "K Kiran Kumar", 
    role: "President",
    image: kiranKumarImage,
    linkedin: "https://www.linkedin.com/in/kiran-kumar-kambala/"
  },
  { 
    name: "Nandagovind J V", 
    role: "Vice-President", 
    image: nandagovindImage,
    instagram: "https://www.instagram.com/nandagovind_jvhk"
  },
  { 
    name: "Pramod Kumar M", 
    role: "Secretary", 
    image: pramodKumarImage,
    instagram: "https://www.instagram.com/pramod_kumar_m_/",
    linkedin: "https://www.linkedin.com/in/pramodkumar-m",
    email: "me24m207@iittp.ac.in"
  },
  { 
    name: "Sree Advaithi", 
    role: "Secretary",
    email: "me24b045@iittp.ac.in"
  },
  { 
    name: "Prithivi Nandakumar", 
    role: "Coordinator",
    image: prithiviImage,
    linkedin: "https://www.linkedin.com/in/prithivi-nandakumar"
  },
  { 
    name: "Geddam Dhanumjay", 
    role: "Coordinator",
    image: dhanumjayImage,
    instagram: "https://www.instagram.com/__dhanumjay007__",
    linkedin: "https://www.linkedin.com/in/dhanumjayg"
  },
  { 
    name: "Dasari Pranavesh Reddy", 
    role: "Coordinator",
    image: pranaveshImage,
    linkedin: "https://www.linkedin.com/in/pranavesh-reddy-944b5a255"
  },
];

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

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
                className="group bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center animate-fade-in-up flex flex-col items-center"
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
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm mb-3">
                  {student.name}
                </h3>
                
                {/* Social Links */}
                <div className="flex items-center gap-2 mt-auto">
                  {student.linkedin && (
                    <a
                      href={student.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      title="LinkedIn"
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                  {student.instagram && (
                    <a
                      href={student.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      title="Instagram"
                    >
                      <InstagramIcon />
                    </a>
                  )}
                  {student.email && (
                    <a
                      href={`mailto:${student.email}`}
                      className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      title="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
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