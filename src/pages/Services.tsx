
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
      icon: "🌐",
      link: "/services/web-development",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First", "Modern Frameworks"],
      technologies: ["React", "Next.js", "Vue.js", "Node.js", "TypeScript"]
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business requirements and scale with your growth.",
      icon: "⚙️",
      link: "/services/software-development",
      features: ["Custom Built", "Scalable Architecture", "Secure", "Cross-Platform", "API Integration"],
      technologies: ["Python", "Java", "C#", ".NET", "Microservices"]
    },
    {
      title: "POS & Inventory Management",
      description: "Complete point-of-sale and inventory management systems for retail businesses and multi-location operations.",
      icon: "🏪",
      link: "/services/pos-systems",
      features: ["Real-time Tracking", "Multi-location Support", "Detailed Reports", "Payment Integration", "Staff Management"],
      technologies: ["Cloud-based", "Mobile Apps", "Barcode Scanning", "Analytics", "Integration APIs"]
    },
    {
      title: "AI Applications",
      description: "Intelligent applications powered by artificial intelligence and machine learning to automate and optimize business processes.",
      icon: "🤖",
      link: "/services/ai-applications",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Data Analysis", "Smart Recommendations"],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision", "NLP"]
    },
    {
      title: "AI Agents",
      description: "Autonomous AI agents for customer service, sales automation, and intelligent business process management.",
      icon: "🎯",
      link: "/services/ai-agents",
      features: ["24/7 Availability", "Natural Language Processing", "Self-Learning", "Multi-channel", "Integration Ready"],
      technologies: ["Chatbots", "Voice Assistants", "Workflow Automation", "CRM Integration", "Analytics"]
    },
    {
      title: "Comprehensive AI Services",
      description: "End-to-end AI consulting, strategy development, implementation, and optimization services for businesses.",
      icon: "✨",
      link: "/services/ai-services",
      features: ["AI Strategy", "Implementation", "Optimization", "Training", "Ongoing Support"],
      technologies: ["Consulting", "Custom Models", "Cloud AI", "Data Pipeline", "MLOps"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive technology solutions designed to transform your business, 
              drive innovation, and deliver measurable results across all digital touchpoints.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">Custom Development</Badge>
              <Badge variant="secondary" className="px-4 py-2">AI-Powered Solutions</Badge>
              <Badge variant="secondary" className="px-4 py-2">24/7 Support</Badge>
              <Badge variant="secondary" className="px-4 py-2">Scalable Architecture</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className={`hover-lift group animate-scale-in h-full`} style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <Link to={service.link}>
                      <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link to={service.link}>
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More About {service.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and architecture" },
              { step: "03", title: "Development", description: "Building your solution with regular updates" },
              { step: "04", title: "Deployment", description: "Launching and providing ongoing support" }
            ].map((process, index) => (
              <Card key={process.step} className={`text-center hover-lift animate-fade-in`} style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-4">{process.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and explore how our services can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Request Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
