import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Lightbulb, Factory, Users, GraduationCap, ArrowRight, Calendar, Wrench, UserCircle, Camera, Mail, User } from "lucide-react";
import abirDuttaImage from "@/assets/faculty/abir-dutta.png";
import govindSahuImage from "@/assets/faculty/govind-sahu.jpg";
import mohdFurquanImage from "@/assets/faculty/mohd-furquan.png";
import EventCard from "@/components/shared/EventCard";
import researchScholarsDayImage from "@/assets/events/research-scholars-day.jpeg";

const facultyMembers = [{
  name: "Dr. Govind Narayan Sahu",
  designation: "Faculty Member, Dept. of Mechanical Engineering",
  email: "govinds@iittp.ac.in",
  image: govindSahuImage
}, {
  name: "Dr. Abir Dutta",
  designation: "Faculty Member, Dept. of Mechanical Engineering",
  email: "abir.dutta@iittp.ac.in",
  image: abirDuttaImage
}, {
  name: "Dr. Mohd Furquan",
  designation: "Faculty Member, Dept. of Mechanical Engineering",
  email: "mfurquan@iittp.ac.in",
  image: mohdFurquanImage
}];

const highlights = [{
  icon: <Lightbulb className="w-6 h-6" />,
  title: "Technical Excellence",
  description: "Hands-on workshops and technical sessions"
}, {
  icon: <Factory className="w-6 h-6" />,
  title: "Industry Exposure",
  description: "Industrial visits and expert lectures"
}, {
  icon: <Users className="w-6 h-6" />,
  title: "Community & Networking",
  description: "Building lasting professional connections"
}, {
  icon: <GraduationCap className="w-6 h-6" />,
  title: "Holistic Development",
  description: "Balanced growth beyond academics"
}];

const quickLinks = [{
  name: "Events",
  href: "/events",
  icon: <Calendar className="w-6 h-6" />
}, {
  name: "Workshops",
  href: "/workshops",
  icon: <Wrench className="w-6 h-6" />
}, {
  name: "Team",
  href: "/team",
  icon: <UserCircle className="w-6 h-6" />
}, {
  name: "Life at AME",
  href: "/life-at-ame",
  icon: <Camera className="w-6 h-6" />
}];

const Index = () => {
  return <Layout>
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
              <span className="text-primary hover-text-zoom">Mechanical Engineers</span>,<br />
              IIT Tirupati
            </h1>
            <p className="body-large mb-4 animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
              Fostering growth, learning, and community for mechanical engineers
            </p>
            <p className="text-muted-foreground mb-8 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              Explore our events, workshops, and campus life
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
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
      </section>

      {/* Upcoming Events Section */}
      <section className="relative py-20 md:py-28 bg-secondary overflow-hidden">
        {/* Blueprint background animation */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blueprint-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
              </pattern>
              <pattern id="blueprint-circles" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
            <rect width="100%" height="100%" fill="url(#blueprint-circles)" className="animate-[pulse_8s_ease-in-out_infinite]" />
          </svg>
        </div>

        <div className="container-section relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-2">
              UPCOMING EVENTS
            </h2>
            <div className="w-20 h-0.5 bg-primary/50 mx-auto" />
          </div>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <EventCard
              title="Research Scholar Day – ME Department"
              description="UG students and PG research scholars will present their work"
              date="6th January 2026"
              image={researchScholarsDayImage}
              featured
            />
            <EventCard
              title="Hands-on Workshop on MATLAB"
              date="Second Week of January 2026"
              href="/workshops"
            />
          </div>
        </div>
      </section>

      {/* Vision & Purpose Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-foreground mb-8">
              Our <span className="text-primary hover-text-zoom">Vision</span> and <span className="hover-text-zoom">Purpose</span>
            </h2>
            <p className="body-large leading-relaxed mb-12">
              The Association of <span className="hover-text-zoom">Mechanical Engineers</span> at IIT Tirupati plays a crucial
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
              {highlights.map((item, index) => <div key={item.title} className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors animate-fade-in-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 hover-text-zoom">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Members Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container-section">
          <h2 className="heading-2 text-foreground text-center mb-4">
            Our <span className="text-primary hover-text-zoom">Faculty</span> Members
          </h2>
          <p className="body-text text-center mb-12 max-w-2xl mx-auto">
            Meet our esteemed faculty members guiding AME initiatives
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {facultyMembers.map((faculty, index) => <div key={faculty.name} className="bg-card border border-border rounded-xl p-6 text-center animate-fade-in-up hover:border-primary/30 transition-colors" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-4 mx-auto overflow-hidden border-4 border-primary/20">
                  {faculty.image ? <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover" /> : <User className="w-12 h-12 text-muted-foreground" />}
                </div>

                {/* Info */}
                <h3 className="text-lg font-semibold text-foreground mb-1 hover-text-zoom">
                  {faculty.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {faculty.designation}
                </p>

                {/* Email Icon */}
                <a href={`mailto:${faculty.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors" title={`Email ${faculty.name}`}>
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Contact</span>
                </a>
              </div>)}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          <h2 className="heading-2 text-foreground text-center mb-4">
            Explore <span className="text-primary hover-text-zoom">AME</span>
          </h2>
          <p className="body-text text-center mb-12 max-w-2xl mx-auto">
            Quick access to everything AME has to offer
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => <Link key={link.name} to={link.href} className="group flex flex-col items-center p-8 bg-card border-2 border-border rounded-xl card-hover hover:border-primary animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {link.icon}
                </div>
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors hover-text-zoom">
                  {link.name}
                </span>
              </Link>)}
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;
