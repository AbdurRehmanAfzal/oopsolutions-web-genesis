
import { Crown, Star, Award, Trophy } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { 
      number: "100+", 
      label: "Elite Projects", 
      description: "Premium solutions delivered",
      icon: <Trophy className="w-8 h-8" />
    },
    { 
      number: "50+", 
      label: "Distinguished Clients", 
      description: "Trusted by industry leaders",
      icon: <Crown className="w-8 h-8" />
    },
    { 
      number: "7+", 
      label: "Years of Excellence", 
      description: "Proven track record",
      icon: <Award className="w-8 h-8" />
    },
    { 
      number: "99%", 
      label: "Success Rate", 
      description: "Uncompromising quality",
      icon: <Star className="w-8 h-8 fill-current" />
    }
  ];

  return (
    <section className="section-padding luxury-gradient relative overflow-hidden">
      {/* Luxury background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-white">
            Excellence in <span className="gold-text">Numbers</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our commitment to luxury and innovation is reflected in every metric
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`glass-card p-8 rounded-3xl animate-fade-in luxury-hover group`} style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold font-poppins mb-3 text-white group-hover:text-accent transition-colors">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-accent mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-white/70">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
