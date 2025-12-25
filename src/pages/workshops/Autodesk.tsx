import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { PenTool } from "lucide-react";

const Autodesk = () => {
  return (
    <Layout>
      <PageHeader
        title="Autodesk Workshop"
        subtitle="Develop CAD skills with industry-standard tools"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <PenTool className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Coming Soon</h2>
            <p className="text-muted-foreground">
              Autodesk workshop details will be announced soon. Learn industry-standard CAD tools 
              for design and engineering applications.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Autodesk;
