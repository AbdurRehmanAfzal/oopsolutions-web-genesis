
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Crown } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ahmed Al-Mahmoud",
      company: "Emirates Luxury Group",
      role: "CEO & Founder",
      content: "OOP Solutions delivered an AI-powered system that revolutionized our luxury retail operations. Their attention to detail and premium service quality is unmatched in the region.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      premium: true
    },
    {
      name: "Fatima Al-Zahra",
      company: "Dubai Innovation Hub",
      role: "Chief Technology Officer",
      content: "Working with OOP Solutions was an exceptional experience. Their bespoke software solution exceeded our expectations and delivered ROI beyond our projections.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c107?w=100&h=100&fit=crop&crop=face",
      premium: true
    },
    {
      name: "Mohammed Hassan",
      company: "Gulf Business Ventures",
      role: "Managing Director",
      content: "The custom POS system they developed transformed our multi-location operations. Every detail reflects the premium quality we demanded for our luxury brand.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Crown className="w-6 h-6 text-accent" />
            <span className="text-accent font-semibold">Client Excellence</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            What Our <span className="text-gradient">Elite Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover why Dubai's most prestigious businesses trust us with their most critical technology initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className={`luxury-hover luxury-card relative overflow-hidden`} style={{ animationDelay: `${index * 200}ms` }}>
              {testimonial.premium && (
                <div className="absolute top-6 right-6 flex items-center space-x-1 bg-accent/10 px-3 py-1 rounded-full">
                  <Star className="w-3 h-3 text-accent fill-current" />
                  <span className="text-xs font-medium text-accent">Premium Client</span>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Quote className="w-8 h-8 text-accent/30 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-8 italic text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4 border-2 border-accent/20"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Crown className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-accent font-medium">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
