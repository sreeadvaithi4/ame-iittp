import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Lightbulb, Factory, Users, GraduationCap, ArrowRight, Calendar, Wrench, UserCircle, Camera, Mail, User, FileText, ChevronLeft, ChevronRight, MapPin, Clock } from "lucide-react";
import abirDuttaImage from "@/assets/faculty/abir-dutta.png";
import govindSahuImage from "@/assets/faculty/govind-sahu.jpg";
import mohdFurquanImage from "@/assets/faculty/mohd-furquan.png";
import researchScholarsDayImage from "@/assets/events/research-scholars-day.jpeg";
import matlabWorkshopImage from "@/assets/events/matlab-workshop-new.png";

const facultyMembers = [{
  name: "Dr. Govind Narayan Sahu",
  designation: "Faculty, Department of Mechanical Engineering",
  email: "govinds@iittp.ac.in",
  image: govindSahuImage
}, {
  name: "Dr. Abir Dutta",
  designation: "Faculty, Department of Mechanical Engineering",
  email: "abir.dutta@iittp.ac.in",
  image: abirDuttaImage
}, {
  name: "Dr. Mohd Furquan",
  designation: "Faculty, Department of Mechanical Engineering",
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
  name: "Articles",
  href: "/posts",
  icon: <FileText className="w-6 h-6" />
}, {
  name: "Team",
  href: "/team",
  icon: <UserCircle className="w-6 h-6" />
}, {
  name: "Life at AME",
  href: "/life-at-ame",
  icon: <Camera className="w-6 h-6" />
}];

const upcomingEvents = [
  {
    id: 1,
    title: "Research Scholar Day – ME Department",
    description: "Join us for a day celebrating research excellence in mechanical engineering. Presentations, discussions, and networking opportunities with faculty and research scholars.",
    date: "6th January 2026",
    time: "9:00 AM - 5:00 PM",
    venue: "IIT Tirupati Campus",
    image: researchScholarsDayImage,
    href: "/events"
  },
  {
    id: 2,
    title: "Hands-on Workshop on MATLAB",
    description: "Master computational analysis and simulation with industry-standard MATLAB tools. Learn practical applications for mechanical engineering problems.",
    date: "Second Week of January 2026",
    time: "2 Days Workshop",
    venue: "IIT Tirupati Campus",
    image: matlabWorkshopImage,
    href: "/workshops/matlab"
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % upcomingEvents.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length);
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

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
              <span className="text-white whitespace-nowrap">Association of Mechanical Engineers</span>,<br />
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

      {/* Upcoming Events Carousel Section */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="relative h-[500px] md:h-[600px]">
          {upcomingEvents.map((event, index) => (
            <Link
              key={event.id}
              to={event.href}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
              </div>

              {/* Content */}
              <div className="relative h-full container-section flex items-center">
                <div className="max-w-2xl text-left">
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wider">Upcoming Event</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    {event.title}
                  </h2>
                  <p className="text-gray-200 text-lg mb-6 line-clamp-3">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-6 text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.preventDefault(); prevSlide(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); nextSlide(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {upcomingEvents.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.preventDefault(); setCurrentSlide(index); }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Purpose Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-foreground mb-8">
              Our <span className="text-primary hover-text-zoom cursor-default">Vision</span> and <span className="text-primary hover-text-zoom cursor-default">Purpose</span>
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
            Our <span className="text-primary hover-text-zoom">Faculty</span>
          </h2>
          <p className="body-text text-center mb-12 max-w-2xl mx-auto">
            Meet our esteemed faculty members guiding AME initiatives
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {facultyMembers.map((faculty, index) => <div key={faculty.name} className="bg-card border border-border rounded-xl p-8 text-center animate-fade-in-up hover:border-primary/30 transition-colors" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Avatar */}
                <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center mb-6 mx-auto overflow-hidden border-4 border-primary/20">
                  {faculty.image ? <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover" /> : <User className="w-16 h-16 text-muted-foreground" />}
                </div>

                {/* Info */}
                <h3 className="text-xl font-semibold text-foreground mb-2 hover-text-zoom">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
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
