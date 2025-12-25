import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import dhanumjay from "@/assets/team/dhanumjay.webp";
import kiranKumar from "@/assets/team/kiran-kumar.jpg";
import nandagovind from "@/assets/team/nandagovind.jpg";
import pramodKumar from "@/assets/team/pramod-kumar.jpg";
import pranavesh from "@/assets/team/pranavesh.jpeg";
import prithivi from "@/assets/team/prithivi.png";

const studentReps = [
  {
    name: "Dhanumjay",
    role: "President",
    image: dhanumjay,
    email: "me22b015@iittp.ac.in",
  },
  {
    name: "Kiran Kumar",
    role: "Vice President",
    image: kiranKumar,
    email: "me22b016@iittp.ac.in",
  },
  {
    name: "Nandagovind",
    role: "Secretary",
    image: nandagovind,
    email: "me22b017@iittp.ac.in",
  },
  {
    name: "Pramod Kumar",
    role: "Treasurer",
    image: pramodKumar,
    email: "me22b018@iittp.ac.in",
  },
  {
    name: "Pranavesh",
    role: "Event Coordinator",
    image: pranavesh,
    email: "me22b019@iittp.ac.in",
  },
  {
    name: "Prithivi",
    role: "Technical Lead",
    image: prithivi,
    email: "me22b020@iittp.ac.in",
  },
];

const StudentRepresentatives = () => {
  return (
    <Layout>
      <PageHeader
        title="Student Representatives"
        subtitle="The team behind AME IIT Tirupati"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentReps.map((rep, index) => (
              <Card
                key={rep.name}
                className="overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={rep.image}
                    alt={rep.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-foreground">{rep.name}</h3>
                  <p className="text-sm text-primary mb-2">{rep.role}</p>
                  <a
                    href={`mailto:${rep.email}`}
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-3 h-3" />
                    {rep.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudentRepresentatives;
