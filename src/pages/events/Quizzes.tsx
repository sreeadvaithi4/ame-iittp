import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { HelpCircle } from "lucide-react";

const Quizzes = () => {
  return (
    <Layout>
      <PageHeader
        title="Quizzes"
        subtitle="Test your engineering knowledge"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <HelpCircle className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-muted-foreground">
              Stay tuned for upcoming technical quizzes and knowledge competitions. 
              Challenge yourself and learn while having fun with fellow students.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quizzes;
