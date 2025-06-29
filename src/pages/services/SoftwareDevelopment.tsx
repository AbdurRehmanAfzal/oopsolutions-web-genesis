
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SoftwareDevelopment = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Custom <span className="text-gradient">Software Development</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Tailored software solutions designed to meet your unique business requirements and scale with your growth.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
