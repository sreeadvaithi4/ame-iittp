import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import matlabWorkshopImage from "@/assets/events/matlab-workshop-new.png";

const MatlabWorkshop = () => {
  return (
    <Layout>
      <PageHeader
        title="MATLAB Workshop"
        subtitle="Hands-on learning for computational analysis"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          {/* Featured Workshop */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg mb-12">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto min-h-[300px]">
                <img 
                  src={matlabWorkshopImage} 
                  alt="Hands-on Workshop on MATLAB" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r" />
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-medium">Upcoming Workshop</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Hands-on Workshop on MATLAB
                </h3>
                <p className="text-muted-foreground mb-6">
                  Master computational analysis and simulation with industry-standard MATLAB tools. 
                  Learn practical applications for mechanical engineering problems including data analysis, 
                  algorithm development, and model creation.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium">Second Week of January 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Duration: TBA</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>IIT Tirupati Campus</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="w-5 h-5 text-primary" />
                    <span>Open to all students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">What You'll Learn</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>MATLAB fundamentals and programming basics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Data visualization and analysis techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Numerical methods for engineering problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Simulink basics for system modeling</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Prerequisites</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Basic understanding of mathematics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Interest in computational tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Laptop with MATLAB installed (trial version works)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MatlabWorkshop;
