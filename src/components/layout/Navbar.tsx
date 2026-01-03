import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ameLogo from "@/assets/ame-logo-new.jpeg";
import iitLogo from "@/assets/iit-tirupati-logo-new.png";

const navigationItems = [
  { name: "Home", href: "/" },
  {
    name: "Workshops",
    href: "/workshops",
    children: [
      { name: "All Workshops", href: "/workshops" },
      { name: "3D Printing", href: "/workshops/3d-printing" },
      { name: "MATLAB – Hands-on Workshop", href: "/workshops/matlab" },
      { name: "Python – Hands-on Workshop", href: "/workshops/python" },
      { name: "LaTeX", href: "/workshops/latex" },
      { name: "AutoCAD", href: "/workshops/autodesk" },
      { name: "Fusion 360", href: "/workshops/autodesk" },
      { name: "Abaqus", href: "/workshops/abaqus" },
    ],
  },
  {
    name: "Events",
    href: "/events",
    children: [
      { name: "Industrial Visits", href: "/events/industrial-visits" },
      { name: "Industrial Lectures", href: "/events/industrial-lectures" },
      { name: "Competitions", href: "/events/competitions" },
      { name: "Quizzes", href: "/events/quizzes" },
      { name: "Sports Tournaments", href: "/events/sports-tournaments" },
      { name: "Happy Hours", href: "/events/happy-hours" },
    ],
  },
  {
    name: "Team",
    href: "/team",
    children: [
      { name: "Faculty Members", href: "/team" },
      { name: "Student Representatives", href: "/team" },
    ],
  },
  {
    name: "Life at AME",
    href: "/life-at-ame",
    children: [
      { name: "Faculty Interactions", href: "/life-at-ame/faculty-interactions" },
      { name: "Freshers", href: "/life-at-ame/freshers" },
      { name: "Farewells", href: "/life-at-ame/farewells" },
      { name: "Alumni Interactions", href: "/life-at-ame/alumni-interactions" },
    ],
  },
  { name: "Articles", href: "/articles" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-section">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={ameLogo}
              alt="AME IIT Tirupati Logo"
              className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-contain flex-shrink-0"
            />
            <span className="text-xl md:text-2xl font-bold text-foreground">
              AME <span className="text-primary">IIT Tirupati</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-secondary"
                  )}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 w-56 animate-fade-in z-50">
                    <div className="bg-card rounded-lg shadow-xl border border-border overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* IIT Logo */}
            <div className="ml-4 pl-4 border-l border-border">
              <img
                src={iitLogo}
                alt="IIT Tirupati"
                className="h-14 w-auto object-contain"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-background border-b border-border animate-slide-in-right">
          <div className="container-section py-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navigationItems.map((item) => (
              <div key={item.name} className="py-2">
                <Link
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-lg font-medium transition-colors",
                    isActive(item.href)
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 border-l-2 border-border pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile IIT Logo */}
            <div className="flex items-center gap-3 px-4 pt-4 mt-4 border-t border-border">
              <img
                src={iitLogo}
                alt="IIT Tirupati"
                className="h-14 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;