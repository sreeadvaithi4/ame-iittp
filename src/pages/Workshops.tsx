import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import CategoryCard from "@/components/shared/CategoryCard";
import { 
  LayoutGrid, 
  Printer, 
  Calculator, 
  PenTool, 
  Box 
} from "lucide-react";

const workshopCategories = [
  {
    title: "All Workshops",
    description: "Browse all available workshops and training sessions.",
    icon: <LayoutGrid className="w-6 h-6" />,
  },
  {
    title: "3D Printing",
    description: "Learn additive manufacturing and rapid prototyping techniques.",
    icon: <Printer className="w-6 h-6" />,
  },
  {
    title: "Matlab",
    description: "Master computational analysis and simulation with MATLAB.",
    icon: <Calculator className="w-6 h-6" />,
  },
  {
    title: "Autodesk",
    description: "Develop CAD skills with industry-standard Autodesk tools.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Abaqus",
    description: "Learn finite element analysis for engineering simulations.",
    icon: <Box className="w-6 h-6" />,
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopCategories.map((category, index) => (
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

export default Workshops;
