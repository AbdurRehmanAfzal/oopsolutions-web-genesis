
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
      icon: "🌐",
      link: "/services/web-development",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"]
    },
    {
      title: "Custom Software",
      description: "Tailored software solutions designed to meet your specific business requirements.",
      icon: "⚙️",
      link: "/services/software-development",
      features: ["Custom Built", "Scalable", "Secure"]
    },
    {
      title: "POS & Inventory",
      description: "Complete point-of-sale and inventory management systems for retail and businesses.",
      icon: "🏪",
      link: "/services/pos-systems",
      features: ["Real-time Tracking", "Multi-location", "Reports"]
    },
    {
      title: "AI Applications",
      description: "Intelligent applications powered by artificial intelligence and machine learning.",
      icon: "🤖",
      link: "/services/ai-applications",
      features: ["Machine Learning", "Predictive Analytics", "Automation"]
    },
    {
      title: "AI Agents",
      description: "Autonomous AI agents for customer service, automation, and business processes.",
      icon: "🎯",
      link: "/services/ai-agents",
      features: ["24/7 Available", "Natural Language", "Self-Learning"]
    },
    {
      title: "AI Services",
      description: "Comprehensive AI consulting, implementation, and optimization services.",
      icon: "✨",
      link: "/services/ai-services",
      features: ["Strategy", "Implementation", "Optimization"]
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From web development to AI solutions, we provide comprehensive technology services 
            that help businesses thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className={`hover-lift group cursor-pointer animate-scale-in`} style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
