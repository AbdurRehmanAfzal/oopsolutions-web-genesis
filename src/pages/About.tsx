
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Eye, Heart } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Ahmed Al-Rashid",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Visionary leader with 10+ years in software development and AI solutions."
    },
    {
      name: "Sarah Mitchell",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c107?w=300&h=300&fit=crop&crop=face",
      bio: "Technology expert specializing in AI applications and system architecture."
    },
    {
      name: "Mohammed Khan",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack developer with expertise in modern web technologies and AI integration."
    },
    {
      name: "Fatima Al-Zahra",
      role: "AI Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      bio: "Machine learning engineer focused on developing intelligent business solutions."
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We stay at the forefront of technology to deliver cutting-edge solutions."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand and exceed their expectations."
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Quality",
      description: "We maintain the highest standards in every project we deliver."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Passion",
      description: "We're passionate about technology and helping businesses succeed."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              About <span className="text-gradient">OOP Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We are a premier software house based in Dubai, dedicated to transforming businesses 
              through innovative technology solutions and AI-powered applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">Dubai Based</Badge>
              <Badge variant="secondary" className="px-4 py-2">AI Specialists</Badge>
              <Badge variant="secondary" className="px-4 py-2">50+ Projects</Badge>
              <Badge variant="secondary" className="px-4 py-2">5+ Years Experience</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-gradient">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  To empower businesses with innovative software solutions that drive growth, 
                  efficiency, and competitive advantage. We strive to make advanced technology 
                  accessible and practical for organizations of all sizes.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-gradient">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  To be the leading software house in the Middle East, recognized for our 
                  expertise in AI applications, custom software development, and our commitment 
                  to delivering exceptional value to our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and shape our approach to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className={`text-center hover-lift animate-scale-in`} style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our talented team combines technical expertise with creative problem-solving 
              to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className={`text-center hover-lift animate-fade-in`} style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <div className="text-primary font-medium">{member.role}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8">
            Why Choose OOP Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="text-4xl font-bold">5+</div>
              <div className="text-xl">Years of Excellence</div>
              <p className="opacity-90">
                Proven track record of delivering successful projects across various industries.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-xl">Support Available</div>
              <p className="opacity-90">
                Round-the-clock support to ensure your systems run smoothly at all times.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-xl">Client Focused</div>
              <p className="opacity-90">
                Every solution is tailored to meet your specific business requirements and goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
