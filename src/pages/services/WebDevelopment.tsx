
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Code, Smartphone, Search, Zap } from "lucide-react";

const WebDevelopment = () => {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display across all devices and screen sizes."
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "SEO Optimized",
      description: "Built-in SEO best practices to improve your search engine rankings and visibility."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Fast Performance",
      description: "Optimized code and modern techniques for lightning-fast loading speeds."
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Modern Technologies",
      description: "Latest frameworks and tools for scalable, maintainable web applications."
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "HTML5", category: "Markup" },
    { name: "CSS3", category: "Styling" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Vercel", category: "Deployment" }
  ];

  const services = [
    "Custom Website Development",
    "E-commerce Solutions",
    "Web Application Development",
    "Progressive Web Apps (PWA)",
    "API Development & Integration",
    "Content Management Systems",
    "Website Redesign & Modernization",
    "Performance Optimization",
    "Maintenance & Support"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Web Development</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-poppins">
                  Modern <span className="text-gradient">Web Development</span> Solutions
                </h1>
                <p className="text-xl text-muted-foreground">
                  Create stunning, high-performance websites and web applications that drive business growth 
                  and deliver exceptional user experiences across all devices.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
                alt="Web development workspace"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Why Choose Our <span className="text-gradient">Web Development</span> Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine technical expertise with creative design to deliver websites that not only look great 
              but also perform exceptionally and drive business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className={`text-center hover-lift animate-scale-in`} style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Comprehensive <span className="text-gradient">Web Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From simple websites to complex web applications, we provide end-to-end web development 
                services tailored to your specific business needs and objectives.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service) => (
                  <div key={service} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Web development process"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Technologies <span className="text-gradient">We Use</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We stay current with the latest web technologies to deliver modern, efficient, and scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <Card key={tech.name} className={`text-center hover-lift animate-fade-in`} style={{ animationDelay: `${index * 50}ms` }}>
                <CardContent className="p-4">
                  <div className="font-semibold">{tech.name}</div>
                  <div className="text-sm text-muted-foreground">{tech.category}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Our Development <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach ensuring quality, efficiency, and successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Planning & Design",
                description: "Requirement analysis, wireframing, and visual design creation"
              },
              {
                step: "02",
                title: "Development",
                description: "Code development, regular testing, and continuous integration"
              },
              {
                step: "03",
                title: "Launch & Support",
                description: "Deployment, optimization, and ongoing maintenance support"
              }
            ].map((process, index) => (
              <Card key={process.step} className={`text-center hover-lift animate-scale-in`} style={{ animationDelay: `${index * 200}ms` }}>
                <CardHeader>
                  <div className="text-4xl font-bold text-primary mb-4">{process.step}</div>
                  <CardTitle>{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create a powerful web presence that drives your business forward. 
            Get started with a free consultation today.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
