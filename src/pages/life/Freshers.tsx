import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Sparkles } from "lucide-react";

const Freshers = () => {
  return (
    <Layout>
      <PageHeader
        title="Freshers"
        subtitle="Welcome to the AME family"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Coming Soon</h2>
            <p className="text-muted-foreground">
              Freshers event details and photos will be shared soon. 
              Stay tuned for the welcome party highlights!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Freshers;
