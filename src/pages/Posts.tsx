import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import InstagramPost from "@/components/shared/InstagramPost";
import researchScholarsDayImage from "@/assets/events/research-scholars-day.jpeg";
import matlabCert1 from "@/assets/articles/matlab-cert-1.png";
import matlabCert2 from "@/assets/articles/matlab-cert-2.png";
import matlabAudience1 from "@/assets/articles/matlab-audience-1.png";
import matlabPresenter from "@/assets/articles/matlab-presenter.png";
import matlabAudience2 from "@/assets/articles/matlab-audience-2.png";

const posts = [
  {
    id: 1,
    image: researchScholarsDayImage,
    caption: "Research Scholar Day, 2026",
    date: "6th January 2026",
  },
  {
    id: 2,
    images: [matlabCert1, matlabCert2, matlabAudience1, matlabPresenter, matlabAudience2],
    caption: "MATLAB Workshop - Hands-on Sessions & Certificate Distribution",
    date: "January 2026",
  },
];

const Posts = () => {
  return (
    <Layout>
      <PageHeader
        title="Articles"
        subtitle="Stay updated with AME's latest announcements and event highlights"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {posts.map((post) => (
                <InstagramPost
                  key={post.id}
                  image={'image' in post ? post.image : undefined}
                  images={'images' in post ? post.images : undefined}
                  caption={post.caption}
                  date={post.date}
                />
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-card border border-border rounded-xl p-12 animate-fade-in">
                <h2 className="heading-4 text-foreground mb-4">Coming Soon</h2>
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
