
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with AI-powered recommendations and inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "AI/ML"],
      client: "Retail Company Dubai",
      results: ["40% increase in sales", "60% better user engagement", "50% reduction in cart abandonment"]
    },
    {
      title: "Smart POS System",
      category: "POS & Inventory",
      description: "Complete point-of-sale system with real-time inventory tracking and analytics.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop",
      technologies: ["React Native", "Python", "PostgreSQL", "Cloud"],
      client: "Restaurant Chain",
      results: ["Real-time inventory tracking", "Multi-location management", "Detailed analytics dashboard"]
    },
    {
      title: "AI Customer Service Agent",
      category: "AI Solutions",
      description: "Intelligent chatbot with natural language processing for 24/7 customer support.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      technologies: ["OpenAI", "Python", "NLP", "Integration APIs"],
      client: "Tech Startup",
      results: ["90% query resolution", "24/7 availability", "70% reduction in support tickets"]
    },
    {
      title: "Custom CRM System",
      category: "Software Development",
      description: "Tailored customer relationship management system with advanced analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "Charts"],
      client: "Marketing Agency",
      results: ["Streamlined operations", "Better client tracking", "Increased productivity"]
    },
    {
      title: "Predictive Analytics Dashboard",
      category: "AI Applications",
      description: "Machine learning-powered dashboard for business intelligence and forecasting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["TensorFlow", "React", "Python", "Data Pipeline"],
      client: "Manufacturing Company",
      results: ["Accurate forecasting", "Data-driven decisions", "Operational efficiency"]
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure mobile banking application with biometric authentication and AI fraud detection.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["React Native", "Node.js", "Security", "AI"],
      client: "Financial Institution",
      results: ["Enhanced security", "User-friendly interface", "Fraud prevention"]
    }
  ];

  const categories = ["All", "Web Development", "AI Solutions", "POS & Inventory", "Software Development", "Mobile Development"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our successful projects and see how we've helped businesses transform 
              through innovative technology solutions and AI-powered applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">50+ Projects Completed</Badge>
              <Badge variant="secondary" className="px-4 py-2">98% Client Satisfaction</Badge>
              <Badge variant="secondary" className="px-4 py-2">Multiple Industries</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className={`hover-lift group overflow-hidden animate-scale-in`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Client */}
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Client:</h4>
                    <p className="text-muted-foreground text-sm">{project.client}</p>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "25+", label: "Happy Clients" },
              { number: "6", label: "Industries Served" },
              { number: "99%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={stat.label} className={`animate-fade-in`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our growing list of satisfied clients. Let's discuss how we can bring your vision to life.
          </p>
          <Button size="lg" variant="secondary">
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
