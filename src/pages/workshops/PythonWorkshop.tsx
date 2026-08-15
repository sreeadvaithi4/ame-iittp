import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Calendar, Clock, MapPin, User, ExternalLink } from "lucide-react";
import pythonPoster from "@/assets/events/python-workshop-2026.jpeg.asset.json";

const REGISTRATION_LINK = "https://forms.gle/842o8eFnQu8E23L6A";

const PythonWorkshop = () => {
  return (
    <Layout>
      <PageHeader
        title="Python Workshop"
        subtitle="Presented by the Association of Mechanical Engineers, IIT Tirupati"
      />

      <section className="py-8 md:py-12 bg-background">
        <div className="container-section">
          <div className="bg-muted/50 border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0 items-start">
              {/* Poster */}
              <div className="relative h-[360px] md:h-[520px]">
                <img
                  src={pythonPoster.url}
                  alt="Workshop on Python – August 16th 2026, AB2 - CR104"
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
                  Workshop on Python
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  The Association of Mechanical Engineers, IIT Tirupati presents a
                  hands-on workshop on Python.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm">August 16th, 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">3:00 PM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">AB2 - CR104</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <User className="w-4 h-4 text-primary" />
                    <span className="text-sm">Instructor: Arunagiri R E – 8122021290</span>
                  </div>
                </div>

                {/* Register Button */}
                <div className="mt-6">
                  <a
                    href={REGISTRATION_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Register Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
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
