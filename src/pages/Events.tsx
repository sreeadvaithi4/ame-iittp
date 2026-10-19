import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import CategoryCard from "@/components/shared/CategoryCard";
import {
  Factory,
  Mic2,
  Trophy,
  HelpCircle,
  Volleyball,
  Users,
  Flame,
  Atom,
  Layers,
  Cog,
  ExternalLink,
  ArrowRight,
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

const studentChapters = [
  {
    name: "Foundry 4.0 Students Activity Center – IIT Tirupati",
    icon: <Flame className="w-6 h-6" />,
    description: [
      "The Foundry 4.0 Students Activity Center at IIT Tirupati provides a platform for students interested in foundry technology, casting, manufacturing, automation, digitalization, and Industry 4.0.",
      "The center connects students with foundry industries, researchers, academicians, and professional organizations through technical seminars, expert lectures, workshops, industrial visits, quizzes, student projects, and hands-on learning activities. It helps students understand modern foundry practices and the transition towards smart, sustainable, and digitally enabled manufacturing.",
    ],
    url: "https://am2t.in/foundry-4-0-student-activity-center/",
  },
  {
    name: "ASM International – Material Advantage Student Chapter, IIT Tirupati",
    icon: <Atom className="w-6 h-6" />,
    description: [
      "The ASM International Material Advantage Chapter at IIT Tirupati provides students with opportunities to engage with the global materials and manufacturing community.",
      "The chapter focuses on materials science, metallurgy, manufacturing, characterization, surface engineering, composites, processing, and emerging materials technologies. It supports professional networking, conferences, technical competitions, research interaction, and career development.",
      "Material Advantage membership also offers access to benefits associated with its professional-society partners, including networking, publications, conference opportunities, and travel-grant opportunities. The chapter welcomes students, researchers, and alumni interested in materials and related engineering fields.",
    ],
    url: "https://sites.google.com/iittp.ac.in/materialsadvantageiitt/?pli=1",
  },
  {
    name: "Indian Institute of Metals (IIM) Student Chapter – IIT Tirupati",
    icon: <Layers className="w-6 h-6" />,
    description: [
      "The Indian Institute of Metals (IIM) Student Chapter at IIT Tirupati is a platform for students interested in metallurgy, materials engineering, metal processing, manufacturing, characterization, mechanical behaviour, and industrial applications of metals and alloys.",
      "The chapter aims to bridge classroom learning with research and industrial practice through technical talks, workshops, seminars, industry interactions, laboratory exposure, industrial visits, competitions, and student-led activities. It also provides opportunities to interact with professionals, researchers, and academicians associated with the Indian metals and materials community.",
      "The IIT Tirupati IIM Student Chapter was established in May 2026, with Dr. Ajay Kumar serving as Faculty Advisor.",
    ],
    url: null as string | null,
  },
  {
    name: "Tribology Forum – IIT Tirupati",
    icon: <Cog className="w-6 h-6" />,
    description: [
      "The Tribology Forum at IIT Tirupati brings together students and researchers interested in friction, wear, lubrication, surface engineering, tribological materials, coatings, contact mechanics, and the reliability of engineering components.",
      "The forum provides opportunities to learn from experts, discuss research problems, participate in technical presentations and workshops, and explore industrial applications of tribology in automotive, aerospace, manufacturing, energy, railway, and advanced machinery sectors.",
    ],
    url: "https://am2t.in/tribology-surface-engineering/",
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
              <a
                href="#student-chapters"
                className={`block h-full w-full text-left ${cardClass} focus:outline-none focus:ring-2 focus:ring-primary`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="heading-4 text-foreground mb-2 group-hover:text-primary transition-colors">
                  Student Chapters
                </h3>
                <p className="body-text text-sm text-muted-foreground mb-3">
                  Professional societies and technical forums at AME, IIT Tirupati.
                </p>
                <ul className="space-y-1 text-sm">
                  {studentChapters.map((c) => (
                    <li key={c.name}>
                      {c.url ? (
                        <span
                          role="link"
                          tabIndex={0}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(c.url!, "_blank", "noopener,noreferrer");
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(c.url!, "_blank", "noopener,noreferrer");
                            }
                          }}
                          className="text-primary hover:underline cursor-pointer"
                        >
                          {c.name.split(" – ")[0]}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">{c.name.split(" – ")[0]}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Student Chapters */}
      <section id="student-chapters" className="py-16 md:py-24 bg-muted/30 scroll-mt-20">
        <div className="container-section">
          <h2 className="heading-2 text-foreground text-center mb-4">
            Professional <span className="text-primary hover-text-zoom">Student Chapters</span>
          </h2>
          <p className="body-text text-center mb-10 max-w-3xl mx-auto">
            AME, IIT Tirupati encourages students to engage with professional societies and technical forums that promote knowledge sharing, research, industrial interaction, and professional development. These student chapters provide opportunities to explore specialized areas of mechanical engineering and related disciplines through technical activities, workshops, expert interactions, and collaborative learning.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentChapters.map((chapter, index) => (
              <article
                key={chapter.name}
                className={`flex flex-col animate-fade-in-up ${cardClass}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {chapter.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {chapter.name}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-5 flex-1">
                  {chapter.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {chapter.url ? (
                  <a
                    href={chapter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  >
                    Visit Official Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm">
                    Website coming soon
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
