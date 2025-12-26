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
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <Sparkles className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-muted-foreground">
              Stay tuned for photos and memories from freshers' events. 
              Relive the excitement of welcoming new batches to the 
              mechanical engineering family.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Freshers;
