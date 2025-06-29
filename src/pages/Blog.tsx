
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "The Future of AI in Business: Trends to Watch in 2024",
      excerpt: "Explore the latest AI trends that are shaping the business landscape and learn how to stay ahead of the curve.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      category: "AI Technology",
      author: "Ahmed Al-Rashid",
      date: "2024-01-15",
      readTime: "5 min read"
    },
    {
      title: "Building Scalable Web Applications: Best Practices",
      excerpt: "Learn the essential practices for creating web applications that can grow with your business needs.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      category: "Web Development",
      author: "Sarah Mitchell",
      date: "2024-01-10",
      readTime: "7 min read"
    },
    {
      title: "Why Every Business Needs a Custom POS System",
      excerpt: "Discover how custom POS systems can streamline operations and boost your business efficiency.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop",
      category: "Business Solutions",
      author: "Mohammed Khan",
      date: "2024-01-05",
      readTime: "4 min read"
    },
    {
      title: "Machine Learning in Retail: Transforming Customer Experience",
      excerpt: "How machine learning is revolutionizing the retail industry and creating personalized shopping experiences.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "AI Technology",
      author: "Fatima Al-Zahra",
      date: "2024-01-01",
      readTime: "6 min read"
    },
    {
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential security measures every small business should implement to protect their digital assets.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      category: "Security",
      author: "Ahmed Al-Rashid",
      date: "2023-12-28",
      readTime: "8 min read"
    },
    {
      title: "The Rise of Progressive Web Apps: What You Need to Know",
      excerpt: "Understanding PWAs and why they're becoming the preferred choice for modern web development.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      category: "Web Development",
      author: "Sarah Mitchell",
      date: "2023-12-25",
      readTime: "5 min read"
    }
  ];

  const categories = ["All", "AI Technology", "Web Development", "Business Solutions", "Security"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with the latest trends in technology, AI innovations, and expert insights 
              from our team of software development professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">Technology Insights</Badge>
              <Badge variant="secondary" className="px-4 py-2">Expert Tips</Badge>
              <Badge variant="secondary" className="px-4 py-2">Industry Trends</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Article</h2>
            <Card className="hover-lift overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={posts[0].image}
                    alt={posts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {posts[0].category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">{posts[0].title}</h3>
                  <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{posts[0].author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{new Date(posts[0].date).toLocaleDateString()}</span>
                    <span>{posts[0].readTime}</span>
                  </div>
                  <Button className="w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 border-b bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card key={post.title} className={`hover-lift group overflow-hidden animate-scale-in`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <User className="h-3 w-3 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss out on the latest technology trends, 
            expert tips, and industry insights.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button variant="secondary">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
