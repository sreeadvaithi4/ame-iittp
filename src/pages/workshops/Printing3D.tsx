import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Printer } from "lucide-react";

const Printing3D = () => {
  return (
    <Layout>
      <PageHeader
        title="3D Printing Workshop"
        subtitle="Learn additive manufacturing and rapid prototyping"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Printer className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Coming Soon</h2>
            <p className="text-muted-foreground">
              3D Printing workshop details will be announced soon. Stay tuned for updates on 
              additive manufacturing techniques and hands-on prototyping sessions.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Printing3D;
