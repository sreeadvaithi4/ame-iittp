import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Heart } from "lucide-react";

const Farewells = () => {
  return (
    <Layout>
      <PageHeader
        title="Farewells"
        subtitle="Celebrating our graduating seniors"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <Heart className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-muted-foreground">
              Stay tuned for photos and memories from farewell events. 
              Celebrate the achievements of our graduating seniors and 
              wish them success in their future endeavors.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Farewells;
