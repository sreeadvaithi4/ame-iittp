interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="container-section text-center">
        <h1 className="heading-1 text-foreground mb-4 animate-fade-in">{title}</h1>
        <p className="body-large max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
