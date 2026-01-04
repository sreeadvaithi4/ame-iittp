interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="bg-secondary py-10 md:py-14">
      <div className="container-section text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 animate-fade-in">{title}</h1>
        <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;