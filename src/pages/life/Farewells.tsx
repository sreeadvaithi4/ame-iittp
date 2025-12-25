import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Heart } from "lucide-react";

const Farewells = () => {
  return (
    <Layout>
      <PageHeader
        title="Farewells"
        subtitle="Celebrating our graduates"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Coming Soon</h2>
            <p className="text-muted-foreground">
              Farewell event details and memories will be shared soon. 
              Celebrate the journey of our graduating seniors.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Farewells;
