import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Calculator, PenTool, Box, ArrowRight, Code, FileText } from "lucide-react";

const workshopCategories = [
  {
    id: "matlab",
    title: "MATLAB & Simulink",
    description: "Master computational analysis and simulation with MATLAB.",
    icon: <Calculator className="w-6 h-6" />,
    href: "/workshops/matlab"
  },
  {
    id: "python",
    title: "Python",
    description: "Learn Python programming for engineering applications.",
    icon: <Code className="w-6 h-6" />,
    href: "/workshops/python"
  },
  {
    id: "latex",
    title: "LaTeX",
    description: "Professional document preparation for research and academia.",
    icon: <FileText className="w-6 h-6" />,
    href: "/workshops/latex"
  },
  {
    id: "autodesk",
    title: "AutoCAD and Fusion 360",
    description: "Develop CAD skills with industry-standard Autodesk tools.",
    icon: <PenTool className="w-6 h-6" />,
    href: "/workshops/autodesk"
  },
  {
    id: "abaqus",
    title: "Abaqus",
    description: "Learn finite element analysis for engineering simulations.",
    icon: <Box className="w-6 h-6" />,
    href: "/workshops/abaqus"
  }
];

const Workshops = () => {
  return (
    <Layout>
      <PageHeader title="Workshops" subtitle="Hands-on learning for mechanical engineers" />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopCategories.map((category, index) => (
              <Link
                key={category.id}
                to={category.href}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="group bg-muted/50 border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-in-up hover:scale-[1.02]"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
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
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
