import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Lightbulb, Factory, Users, GraduationCap, ArrowRight, Calendar, Wrench, UserCircle, Camera, Mail, User, FileText, MapPin, Clock, ExternalLink } from "lucide-react";
import abirDuttaImage from "@/assets/faculty/abir-dutta.png";
import govindSahuImage from "@/assets/faculty/govind-sahu.jpg";
import mohdFurquanImage from "@/assets/faculty/mohd-furquan.png";
import matlabWorkshopImage from "@/assets/events/matlab-workshop-new.png";
import pythonWorkshopImage from "@/assets/events/python-workshop.png";
import latexWorkshopImage from "@/assets/events/latex-workshop.png";
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
  href: "/articles",
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
const upcomingEvents = [{
  id: 1,
  title: "MATLAB Workshop",
  description: "Master computational analysis and simulation with industry-standard MATLAB tools.",
  date: "January 10th",
  time: "9:30 AM - 12:30 PM",
  venue: "AB2 - CR104",
  image: matlabWorkshopImage,
  href: "/workshops/matlab",
  registerLink: "https://forms.gle/R29UZbvqKEWpV59dA"
}, {
  id: 2,
  title: "Python Workshop",
  description: "Learn Python programming from scratch and apply it to solve engineering problems.",
  date: "January 17th",
  time: "9:30 AM - 12:30 PM",
  venue: "AB2 - CR104",
  image: pythonWorkshopImage,
  href: "/workshops/python",
  registerLink: "https://forms.gle/842o8eFnQu8E23L6A"
}, {
  id: 3,
  title: "Latex Workshop",
  description: "Professional document preparation for research papers, thesis, and reports.",
  date: "January 24th",
  time: "9:30 AM - 12:30 PM",
  venue: "AB2 - CR104",
  image: latexWorkshopImage,
  href: "/workshops/latex",
  registerLink: "https://forms.gle/LaTeXWorkshop2025"
}];
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-secondary via-background to-secondary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-foreground rounded-full blur-3xl" />
        </div>

        <div className="container-section relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-secondary">
              <span className="whitespace-nowrap text-primary text-6xl">Association of Mechanical Engineers</span>,<br />
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
              <Button asChild variant="hero" size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link to="/events">
                  Explore Events
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link to="/team">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Purpose Section */}
      <section className="py-16 md:py-20 bg-background">
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
              {highlights.map((item, index) => <div key={item.title} className="p-6 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up hover:scale-105 hover:shadow-md" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
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

      {/* Upcoming Events - Card Layout */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-section">
          <h2 className="heading-2 text-foreground text-center mb-4">
            Upcoming <span className="text-primary hover-text-zoom">Events</span>
          </h2>
          <p className="body-text text-center mb-10 max-w-2xl mx-auto">
            Don't miss out on our latest workshops and events
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {upcomingEvents.map(event => <div key={event.id} className="group bg-muted/50 border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                {/* Image with Date Badge */}
                <Link to={event.href} className="block relative aspect-[3/4] overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  {/* Date Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-sm font-semibold shadow-lg">
                    {event.date}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5">
                  <Link to={event.href}>
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span>{event.venue}</span>
                    </div>
                  </div>

                  {/* Register Button */}
                  <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-md w-full justify-center" onClick={e => e.stopPropagation()}>
                    Register Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Faculty Members Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-section">
          <h2 className="heading-2 text-center mb-4 text-primary-foreground">
            Our <span className="hover-text-zoom text-primary-foreground">Faculty</span>
          </h2>
          <p className="body-text text-center mb-12 max-w-2xl mx-auto text-popover">
            Meet our esteemed faculty members guiding AME initiatives
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {facultyMembers.map((faculty, index) => <div key={faculty.name} className="bg-white border border-border rounded-xl p-6 md:p-8 text-center animate-fade-in-up hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Avatar */}
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-secondary flex items-center justify-center mb-4 md:mb-6 mx-auto overflow-hidden border-4 border-primary/20 transition-all duration-300 hover:border-primary">
                  {faculty.image ? <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover" /> : <User className="w-12 h-12 md:w-16 md:h-16 text-muted-foreground" />}
                </div>

                {/* Info */}
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 hover-text-zoom">
                  {faculty.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-4">
                  {faculty.designation}
                </p>

                {/* LinkedIn and Email Icons */}
                <div className="flex items-center justify-center gap-3">
                  <a href={`https://www.linkedin.com/in/${faculty.name.toLowerCase().replace(/\s+/g, '-').replace(/dr\.-/g, '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110" title="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href={`mailto:${faculty.email}`} className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110" title={`Email ${faculty.name}`}>
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-section">
          <h2 className="heading-2 text-foreground text-center mb-4">
            Explore <span className="text-primary hover-text-zoom">AME</span>
          </h2>
          <p className="body-text text-center mb-12 max-w-2xl mx-auto">
            Quick access to everything AME has to offer
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
            {quickLinks.map((link, index) => <Link key={link.name} to={link.href} className="group flex flex-col items-center p-6 md:p-8 bg-muted/50 border-2 border-border rounded-xl card-hover hover:border-primary animate-fade-in-up transition-all duration-300 hover:scale-105" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 md:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {link.icon}
                </div>
                <span className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors hover-text-zoom">
                  {link.name}
                </span>
              </Link>)}
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;