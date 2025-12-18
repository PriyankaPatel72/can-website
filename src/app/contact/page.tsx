import { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Contact Us | Communication Access Network",
  description: "Get in touch with CAN. We're here to support you and answer your questions about our services for Connecticut's deaf, hard-of-hearing, and DeafBlind community.",
};

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Get in Touch
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Ready to learn more about our services? We're here to support you every step of the way. 
              Contact us to learn more about our programs or discuss your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/photots/Resized Maria DSC09139-Enhanced-NR copy.jpg"
              alt="Maria, friendly CAN community member, ready to help"
              width={1200}
              height={500}
              className="w-full h-64 lg:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="ml-8 lg:ml-16 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">We're Here to Help</h3>
                <p className="text-lg lg:text-xl opacity-90">Reach out to connect with our friendly team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How Can We Help You?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the option that best fits your needs. We'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* General Contact */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600 mx-auto mb-6">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.126-.98L3 21l1.98-5.874A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">General Inquiries</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Have questions about our services, need support, or want to learn more about CAN? 
                  Fill out our contact form and we'll respond within 24 hours.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdPHfmSE6ji4brLsXY6cSGjRY3QGnOC1wQD-wcvc2qpY/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Contact Us Form
                </a>
              </div>
            </div>

            {/* Donations */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-purple-600 mx-auto mb-6">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Our Mission</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Your donation helps us continue providing vital services to Connecticut's deaf, 
                  hard-of-hearing, and DeafBlind community.
                </p>
                <a
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=VURMdmUWgkuIXBckt5UbKmP00iEOFplOhFBFXUEMjydUNTBFOUM1MktUQVA5TFhJWTRWVERIOFpXVS4u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold text-lg rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Donate Now
                </a>
              </div>
            </div>

            {/* Volunteer Application */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-green-600 mx-auto mb-6">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Wanna Volunteer?</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Join our team of dedicated volunteers and make a difference in our community. 
                  We have opportunities for people of all backgrounds and skill levels.
                </p>
                <a
                  href="/get-involved"
                  className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold text-lg rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Forms will open in a new window. If you have trouble accessing the forms, 
              please contact us directly using the information below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Other Ways to Reach Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Prefer to contact us directly? Here are additional ways to get in touch.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@cancorp.org" className="text-blue-600 hover:text-blue-800 underline">
                    info@cancorp.org
                  </a>
                </p>
                <p className="mt-2 text-sm text-gray-500">We respond within 24 hours</p>
              </div>

              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 mb-1">
                  : <a href="sms:860-232-4242" className="text-blue-600 hover:text-blue-800 underline">
                    860-232-4242
                  </a>
                </p>
                <p className="text-gray-600">
                  VP: <a href="tel:860-599-9490" className="text-blue-600 hover:text-blue-800 underline">
                    860-232-4242
                  </a>
                </p>
                <p className="mt-2 text-sm text-gray-500">Monday - Friday, 9 AM - 5 PM EST</p>
              </div>

              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Main Office</h3>
                <p className="text-gray-600">
                  151 New Park Avenue, Suite 101<br />
                Hartford, CT 06106
                </p>
                <p className="mt-2 text-sm text-gray-500">Visit by appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <div className="flex items-center justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
              <div className="text-gray-700">
                <p className="mb-2"><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM EST</p>
                <p><strong>Saturday - Sunday:</strong> Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}