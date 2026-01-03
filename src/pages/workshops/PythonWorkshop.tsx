import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import pythonWorkshopImage from "@/assets/events/python-workshop.png";

const PythonWorkshop = () => {
  return (
    <Layout>
      <PageHeader
        title="Python Workshop"
        subtitle="Hands-on learning with Python programming"
      />

      <section className="py-8 md:py-12 bg-background">
        <div className="container-section">
          {/* Featured Workshop - Viewport Fit */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-0 items-start">
              {/* Image */}
              <div className="relative h-[300px] md:h-[400px]">
                <img 
                  src={pythonWorkshopImage} 
                  alt="Python Workshop" 
                  className="w-full h-full object-contain bg-secondary/30"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-medium">Upcoming Workshop</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Python – Hands-on Workshop
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Learn Python programming from scratch and apply it to solve engineering problems. 
                  This workshop covers Python fundamentals, data analysis with NumPy and Pandas, 
                  visualization with Matplotlib, and automation scripts for engineering tasks.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm">January 17th, 2025</span>
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

                {/* Contact */}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">Contact:</p>
                  <p className="text-sm text-foreground">Kambala Kiran Kumar - 8008409633</p>
                  <p className="text-sm text-foreground">Nandagovind J V - 7305056463</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PythonWorkshop;