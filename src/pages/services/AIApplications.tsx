
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AIApplications = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            <span className="text-gradient">AI Applications</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Intelligent applications powered by artificial intelligence and machine learning to automate and optimize business processes.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
              Explore AI Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIApplications;
