import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Briefcase, Target, FileText, Users, CheckCircle, BookOpen } from "lucide-react";

const topics = [
  "Resume and CV building strategies",
  "Interview preparation techniques",
  "LinkedIn profile optimization",
  "Industry networking tips",
  "Internship search strategies",
  "Technical and HR round preparation"
];

const benefits = [
  "Learn from experienced seniors and alumni",
  "Get personalized feedback on your resume",
  "Mock interview practice sessions",
  "Industry insights and placement trends"
];

const InternshipGuidance = () => {
  return (
    <Layout>
      <PageHeader
        title="Guidance on Internship and Placement Preparation"
        subtitle="Career preparation resources for mechanical engineers"
      />

      <section className="py-8 md:py-12 bg-background">
        <div className="container-section">
          {/* Main Content */}
          <div className="bg-muted/50 border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8">
            <div className="flex items-center gap-3 text-primary mb-6">
              <Briefcase className="w-8 h-8" />
              <h3 className="text-2xl font-bold text-foreground">
                Career Preparation Program
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-3xl">
              The Association of Mechanical Engineers provides comprehensive guidance for students 
              preparing for internships and placements. Our program includes workshops, mentorship 
              sessions, and resources to help you succeed in your career journey.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-background border border-border rounded-xl p-5 hover:shadow-md transition-all">
                <Target className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Goal Setting</h4>
                <p className="text-sm text-muted-foreground">Define your career objectives and create a roadmap for success.</p>
              </div>
              <div className="bg-background border border-border rounded-xl p-5 hover:shadow-md transition-all">
                <FileText className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Resume Building</h4>
                <p className="text-sm text-muted-foreground">Craft compelling resumes that stand out to recruiters.</p>
              </div>
              <div className="bg-background border border-border rounded-xl p-5 hover:shadow-md transition-all">
                <Users className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Mock Interviews</h4>
                <p className="text-sm text-muted-foreground">Practice with real interview scenarios and get feedback.</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground italic">
              Stay tuned for upcoming sessions and workshops. Details will be announced soon!
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Topics Covered */}
            <div className="bg-muted/50 border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
              <div className="flex items-center gap-2 text-primary mb-4">
                <BookOpen className="w-5 h-5" />
                <h4 className="text-lg font-semibold">Topics Covered</h4>
              </div>
              <ul className="space-y-3">
                {topics.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-muted/50 border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
              <div className="flex items-center gap-2 text-primary mb-4">
                <CheckCircle className="w-5 h-5" />
                <h4 className="text-lg font-semibold">Benefits</h4>
              </div>
              <ul className="space-y-3">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InternshipGuidance;
