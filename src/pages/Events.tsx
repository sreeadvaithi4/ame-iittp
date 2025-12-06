import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import CategoryCard from "@/components/shared/CategoryCard";
import { 
  Factory, 
  Mic2, 
  Trophy, 
  HelpCircle, 
  Volleyball, 
  PartyPopper 
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
  {
    title: "Happy Hours",
    description: "Unwind and connect with fellow students in relaxed settings.",
    icon: <PartyPopper className="w-6 h-6" />,
  },
];

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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
