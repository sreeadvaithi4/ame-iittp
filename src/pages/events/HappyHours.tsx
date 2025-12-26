import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { PartyPopper } from "lucide-react";

const HappyHours = () => {
  return (
    <Layout>
      <PageHeader
        title="Happy Hours"
        subtitle="Relax and connect with peers"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <PartyPopper className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-muted-foreground">
              Stay tuned for upcoming happy hours and social events. Take a break 
              from academics and enjoy quality time with your fellow students.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HappyHours;
