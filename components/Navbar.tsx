'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronDown,
  Settings,
  Users,
  Briefcase,
  Phone,
  MapPin,
  Target,
  HardHat,
  Mountain,
  Shield,
  Sparkles,
  GraduationCap,
  Home,
  ShoppingCart,
  Truck,
  Wrench,
  ClipboardList,
  Award
} from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setServicesOpen(false);
        setCompaniesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const services = [
    { name: 'Government OutSourcing', href: '/services/government-and-outsourcing', icon: Target },
    { name: 'Recruitment and Staffing Solutions', href: '/services/recruitment-and-staffing-solutions', icon: Users },
    { name: 'Construction Management', href: '/services/construction', icon: HardHat },
    { name: 'Mining & Raw Materials', href: '/services/mining-raw-materials', icon: Mountain },
    { name: 'Security Services', href: '/services/security-services', icon: Shield },
    { name: 'Housekeeping Services', href: '/services/housekeeping-services', icon: Sparkles },
    { name: 'Training & Development', href: '/services/training-and-development', icon: GraduationCap },
    { name: 'Survey & Research', href: '/services/survey', icon: ClipboardList }
  ];

  const companies = [
    { name: 'Sri Durga Consultancy Services', href: '/group-companies/sri-durga-consultancy-services', icon: Target },
    { name: 'SDC Management Solutions Pvt. Ltd.', href: '/group-companies/sdc-management-solutions-pvt-ltd', icon: Building2 },
    { name: 'Vazrashri Industries Pvt. Ltd.', href: '/group-companies/vazrashri-industries-pvt-ltd', icon: Settings },
    { name: 'Click Pic', href: '/group-companies/click-pic', icon: ShoppingCart },
    { name: 'Urban Expert', href: '/group-companies/urban-expert', icon: Home }
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'Clients', href: '/clients', icon: Users },
    { name: 'Careers', href: '/careers' },
  ];

  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white overflow-hidden">
              <Image src="/images/logo.webp" alt="SDC Logo" width={36} height={36} className="object-contain w-9 h-9" />
            </div>
            {/* <div>
              <span className="font-bold text-xl text-foreground">SDC</span>
              <span className="text-sm text-muted-foreground block -mt-1">Management Solutions</span>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 group ${
                    isActivePath(item.href)
                      ? 'text-brand-red bg-brand-peach'
                      : 'text-muted-foreground'
                  }`}
                >
                  {Icon && <Icon className="h-4 w-4 text-brand-red" />}
                  <span>{item.name}</span>
                </Link>
              );
            })}

            {/* Services Dropdown */}
            <div className="relative dropdown-container">
              <div
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 ${
                  pathname.startsWith('/services')
                    ? 'text-brand-red bg-brand-peach'
                    : 'text-muted-foreground'
                }`}
              >
                <Link href="/services" className="flex items-center space-x-1">
                  <Settings className="h-4 w-4 text-brand-red" />
                  <span>Services</span>
                </Link>
                <button
                  aria-label="Toggle services menu"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="p-1"
                >
                  <ChevronDown className={`h-3 w-3 text-brand-red transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-background border rounded-md shadow-lg py-2 z-50"
                >
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-muted-foreground"
                      >
                        <div className="relative">
                          {service.name === 'Government OutSourcing' ? (
                            // Enhanced target-like icon for Government OutSourcing
                            <div className="w-5 h-5 bg-gradient-to-br from-brand-red to-red-600 rounded-full flex items-center justify-center shadow-sm border border-red-400/30">
                              <div className="w-3.5 h-3.5 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center border border-red-300/40">
                                <div className="w-2.5 h-2.5 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center border border-red-200/50">
                                  <div className="w-1 h-1 bg-white rounded-full shadow-sm"></div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            // Regular icon for other services
                            <div className="w-5 h-5 bg-gradient-to-br from-brand-red to-red-600 rounded-full flex items-center justify-center shadow-sm border border-red-400/30">
                              <Icon className="h-2.5 w-2.5 text-white drop-shadow-sm stroke-[2]" />
                            </div>
                          )}
                        </div>
                        <span>{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Group Companies Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setCompaniesOpen(!companiesOpen)}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 group ${
                  pathname.startsWith('/group-companies')
                    ? 'text-brand-red bg-brand-peach'
                    : 'text-muted-foreground'
                }`}
              >
                <Building2 className="h-4 w-4 text-brand-red" />
                <span>Group Companies</span>
                <ChevronDown className={`h-3 w-3 text-brand-red transition-transform ${companiesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {companiesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-background border rounded-md shadow-lg py-2 z-50"
                >
                  <Link
                    href="/group-companies"
                    className="flex items-center space-x-3 px-4 py-2 text-sm font-semibold text-brand-red border-b"
                  >
                    <Building2 className="h-4 w-4 text-brand-red" />
                    <span>All Companies</span>
                  </Link>
                  
                  {companies.map((company) => {
                    const Icon = company.icon;
                    return (
                      <Link
                        key={company.name}
                        href={company.href}
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-muted-foreground"
                      >
                        <Icon className="h-4 w-4 text-brand-red" />
                        <span>{company.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Contact Link */}
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 group ${
                isActivePath('/contact')
                  ? 'text-brand-red bg-brand-peach'
                  : 'text-muted-foreground'
              }`}
            >
              <Phone className="h-4 w-4 text-brand-red" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme((resolvedTheme ?? theme) === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 p-0"
            >
              {(resolvedTheme ?? theme) === 'dark' ? (
                <Sun className="h-4 w-4 text-brand-red" />
              ) : (
                <Moon className="h-4 w-4 text-brand-red" />
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden w-9 h-9 p-0"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-4 w-4 text-brand-red" /> : <Menu className="h-4 w-4 text-brand-red" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 ${
                      isActivePath(item.href)
                        ? 'text-brand-red bg-brand-peach'
                        : 'text-muted-foreground'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {Icon && <Icon className="h-4 w-4 text-brand-red" />}
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Mobile Services */}
              <div className="mt-4">
                <div className="font-semibold text-foreground mb-2 flex items-center space-x-2">
                  <Settings className="h-4 w-4 text-brand-red" />
                  <span>Services</span>
                </div>
                <div className="pl-6 space-y-1">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-3 py-2 text-sm text-muted-foreground rounded-md flex items-center space-x-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="relative">
                          {service.name === 'Government OutSourcing' ? (
                            // Enhanced target-like icon for Government OutSourcing
                            <div className="w-4 h-4 bg-gradient-to-br from-brand-red to-red-600 rounded-full flex items-center justify-center shadow-sm border border-red-400/30">
                              <div className="w-3 h-3 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center border border-red-300/40">
                                <div className="w-2 h-2 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center border border-red-200/50">
                                  <div className="w-0.5 h-0.5 bg-white rounded-full shadow-sm"></div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            // Regular icon for other services
                            <div className="w-4 h-4 bg-gradient-to-br from-brand-red to-red-600 rounded-full flex items-center justify-center shadow-sm border border-red-400/30">
                              <Icon className="h-2 w-2 text-white drop-shadow-sm stroke-[1.5]" />
                            </div>
                          )}
                        </div>
                        <span>{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Group Companies */}
              <div className="mt-4">
                <div className="font-semibold text-foreground mb-2 flex items-center space-x-2">
                  <Building2 className="h-4 w-4 text-brand-red" />
                  <span>Group Companies</span>
                </div>
                <div className="pl-6 space-y-1">
                  <Link
                    href="/group-companies"
                    className="block px-3 py-2 text-sm font-medium text-brand-red rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    All Companies
                  </Link>
                  {companies.map((company) => {
                    const Icon = company.icon;
                    return (
                      <Link
                        key={company.name}
                        href={company.href}
                        className="block px-3 py-2 text-sm text-muted-foreground rounded-md flex items-center space-x-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="h-4 w-4 text-brand-red" />
                        <span>{company.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;