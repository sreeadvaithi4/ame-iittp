import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import FacultyCard from "@/components/shared/FacultyCard";
import abirDutta from "@/assets/faculty/abir-dutta.png";
import govindSahu from "@/assets/faculty/govind-sahu.jpg";
import mohdFurquan from "@/assets/faculty/mohd-furquan.png";

const facultyMembers = [
  {
    name: "Dr. Abir Dutta",
    designation: "Faculty Advisor",
    image: abirDutta,
  },
  {
    name: "Dr. Govind Sahu",
    designation: "Faculty Advisor",
    image: govindSahu,
  },
  {
    name: "Dr. Mohd Furquan",
    designation: "Faculty Advisor",
    image: mohdFurquan,
  },
];

const FacultyMembers = () => {
  return (
    <Layout>
      <PageHeader
        title="Faculty Members"
        subtitle="Meet our dedicated faculty advisors"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </Layout>
  );
};

export default FacultyMembers;
