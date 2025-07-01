
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Crown, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden luxury-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full floating blur-sm"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-accent/20 rounded-full floating blur-lg" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/20 rounded-full floating" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-accent/30 rounded-full floating" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in text-white">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 glass-card px-6 py-3 rounded-full">
                <Crown className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-accent">Dubai's Premier Technology Partner</span>
                <Star className="w-4 h-4 text-accent fill-current" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold font-poppins leading-tight">
                Luxury
                <span className="gold-text block">Digital Solutions</span>
                for Elite Business
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed">
                Transform your enterprise with bespoke AI-powered solutions, 
                custom software development, and premium digital experiences crafted for Dubai's most ambitious businesses.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-500 shimmer">
                  <Award className="mr-3 h-5 w-5" />
                  Start Your Transformation
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-xl rounded-full px-8 py-4 group">
                <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Experience Excellence
              </Button>
            </div>

            {/* Luxury Trust indicators */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center glass-card p-6 rounded-2xl">
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <div className="text-sm text-white/80">Elite Projects</div>
              </div>
              <div className="text-center glass-card p-6 rounded-2xl">
                <div className="text-3xl font-bold text-accent mb-2">99%</div>
                <div className="text-sm text-white/80">Client Satisfaction</div>
              </div>
              <div className="text-center glass-card p-6 rounded-2xl">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-white/80">Premium Support</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Main luxury showcase */}
              <div className="aspect-square rounded-3xl luxury-card p-8 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop"
                  alt="Luxury technology workspace in Dubai"
                  className="w-full h-full object-cover rounded-2xl"
                />
                
                {/* Overlay with premium badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating luxury elements */}
              <div className="absolute -top-8 -right-8 glass-card p-6 animate-pulse-luxury rounded-2xl">
                <div className="text-3xl font-bold text-accent">AI</div>
                <div className="text-xs text-white/80">Powered</div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 glass-card p-6 animate-pulse-luxury rounded-2xl" style={{ animationDelay: '2s' }}>
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-xs text-white/80">Support</div>
              </div>

              <div className="absolute top-1/2 -right-12 glass-card p-4 animate-pulse-luxury rounded-xl" style={{ animationDelay: '1s' }}>
                <Crown className="w-8 h-8 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
