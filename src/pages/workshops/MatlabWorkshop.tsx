import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Calculator } from "lucide-react";

const MatlabWorkshop = () => {
  return (
    <Layout>
      <PageHeader
        title="MATLAB Workshop"
        subtitle="Master computational analysis and simulation with MATLAB"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <Calculator className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-muted-foreground">
              Stay tuned for upcoming MATLAB workshops. Details will be announced here soon.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MatlabWorkshop;
