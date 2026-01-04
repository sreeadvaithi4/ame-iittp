import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Calendar, Clock, MapPin, Users, ExternalLink, BookOpen, CheckCircle } from "lucide-react";
import matlabWorkshopImage from "@/assets/events/matlab-workshop-new.png";
const whatYouWillLearn = ["MATLAB basics and workspace navigation", "Vectors, matrices, and array operations", "2D and 3D plotting and visualization", "Simulink fundamentals and block diagrams", "Engineering problem-solving applications", "Data analysis and numerical methods"];
const prerequisites = ["Basic understanding of mathematics", "No prior programming experience required", "Laptop with MATLAB installed (trial version works)", "Enthusiasm to learn!"];
const MatlabWorkshop = () => {
  return <Layout>
      <PageHeader title="MATLAB & Simulink Workshop" subtitle="Hands-on learning with industry-standard tools" />

      <section className="py-8 md:py-12 bg-background">
        <div className="container-section">
          {/* Featured Workshop - Viewport Fit */}
          <div className="bg-muted/50 border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0 items-start">
              {/* Image */}
              <div className="relative h-[300px] md:h-[400px]">
                <img src={matlabWorkshopImage} alt="MATLAB & Simulink Workshop" className="w-full h-full object-contain bg-secondary/30" />
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-medium">Upcoming Workshop</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  MATLAB  – Hands-on Workshop
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Master computational analysis and simulation with industry-standard MATLAB tools. 
                  Learn practical applications for mechanical engineering problems including 
                  numerical methods, data visualization, and engineering simulations.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm">January 10th, 2025</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">9:30 AM - 12:30 PM</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">AB2 - CR104</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">Open to all students</span>
                  </div>
                </div>

                {/* Register Button */}
                <div className="mt-6">
                  <a href="https://forms.gle/R29UZbvqKEWpV59dA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Register Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Contact */}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">Contact:</p>
                  <p className="text-sm text-foreground">Kambala Kiran Kumar - 8008409633</p>
                  <p className="text-sm text-foreground">Nandagovind J V - 7305056463</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* What You'll Learn */}
            <div className="bg-muted/50 border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
              <div className="flex items-center gap-2 text-primary mb-4">
                <BookOpen className="w-5 h-5" />
                <h4 className="text-lg font-semibold">What You'll Learn</h4>
              </div>
              <ul className="space-y-3">
                {whatYouWillLearn.map((item, index) => <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>)}
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="bg-muted/50 border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
              <div className="flex items-center gap-2 text-primary mb-4">
                <CheckCircle className="w-5 h-5" />
                <h4 className="text-lg font-semibold">Prerequisites</h4>
              </div>
              <ul className="space-y-3">
                {prerequisites.map((item, index) => <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default MatlabWorkshop;