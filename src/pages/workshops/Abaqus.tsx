import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Box } from "lucide-react";

const Abaqus = () => {
  return (
    <Layout>
      <PageHeader
        title="Abaqus Workshop"
        subtitle="Learn finite element analysis for engineering simulations"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <Box className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-muted-foreground">
              Stay tuned for upcoming Abaqus workshops where you'll learn 
              finite element analysis (FEA), structural simulations, and 
              advanced engineering analysis techniques.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Abaqus;
