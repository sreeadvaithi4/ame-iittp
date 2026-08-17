import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { useState } from "react";
import PlaceholderModal from "@/components/shared/PlaceholderModal";
import { User, Mail } from "lucide-react";
import abirDuttaImage from "@/assets/faculty/abir-dutta.png";
import govindSahuImage from "@/assets/faculty/govind-sahu.jpg";
import mohdFurquanImage from "@/assets/faculty/mohd-furquan.png";
import sreeAdvaithiImage from "@/assets/team/sree-advaithi.jpg";

const facultyMembers = [{
  name: "Dr. Govind Narayan Sahu",
  designation: "Faculty, Department of Mechanical Engineering, IIT Tirupati",
  email: "govinds@iittp.ac.in",
  linkedin: "https://www.linkedin.com/in/govindsahu15",
  image: govindSahuImage
}, {
  name: "Dr. Abir Dutta",
  designation: "Faculty, Department of Mechanical Engineering, IIT Tirupati",
  email: "abir.dutta@iittp.ac.in",
  linkedin: "https://www.linkedin.com/in/abir-d-a6a143154",
  image: abirDuttaImage
}, {
  name: "Dr. Mohd Furquan",
  designation: "Faculty, Department of Mechanical Engineering, IIT Tirupati",
  email: "mfurquan@iittp.ac.in",
  linkedin: "https://www.linkedin.com/in/mohd-furquan",
  image: mohdFurquanImage
}];
interface StudentRep {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  email?: string;
  row: 1 | 2 | 3 | 4 | 5;
}
const studentReps: StudentRep[] = [
// Row 1: President & Vice President
{
  name: "S. L. Shabareesh",
  role: "President",
  linkedin: "https://www.linkedin.com/in/shabareesh-s-l",
  email: "me26d008@iittp.ac.in",
  row: 1
}, {
  name: "Ch. Karthik Raj",
  role: "Vice-President",
  email: "me23b011@iittp.ac.in",
  row: 1
},
// Row 2: Secretaries 1 & 2
{
  name: "Vamsi Krishn",
  role: "Secretary",
  linkedin: "https://www.linkedin.com/in/vamsi-krishna-veeravalli-3a02ba2b4",
  email: "me23b052@iittp.ac.in",
  row: 2
}, {
  name: "Lakshman Dath",
  role: "Secretary",
  linkedin: "https://www.linkedin.com/in/lakshman-dath-1b876521a",
  email: "me24d003@iittp.ac.in",
  row: 2
},
// Row 3: Secretaries 3 & 4
{
  name: "Gnana Chaitanya",
  role: "Secretary",
  linkedin: "https://www.linkedin.com/in/chaitanya-surisetty-576826250",
  email: "me25m213@iittp.ac.in",
  row: 3
}, {
  name: "Sree Advaithi",
  role: "Secretary",
  image: sreeAdvaithiImage,
  email: "me24b045@iittp.ac.in",
  row: 3
},
// Row 4: Coordinators 1 & 2
{
  name: "Panja Hitha Tejasri",
  role: "Coordinator",
  linkedin: "https://www.linkedin.com/in/hitha-tejasri-panja-244a87415",
  email: "me25b036@iittp.ac.in",
  row: 4
}, {
  name: "Raviprolu Lakshmi Sai Harshitha",
  role: "Coordinator",
  linkedin: "https://www.linkedin.com/in/lakshmi-sai-harshitha-raviprolu-96b448385",
  email: "me25b041@iittp.ac.in",
  row: 4
},
// Row 5: Coordinators 3 & 4
{
  name: "Navaneeth Kumar Chitra",
  role: "Coordinator",
  linkedin: "https://www.linkedin.com/in/navaneeth-kumar-chitra-313189373",
  email: "me25b011@iittp.ac.in",
  row: 5
}, {
  name: "Duggirala Jnana Sai Srikar",
  role: "Coordinator",
  linkedin: "https://www.linkedin.com/in/srikar-d-j-s",
  email: "me25b013@iittp.ac.in",
  row: 5
}];

const LinkedInIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>;
const StudentCard = ({
  student
}: {
  student: StudentRep;
}) => <div className="group bg-white border border-border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center h-full w-full hover:scale-[1.02] hover:border-primary/30">
    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-6 border-4 border-primary/30 group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300 overflow-hidden">
      {student.image ? <img src={student.image} alt={student.name} className="w-full h-full object-cover" /> : <User className="w-16 h-16 md:w-20 md:h-20 text-primary" />}
    </div>
    <p className="text-sm md:text-base font-medium text-primary uppercase tracking-wider mb-2">
      {student.role}
    </p>
    <h3 className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors mb-5">
      {student.name}
    </h3>
    
    {/* Social Links - Only LinkedIn and Email with improved visibility */}
    <div className="flex items-center gap-3 mt-auto">
      {student.linkedin && <a href={student.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110" title="LinkedIn">
          <LinkedInIcon />
        </a>}
      {student.email && <a href={`mailto:${student.email}`} className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110" title="Email">
          <Mail className="w-5 h-5" />
        </a>}
    </div>
  </div>;
const Team = () => {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const row1 = studentReps.filter(s => s.row === 1);
  const row2 = studentReps.filter(s => s.row === 2);
  const row3 = studentReps.filter(s => s.row === 3);
  const row4 = studentReps.filter(s => s.row === 4);
  const row5 = studentReps.filter(s => s.row === 5);

  return <Layout>
      <PageHeader title="Our Team" subtitle="Faculty mentors and student representatives behind AME" />

      {/* 2026 Year Heading */}
      <section className="pt-10 md:pt-14 pb-2 bg-background">
        <div className="container-section text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight animate-fade-in">
            2026-27
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-xl mx-auto">
            Meet the AME team for the academic year 2026-27
          </p>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-section">
          <h2 className="heading-3 text-foreground text-center mb-4">
            <span className="text-primary">Faculty</span>
          </h2>
          <p className="body-text text-center mb-10 max-w-2xl mx-auto">
            Our dedicated faculty mentors who guide and support AME initiatives
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {facultyMembers.map((faculty, index) => <div key={faculty.name} className="bg-white border border-border rounded-xl p-6 md:p-8 text-center animate-fade-in-up hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Avatar */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-secondary flex items-center justify-center mb-4 md:mb-6 mx-auto overflow-hidden border-4 border-primary/20 transition-all duration-300 hover:border-primary">
                  {faculty.image ? <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover" /> : <User className="w-16 h-16 md:w-20 md:h-20 text-muted-foreground" />}
                </div>

                {/* Info */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  {faculty.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-5">
                  {faculty.designation}
                </p>

                {/* Icons - Only LinkedIn and Email with improved visibility */}
                <div className="flex items-center justify-center gap-3">
                  {faculty.linkedin && <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110" title="LinkedIn">
                      <LinkedInIcon />
                    </a>}
                  <a href={`mailto:${faculty.email}`} className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110" title={`Email ${faculty.name}`}>
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Student Representatives Section */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container-section">
          <h2 className="heading-3 text-center mb-4 text-primary-foreground">
            <span className="text-primary-foreground">Student</span> Representatives
          </h2>
          <p className="body-text text-center mb-10 max-w-2xl mx-auto text-popover">
            The student leaders driving AME's vision forward
          </p>

          {/* Row 1: President & Vice President */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 max-w-2xl mx-auto">
            {row1.map(student => <StudentCard key={student.name} student={student} />)}
          </div>

          {/* Row 2: Secretaries */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 max-w-2xl mx-auto">
            {row2.map(student => <StudentCard key={student.name} student={student} />)}
          </div>

          {/* Row 3: Secretaries 3 & 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 max-w-2xl mx-auto">
            {row3.map(student => <StudentCard key={student.name} student={student} />)}
          </div>

          {/* Row 4: Coordinators 1 & 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 max-w-2xl mx-auto">
            {row4.map(student => <StudentCard key={student.name} student={student} />)}
          </div>

          {/* Row 5: Coordinators 3 & 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {row5.map(student => <StudentCard key={student.name} student={student} />)}
          </div>

        </div>
      </section>

      <PlaceholderModal isOpen={!!selectedStudent} onClose={() => setSelectedStudent(null)} title={selectedStudent || ""} />
    </Layout>;
};
export default Team;