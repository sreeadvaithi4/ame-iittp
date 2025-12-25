import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Building2 } from "lucide-react";

const IndustrialVisits = () => {
  return (
    <Layout>
      <PageHeader
        title="Industrial Visits"
        subtitle="Experience real-world engineering facilities"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Coming Soon</h2>
            <p className="text-muted-foreground">
              Industrial visit details will be announced soon. Get ready to explore 
              manufacturing plants and engineering facilities.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndustrialVisits;
