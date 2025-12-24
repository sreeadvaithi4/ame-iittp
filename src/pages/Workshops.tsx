import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import CategoryCard from "@/components/shared/CategoryCard";
import { 
  LayoutGrid, 
  Printer, 
  Calculator, 
  PenTool, 
  Box,
  Calendar
} from "lucide-react";
import matlabWorkshopImage from "@/assets/events/matlab-workshop.png";

const workshopCategories = [
  {
    id: "all",
    title: "All Workshops",
    description: "Browse all available workshops and training sessions.",
    icon: <LayoutGrid className="w-6 h-6" />,
  },
  {
    id: "3d-printing",
    title: "3D Printing",
    description: "Learn additive manufacturing and rapid prototyping techniques.",
    icon: <Printer className="w-6 h-6" />,
  },
  {
    id: "matlab",
    title: "Matlab",
    description: "Master computational analysis and simulation with MATLAB.",
    icon: <Calculator className="w-6 h-6" />,
  },
  {
    id: "autodesk",
    title: "Autodesk",
    description: "Develop CAD skills with industry-standard Autodesk tools.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    id: "abaqus",
    title: "Abaqus",
    description: "Learn finite element analysis for engineering simulations.",
    icon: <Box className="w-6 h-6" />,
  },
];

const Workshops = () => {
  const location = useLocation();
  const [highlightedSection, setHighlightedSection] = useState<string | null>(null);

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.slice(1);
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          setHighlightedSection(sectionId);
          // Remove highlight after animation
          setTimeout(() => setHighlightedSection(null), 2000);
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <Layout>
      <PageHeader
        title="Workshops"
        subtitle="Hands-on learning for mechanical engineers"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopCategories.map((category, index) => (
              <div
                key={category.title}
                id={category.id}
                className={`animate-fade-in-up scroll-mt-24 transition-all duration-500 ${
                  highlightedSection === category.id 
                    ? "ring-2 ring-primary ring-offset-4 ring-offset-background rounded-xl" 
                    : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CategoryCard {...category} />
              </div>
            ))}
          </div>

          {/* MATLAB Workshop Feature Section */}
          <div
            id="matlab-workshop"
            className={`mt-16 transition-all duration-500 ${
              highlightedSection === "matlab" 
                ? "ring-2 ring-primary ring-offset-4 ring-offset-background rounded-2xl" 
                : ""
            }`}
          >
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={matlabWorkshopImage} 
                    alt="Hands-on Workshop on MATLAB" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r" />
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-medium">Upcoming Workshop</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Hands-on Workshop on MATLAB
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Master computational analysis and simulation with industry-standard MATLAB tools. 
                    Learn practical applications for mechanical engineering problems.
                  </p>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Second Week of January 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Workshops;
