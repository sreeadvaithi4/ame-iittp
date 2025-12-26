import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { 
  LayoutGrid, 
  Printer, 
  Calculator, 
  PenTool, 
  Box,
  ArrowRight
} from "lucide-react";

const workshopCategories = [
  {
    id: "3d-printing",
    title: "3D Printing",
    description: "Learn additive manufacturing and rapid prototyping techniques.",
    icon: <Printer className="w-6 h-6" />,
    href: "/workshops/3d-printing",
  },
  {
    id: "matlab",
    title: "Matlab",
    description: "Master computational analysis and simulation with MATLAB.",
    icon: <Calculator className="w-6 h-6" />,
    href: "/workshops/matlab",
  },
  {
    id: "autodesk",
    title: "Autodesk",
    description: "Develop CAD skills with industry-standard Autodesk tools.",
    icon: <PenTool className="w-6 h-6" />,
    href: "/workshops/autodesk",
  },
  {
    id: "abaqus",
    title: "Abaqus",
    description: "Learn finite element analysis for engineering simulations.",
    icon: <Box className="w-6 h-6" />,
    href: "/workshops/abaqus",
  },
];

const Workshops = () => {
  return (
    <Layout>
      <PageHeader
        title="Workshops"
        subtitle="Hands-on learning for mechanical engineers"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshopCategories.map((category, index) => (
              <Link
                key={category.id}
                to={category.href}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <div className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Workshops;
