import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const PythonWorkshop = () => {
  return (
    <Layout>
      <PageHeader
        title="Python Workshop"
        subtitle="Hands-on learning with Python programming"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          {/* Featured Workshop */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg mb-12">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Placeholder Image */}
              <div className="relative h-64 md:h-auto min-h-[300px] bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🐍</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Python Workshop</h3>
                  <p className="text-muted-foreground">Coming Soon</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-medium">Upcoming Workshop</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Python – Hands-on Workshop
                </h3>
                <p className="text-muted-foreground mb-6">
                  Learn Python programming from scratch and apply it to solve engineering problems. 
                  This workshop covers Python fundamentals, data analysis with NumPy and Pandas, 
                  visualization with Matplotlib, and automation scripts for engineering tasks.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>To Be Announced</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Duration: 2 Days</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>IIT Tirupati Campus</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="w-5 h-5 text-primary" />
                    <span>Open to all ME students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary/50 border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">What You'll Learn</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Python fundamentals and programming basics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Data analysis with NumPy and Pandas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Data visualization with Matplotlib
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Automation scripts for engineering tasks
                </li>
              </ul>
            </div>
            
            <div className="bg-secondary/50 border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Prerequisites</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  No prior programming experience required
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Basic understanding of mathematics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Laptop with Python installed (installation help provided)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PythonWorkshop;
