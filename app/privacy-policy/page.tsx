import React from "react";

export const metadata = {
  title: "Privacy Policy | SDCMS",
  description:
    "Learn how SDCMS collects, uses, and protects personal information for students, trainees, clients, and applicants.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-brand-cream text-foreground">
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="mb-10">
            <p className="text-sm text-muted-foreground uppercase tracking-wide">
              Privacy Policy — SDCMS (Skill Development &amp; Consultancy Management Services)
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-3">Privacy Policy</h1>
            <p className="text-muted-foreground mt-3">Last Updated: December 11, 2025</p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            At SDCMS, we are committed to protecting your personal information and maintaining transparency in how we
            collect, use, and safeguard your data. This Privacy Policy explains how we handle information from students,
            clients, trainees, job applicants, and website users who interact with our services, programs, and platforms.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            By using our website, enrolling in our training programs, or accessing our services, you agree to the
            practices described in this Privacy Policy.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect the following categories of information depending on how you use our services:
              </p>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold">1.1 Personal Information</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Full Name</li>
                    <li>Phone Number</li>
                    <li>Email Address</li>
                    <li>Address</li>
                    <li>Aadhar / ID proof (if required)</li>
                    <li>Date of Birth</li>
                    <li>Emergency contact details (only for training programs)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">1.2 Student / Trainee Information</h3>
                  <p className="text-muted-foreground">(collected when joining Skill Development or Training Services)</p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Educational qualification</li>
                    <li>College/university details</li>
                    <li>Skill interests &amp; chosen courses</li>
                    <li>Assignments, assessments, attendance records</li>
                    <li>Certificates issued</li>
                    <li>Internship or placement preferences</li>
                    <li>Resume or portfolio details</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">1.3 Business / Client Information</h3>
                  <p className="text-muted-foreground">(for companies using our IT &amp; consultancy services)</p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Company name</li>
                    <li>GST / Business documents</li>
                    <li>Project requirements</li>
                    <li>Technical details shared for service delivery</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">1.4 Job Applicant Information</h3>
                  <p className="text-muted-foreground">(for recruitment or placement)</p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Resume</li>
                    <li>Previous job experience</li>
                    <li>Skills, certifications, and qualifications</li>
                    <li>Applicant communications</li>
                    <li>Portfolio links, interview notes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">1.5 Technical Information</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>IP address</li>
                    <li>Browser details</li>
                    <li>Device information</li>
                    <li>Cookies and usage analytics</li>
                    <li>Location (approximate)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">Your data is used strictly for providing and improving our services.</p>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold">2.1 For Students &amp; Skill Development Programs</h3>
                  <p className="text-muted-foreground">We use student data to:</p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Enroll you into training, workshops, or internship programs</li>
                    <li>Provide course materials, LMS access, study resources</li>
                    <li>Track attendance, assignments, assessments, and certification</li>
                    <li>Offer personalized training or career guidance</li>
                    <li>Share internship or job opportunities</li>
                    <li>Provide placement assistance with your consent</li>
                    <li>Send updates about classes, exams, events, or opportunities</li>
                  </ul>
                  <p className="text-muted-foreground">We do NOT sell or misuse student data.</p>
                </div>
                <div>
                  <h3 className="font-semibold">2.2 For IT Services, Web Design, Networking, and Consultancy</h3>
                  <p className="text-muted-foreground">We use client data to:</p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Understand project requirements</li>
                    <li>Deliver IT solutions</li>
                    <li>Provide customer support</li>
                    <li>Send updates, invoices, and communication related to your project</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">2.3 For Recruitment &amp; Hiring Support</h3>
                  <p className="text-muted-foreground">If you apply for a job or submit your details:</p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>We process your resume and profile</li>
                    <li>Share it only with verified employers or hiring partners</li>
                    <li>Communicate interview updates or job openings</li>
                  </ul>
                  <p className="text-muted-foreground">Applicant data is used only for recruitment purposes, not advertising.</p>
                </div>
                <div>
                  <h3 className="font-semibold">2.4 Communication &amp; Marketing</h3>
                  <p className="text-muted-foreground">We may use your data to:</p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Send service updates</li>
                    <li>Notify you about new programs or opportunities</li>
                    <li>Inform you about important changes</li>
                  </ul>
                  <p className="text-muted-foreground">Marketing messages are sent only with your consent.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. How We Share Your Information</h2>
              <p className="text-muted-foreground mb-4">We share your data only when necessary:</p>
              <div className="space-y-2">
                <p className="text-muted-foreground">We may share with:</p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Verified employers (for placement support)</li>
                  <li>Trainers and faculty (for student assessments)</li>
                  <li>Authorized SDCMS team members</li>
                  <li>Technical or payment service providers</li>
                  <li>Meta / WhatsApp Business API (for verification purposes)</li>
                  <li>Government authorities when legally required</li>
                </ul>
              </div>
              <div className="space-y-2 mt-4">
                <p className="text-muted-foreground">We DO NOT share with:</p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Third-party advertisers</li>
                  <li>Unauthorized organizations</li>
                  <li>Data brokers</li>
                </ul>
                <p className="text-muted-foreground">We never sell your data.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Cookies &amp; Tracking Technologies</h2>
              <p className="text-muted-foreground">
                Our website uses cookies to improve user experience, analyze website traffic, personalize content, and
                improve marketing and performance. You can disable cookies anytime through browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
              <p className="text-muted-foreground">
                We follow strong security practices to protect your data, including encrypted storage, secure servers,
                limited internal access, and regular audits. While we take all precautions, no digital platform is 100%
                risk-free. We ensure maximum possible safety.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Data Retention</h2>
              <p className="text-muted-foreground">We retain data only as long as necessary:</p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Student data: 2–5 years (or until deletion request)</li>
                <li>Certification &amp; course completion records: long-term storage</li>
                <li>Applicant data: 12–24 months</li>
                <li>Client/project data: as required for service delivery</li>
                <li>Legal &amp; financial data: as required by Indian law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Your Rights</h2>
              <p className="text-muted-foreground">
                You can request to access, update, correct, delete your data, withdraw consent from communications, or
                request a copy of your stored data.
              </p>
              <p className="text-muted-foreground mt-3">To request any of these, contact us at:</p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>📩 support@sdcms.in</li>
                <li>📞 +91 8686136931</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Children’s Privacy</h2>
              <p className="text-muted-foreground">
                Our programs and services are not intended for children below 16 years. We do not knowingly collect data
                from minors without guardian consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy anytime. New versions will be posted on this page with the updated
                date. Continued use of our website means you agree to the latest version.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
              <p className="text-muted-foreground mb-3">
                If you have any questions or concerns about this Privacy Policy, please contact:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>SDCMS — Skill Development &amp; Consultancy Management Services</li>
                <li>📍 Hyderabad, Telangana, India</li>
                <li>🌐 Website: https://sdcms.in/</li>
                <li>📩 Email: support@sdcms.in</li>
                <li>📞 Phone: +91 8686136931</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

