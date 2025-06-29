
const StatsSection = () => {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Success Rate" }
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`animate-fade-in`} style={{ animationDelay: `${index * 200}ms` }}>
              <div className="text-4xl md:text-5xl font-bold font-poppins mb-2">
                {stat.number}
              </div>
              <div className="text-lg opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
