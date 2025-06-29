
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "923341500888"; // Your number in international format without +
    const message = "Hello! I'm interested in your software solutions and would like to discuss my project requirements.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "info@oopsolutions.com",
      link: "mailto:info@oopsolutions.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      content: "+92 334 1500888",
      link: "tel:+923341500888"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-500" />,
      title: "WhatsApp",
      content: "Quick Chat",
      link: "#",
      action: handleWhatsAppClick
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Address",
      content: "Dubai, United Arab Emirates",
      link: "#"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      content: "Sun-Thu: 9AM-6PM",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to transform your business with cutting-edge technology? 
              Let's discuss your project and explore how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white"
                size="lg"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold font-poppins mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  We're here to help you with any questions or project inquiries. 
                  Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="hover-lift">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        {info.icon}
                        <div>
                          <div className="font-semibold">{info.title}</div>
                          {info.action ? (
                            <button 
                              onClick={info.action}
                              className="text-muted-foreground hover:text-green-500 transition-colors"
                            >
                              {info.content}
                            </button>
                          ) : info.link.startsWith('mailto:') || info.link.startsWith('tel:') ? (
                            <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                              {info.content}
                            </a>
                          ) : (
                            <div className="text-muted-foreground">{info.content}</div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Response Promise */}
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Quick Response Guarantee</h3>
                  <p className="text-sm text-muted-foreground">
                    We respond to all inquiries within 24 hours and provide 
                    free consultation for new projects.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 XX XXX XXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="software-development">Custom Software Development</SelectItem>
                          <SelectItem value="pos-systems">POS & Inventory Systems</SelectItem>
                          <SelectItem value="ai-applications">AI Applications</SelectItem>
                          <SelectItem value="ai-agents">AI Agents</SelectItem>
                          <SelectItem value="ai-services">AI Services</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        placeholder="Please describe your project requirements, timeline, and any specific needs..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-poppins mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground">Located in the heart of Dubai's business district</p>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg">Interactive Map Coming Soon</p>
              <p className="text-sm">Dubai, United Arab Emirates</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
