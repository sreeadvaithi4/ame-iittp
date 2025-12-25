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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopCategories.map((category, index) => (
              <div
                key={category.title}
                id={category.id}
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
