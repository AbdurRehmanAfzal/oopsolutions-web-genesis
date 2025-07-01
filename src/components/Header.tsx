import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Crown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: "Web Development", path: "/services/web-development" },
    { name: "Software Development", path: "/services/software-development" },
    { name: "POS & Inventory Systems", path: "/services/pos-systems" },
    { name: "AI Applications", path: "/services/ai-applications" },
    { name: "AI Agents", path: "/services/ai-agents" },
    { name: "AI Services", path: "/services/ai-services" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-accent/50 transition-all duration-500">
              <Crown className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-xl text-gradient">
                OOP Solutions
              </span>
              <span className="text-xs text-accent font-medium">Dubai Excellence</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  to="/"
                  className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                    isActive("/")
                      ? "bg-primary text-white shadow-lg"
                      : "hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/about"
                  className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                    isActive("/about")
                      ? "bg-primary text-white shadow-lg"
                      : "hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-6 py-3 rounded-xl font-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-96 gap-3 p-6 glass-card border-0 shadow-2xl">
                    {services.map((service) => (
                      <NavigationMenuLink key={service.path} asChild>
                        <Link
                          to={service.path}
                          className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-primary/10 hover:text-primary group"
                        >
                          <div className="text-sm font-medium leading-none group-hover:text-primary">
                            {service.name}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/portfolio"
                  className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                    isActive("/portfolio")
                      ? "bg-primary text-white shadow-lg"
                      : "hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  Portfolio
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/blog"
                  className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                    isActive("/blog")
                      ? "bg-primary text-white shadow-lg"
                      : "hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  Blog
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <Link to="/contact" className="hidden md:block">
            <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-accent/50 transition-all duration-500 px-8 py-3 rounded-xl font-semibold shimmer">
              Start Your Journey
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-card rounded-2xl m-4 p-6">
            <div className="space-y-4">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div className="px-3 py-2 text-base font-medium text-muted-foreground">
                Services
              </div>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="block px-6 py-2 rounded-md text-sm hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
              <Link
                to="/portfolio"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
