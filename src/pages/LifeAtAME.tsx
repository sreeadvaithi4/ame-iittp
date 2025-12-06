import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import CategoryCard from "@/components/shared/CategoryCard";
import { 
  Users, 
  Sparkles, 
  Heart, 
  GraduationCap 
} from "lucide-react";

const categories = [
  {
    title: "Faculty Interactions",
    description: "Moments that capture faculty and student interactions.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Freshers",
    description: "Welcoming new members to the AME family.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: "Farewells",
    description: "Celebrating the achievements of graduating seniors.",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Alumni Interactions",
    description: "Connecting with successful alumni for guidance and networking.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
];

const LifeAtAME = () => {
  return (
    <Layout>
      <PageHeader
        title="Life at AME"
        subtitle="Snapshots of campus life and AME community"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <p className="body-large text-center mb-12 max-w-3xl mx-auto">
            Beyond academics, AME fosters a vibrant community where students create 
            lasting memories, build friendships, and grow together as future engineers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LifeAtAME;
