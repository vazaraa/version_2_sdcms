/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  Users,
  MessageSquare,
  Globe,
} from "lucide-react";

 

export default function ContactPage() {
  const containerRef = useGSAP();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "Vidya Nagar 1st Lane, Guntur - 522007, Andhra Pradesh",
        "India",
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["9985263111, ", "8099770055", "Land Line: 0863-2214444"],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@sdcms.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:30 AM - 6:30 PM", "Sunday: Closed"],
    },
  ];

  const offices = [
    {
      city: "Head Office - Guntur",
      address: "Vidya Nagar 1st Lane, Guntur - 522007, Andhra Pradesh",
    },
    {
      city: "Visakhapatnam",
      address:
        "39-33-9/2, Vuda Layout, Plot Mig 328, Varma Complex, Murali Nagar, Visakhapatnam, Andhra Pradesh 530007",
    },
    {
      city: "Hyderabad",
      address:
        "3-12-8/a, above SBI bank, 2nd floor, Ganesh nagar, Ramanthapur, Hyderabad - 500013.",
    },
    {
      city: "Bangalore",
      address: "Kumbalgodu, near raja rajeshwari College, Bangalore - 560074.",
    },
    {
      city: "Delhi",
      address: "WZ-9, 2nd Floor, Tatarpur, Tagore Garden, New Delhi - 110027",
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Reach SDCMS for manpower outsourcing, facility management, housekeeping,
                payroll outsourcing and HR outsourcing. We serve clients across Guntur,
                Andhra Pradesh and South India.
              </p>
              <div className="mt-2 text-sm">
                <a href="/services" className="text-primary font-medium hover:underline underline-offset-4 mr-4">explore manpower outsourcing services</a>
                <a href="/about" className="text-primary font-medium hover:underline underline-offset-4 mr-4">learn about SDCMS</a>
                <a href="/careers" className="text-primary font-medium hover:underline underline-offset-4">jobs at SDCMS</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="scale-in text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 text-primary">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {info.title}
                    </h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-in-left">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Send us a Message
                  </h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input type="email" placeholder="Enter your email" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input placeholder="Enter your phone number" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input placeholder="Enter your company name" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input placeholder="Enter message subject" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell us about your project or inquiry..."
                        rows={5}
                      />
                    </div>

                    <Button size="lg" className="w-full group">
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="slide-in-right space-y-8">
              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">
                        Mumbai Office Location
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Call Us</p>
                        <p className="text-sm text-muted-foreground">
                          9985263111, 8099770055 Land Line: 0863-2214444
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Email Us</p>
                        <p className="text-sm text-muted-foreground">
                          bd@sdcms.in
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Live Chat</p>
                        <p className="text-sm text-muted-foreground">
                          Available 9 AM - 6 PM
                        </p>
                      </div>
                    </div>
                     <div className="flex items-center space-x-3">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">for job enquiry</p>
                        <p className="text-sm text-muted-foreground">
                          +91 99856 24111
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Response Time
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        Email Inquiries
                      </span>
                      <span className="font-medium text-foreground">
                        24 hours
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Phone Calls</span>
                      <span className="font-medium text-foreground">
                        Immediate
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        Project Proposals
                      </span>
                      <span className="font-medium text-foreground">
                        2-3 days
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Office Locations
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With offices across major cities in India, we're always close to
                our clients and ready to provide personalized service and
                support.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <Card
                key={index}
                className="scale-in hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {office.city}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        {office.address}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
