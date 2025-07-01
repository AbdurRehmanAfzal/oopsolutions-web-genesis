
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Crown, Star } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      title: "Web Development",
      description: "Exquisite, responsive websites that embody luxury and sophistication for discerning clientele.",
      icon: "🌐",
      link: "/services/web-development",
      features: ["Luxury UX Design", "Premium Performance", "Elite SEO"],
      premium: true
    },
    {
      title: "Custom Software",
      description: "Bespoke enterprise solutions engineered for the most demanding business requirements.",
      icon: "⚙️",
      link: "/services/software-development",
      features: ["Tailored Architecture", "Enterprise Scale", "Bank-grade Security"],
      premium: true
    },
    {
      title: "POS & Inventory",
      description: "Sophisticated retail management systems for high-end boutiques and luxury establishments.",
      icon: "🏪",
      link: "/services/pos-systems",
      features: ["Real-time Analytics", "Multi-location Sync", "Premium Reports"]
    },
    {
      title: "AI Applications",
      description: "Cutting-edge artificial intelligence solutions that redefine business possibilities.",
      icon: "🤖",
      link: "/services/ai-applications",
      features: ["Machine Learning", "Predictive Intelligence", "Smart Automation"],
      premium: true
    },
    {
      title: "AI Agents",
      description: "Elite autonomous agents providing premium customer experiences around the clock.",
      icon: "🎯",
      link: "/services/ai-agents",
      features: ["24/7 Concierge", "Natural Conversation", "Continuous Learning"]
    },
    {
      title: "AI Services",
      description: "Comprehensive AI strategy and implementation for forward-thinking enterprises.",
      icon: "✨",
      link: "/services/ai-services",
      features: ["Strategic Consulting", "Custom Implementation", "Performance Optimization"],
      premium: true
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Crown className="w-6 h-6 text-accent" />
            <span className="text-accent font-semibold">Premium Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            Our <span className="text-gradient">Elite</span> Offerings
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From sophisticated web experiences to revolutionary AI solutions, we deliver 
            technology excellence that matches Dubai's standard for luxury and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card key={service.title} className={`luxury-hover group cursor-pointer luxury-card relative overflow-hidden`} style={{ animationDelay: `${index * 150}ms` }}>
              {service.premium && (
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-accent/10 px-3 py-1 rounded-full">
                  <Star className="w-3 h-3 text-accent fill-current" />
                  <span className="text-xs font-medium text-accent">Premium</span>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <CardTitle className="group-hover:text-primary transition-colors text-2xl font-bold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-500 rounded-xl font-semibold">
                      Explore Excellence
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
