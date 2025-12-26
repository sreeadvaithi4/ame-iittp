import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Printer } from "lucide-react";

const ThreeDPrinting = () => {
  return (
    <Layout>
      <PageHeader
        title="3D Printing Workshop"
        subtitle="Learn additive manufacturing and rapid prototyping"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <Printer className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-muted-foreground">
              Stay tuned for upcoming 3D Printing workshops where you'll learn 
              additive manufacturing techniques, rapid prototyping, and hands-on 
              experience with industry-standard 3D printers.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThreeDPrinting;
