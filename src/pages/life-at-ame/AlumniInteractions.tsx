import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { GraduationCap } from "lucide-react";

const AlumniInteractions = () => {
  return (
    <Layout>
      <PageHeader
        title="Alumni Interactions"
        subtitle="Connect with our successful alumni"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <GraduationCap className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-muted-foreground">
              Stay tuned for photos and stories from alumni interaction sessions. 
              Learn from the experiences of our successful alumni and build 
              valuable professional networks.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AlumniInteractions;
