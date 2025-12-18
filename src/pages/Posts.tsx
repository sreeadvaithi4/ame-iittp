import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { ImageIcon } from "lucide-react";

const Posts = () => {
  return (
    <Layout>
      <PageHeader
        title="Posts"
        subtitle="Stay updated with AME's latest announcements and event highlights"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card border border-border rounded-xl p-12 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <ImageIcon className="w-10 h-10 text-primary" />
              </div>
              <h2 className="heading-4 text-foreground mb-4">
                Coming Soon
              </h2>
              <p className="body-text max-w-md mx-auto">
                We're preparing exciting content for you! Check back soon for updates on club inauguration, upcoming events, and more activities from AME.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Posts;
