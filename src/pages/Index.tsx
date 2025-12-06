import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import FacultyCard from "@/components/shared/FacultyCard";
import { 
  Lightbulb, 
  Factory, 
  Users, 
  GraduationCap,
  ArrowRight,
  Calendar,
  Wrench,
  UserCircle,
  Camera
} from "lucide-react";

const facultyMembers = [
  {
    name: "Prof. Govind Narayan Sahu",
    designation: "Faculty Member, Department of Mechanical Engineering, IIT Tirupati",
    quote: "AME provides a vibrant platform for students to learn beyond the classroom.",
  },
  {
    name: "Dr. Abir Dutta",
    designation: "Faculty Member, Department of Mechanical Engineering, IIT Tirupati",
    quote: "The association bridges the gap between theoretical knowledge and practical applications.",
  },
  {
    name: "Dr. Mohd Furquan",
    designation: "Faculty Member, Department of Mechanical Engineering, IIT Tirupati",
    quote: "AME nurtures future leaders in the field of mechanical engineering.",
  },
];

const highlights = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Technical Excellence",
    description: "Hands-on workshops and technical sessions",
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: "Industry Exposure",
    description: "Industrial visits and expert lectures",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community & Networking",
    description: "Building lasting professional connections",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Holistic Development",
    description: "Balanced growth beyond academics",
  },
];

const quickLinks = [
  { name: "Events", href: "/events", icon: <Calendar className="w-6 h-6" /> },
  { name: "Workshops", href: "/workshops", icon: <Wrench className="w-6 h-6" /> },
  { name: "Team", href: "/team", icon: <UserCircle className="w-6 h-6" /> },
  { name: "Life at AME", href: "/life-at-ame", icon: <Camera className="w-6 h-6" /> },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-secondary via-background to-secondary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-foreground rounded-full blur-3xl" />
        </div>

        <div className="container-section relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-foreground mb-6 animate-fade-in">
              Association of{" "}
              <span className="text-primary">Mechanical Engineers</span>,<br />
              IIT Tirupati
            </h1>
            <p className="body-large mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Fostering growth, learning, and community for mechanical engineers
            </p>
            <p className="text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Explore our events, workshops, and campus life
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild variant="hero" size="lg">
                <Link to="/events">
                  Explore Events
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/team">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-muted-foreground rounded-full" />
          </div>
        </div>
      </section>

      {/* Vision & Purpose Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-foreground mb-8">
              Our <span className="text-primary">Vision</span> and Purpose
            </h2>
            <p className="body-large leading-relaxed mb-12">
              The Association of Mechanical Engineers at IIT Tirupati plays a crucial
              role in fostering a comprehensive and well-rounded educational experience
              for mechanical engineering students. Through its diverse portfolio of
              initiatives, including technical workshops, industrial visits, expert
              lectures, social engagements, and sports tournaments, AME consistently
              works to enrich students' academic and professional development. By
              offering these multifaceted opportunities, the association ensures that
              students are equipped with the technical skills, practical insights, and
              professional networks necessary to excel in their future careers.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Messages Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container-section">
          <h2 className="heading-2 text-foreground text-center mb-4">
            Messages from the <span className="text-primary">Faculty</span>
          </h2>
          <p className="body-text text-center mb-12 max-w-2xl mx-auto">
            Words of wisdom and encouragement from our esteemed faculty members
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Quick Links Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          <h2 className="heading-2 text-foreground text-center mb-4">
            Explore <span className="text-primary">AME</span>
          </h2>
          <p className="body-text text-center mb-12 max-w-2xl mx-auto">
            Quick access to everything AME has to offer
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className="group flex flex-col items-center p-8 bg-card border-2 border-border rounded-xl card-hover hover:border-primary animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {link.icon}
                </div>
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
