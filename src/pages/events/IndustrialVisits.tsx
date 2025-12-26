import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Factory } from "lucide-react";

const IndustrialVisits = () => {
  return (
    <Layout>
      <PageHeader
        title="Industrial Visits"
        subtitle="Explore real-world engineering environments"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <Factory className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-muted-foreground">
              Stay tuned for upcoming industrial visits to manufacturing plants, 
              research facilities, and engineering companies. Experience 
              real-world applications of mechanical engineering concepts.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndustrialVisits;
