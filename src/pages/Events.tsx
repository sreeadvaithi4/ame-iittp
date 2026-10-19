import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Link } from "react-router-dom";
import CategoryCard from "@/components/shared/CategoryCard";
import {
  Factory,
  Mic2,
  Trophy,
  HelpCircle,
  Volleyball,
  Users,
} from "lucide-react";

const eventCategories = [
  {
    title: "Industrial Visits",
    description: "Explore real-world industrial facilities and manufacturing processes.",
    icon: <Factory className="w-6 h-6" />,
  },
  {
    title: "Industrial Lectures",
    description: "Learn from industry experts and gain practical insights.",
    icon: <Mic2 className="w-6 h-6" />,
  },
  {
    title: "Competitions",
    description: "Challenge yourself in technical and creative competitions.",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    title: "Quizzes",
    description: "Test your knowledge in fun and engaging quiz sessions.",
    icon: <HelpCircle className="w-6 h-6" />,
  },
  {
    title: "Sports Tournaments",
    description: "Participate in sports events and build team spirit.",
    icon: <Volleyball className="w-6 h-6" />,
  },
];

const cardClass =
  "group bg-muted/50 border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]";

const Events = () => {
  return (
    <Layout>
      <PageHeader
        title="Events"
        subtitle="Explore the initiatives and activities organized by AME"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventCategories.map((category, index) => (
              <div
                key={category.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CategoryCard {...category} />
              </div>
            ))}

            {/* Student Chapters category */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <Link
                to="/events/student-chapters"
                className={`block h-full w-full text-left ${cardClass} focus:outline-none focus:ring-2 focus:ring-primary`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="heading-4 text-foreground mb-2 group-hover:text-primary transition-colors">
                  Student Chapters
                </h3>
                <p className="body-text text-sm text-muted-foreground">
                  Professional societies and technical forums at AME, IIT Tirupati.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
