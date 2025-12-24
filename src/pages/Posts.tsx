import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import InstagramPost from "@/components/shared/InstagramPost";
import researchScholarsDayImage from "@/assets/events/research-scholars-day.jpeg";

const posts = [
  {
    id: 1,
    image: researchScholarsDayImage,
    caption: "Research Scholar Day, 2026",
    date: "6th January 2026",
  },
];

const Posts = () => {
  return (
    <Layout>
      <PageHeader
        title="Posts"
        subtitle="Stay updated with AME's latest announcements and event highlights"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {posts.map((post) => (
                <InstagramPost
                  key={post.id}
                  image={post.image}
                  caption={post.caption}
                  date={post.date}
                />
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-card border border-border rounded-xl p-12 animate-fade-in">
                <h2 className="heading-4 text-foreground mb-4">
                  Coming Soon
                </h2>
                <p className="body-text max-w-md mx-auto">
                  We're preparing exciting content for you! Check back soon for updates.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Posts;
