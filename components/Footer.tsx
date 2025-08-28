"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Government Outsourcing",
    "Project Management",
    "Business Consulting",
    "Strategic Planning",
  ];

  const companies = [
    "Sri Durga Consulting Services",
    "Urban Expert",
    "Agro Expert",
    "IT Expert",
    "Edu Expert",
    "Health Expert",
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-peach text-white">
                <Building2 className="h-6 w-6 text-brand-red" />
              </div>
              <div>
                <span className="font-bold text-xl">SDC</span>
                <span className="text-sm text-muted-foreground block -mt-1">
                  Management Solutions
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Excellence in business management and consulting services. We
              deliver innovative solutions that drive growth and success for our
              clients across various industries.
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="text-brand-red hover:opacity-80 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-brand-red hover:opacity-80 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-brand-red hover:opacity-80 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-brand-navy transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-brand-red" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-brand-navy transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-brand-red" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-brand-red mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Vidya Nagar 1st Lane, Guntur - 522007, Andhra Pradesh
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-red flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Land Line: 0863-2214444 <br />9985263111, 8099770055
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-red flex-shrink-0" />
                <p className="text-muted-foreground text-sm">bd@sdcms.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} SDC Management Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-muted-foreground hover:text-brand-navy text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-brand-navy text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-brand-navy text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
