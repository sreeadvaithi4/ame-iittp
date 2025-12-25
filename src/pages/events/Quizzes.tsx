import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { HelpCircle } from "lucide-react";

const Quizzes = () => {
  return (
    <Layout>
      <PageHeader
        title="Quizzes"
        subtitle="Test your knowledge and learn something new"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Coming Soon</h2>
            <p className="text-muted-foreground">
              Quiz details will be announced soon. Test your engineering knowledge 
              and compete for exciting prizes.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quizzes;
