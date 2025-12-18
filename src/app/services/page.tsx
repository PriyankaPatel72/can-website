import { Metadata } from "next";
import Link from "next/link";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Services | Communication Access Network",
  description: "CAN provides auxiliary support services to statewide agencies serving deaf, hard-of-hearing elderly, DeafBlind, and those with diminished visual acuity in employment, education, housing, economics, and self-determination.",
};

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Our Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Comprehensive auxiliary support services designed to empower independence 
              and promote full participation in community life for individuals who are 
              deaf, hard-of-hearing, or DeafBlind.
            </p>
          </div>
        </div>
      </section>

      {/* Services in Action */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/photots/Resized DB and SSP  DSC00321 copy (1).jpg"
                alt="DeafBlind individual receiving support services"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Support Service Providers</h3>
                <p className="text-lg opacity-90">Specialized assistance for DeafBlind individuals</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/photots/Resized EP interpreter  April 2025 DSC01620-Enhanced-NR.jpg"
                alt="Professional ASL interpreter providing services"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Communication access at all events</h3>
                <p className="text-lg opacity-90">Professional interpretation by native ASL users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auxiliary Support Services */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Auxiliary Support Services
            </h2>
            <div className="mt-12 bg-gray-50 rounded-lg p-8 lg:p-12">
              <p className="text-lg leading-8 text-gray-700">
                CAN provides <strong>auxiliary support services</strong> to statewide agencies who serve 
                deaf or hard-of-hearing elderly (who require American Sign Language (ASL) interpretation 
                by native users of ASL) and DeafBlind and Hard of Hearing blind, and Deaf and Hard of 
                Hearing persons with diminished visual acuity regardless of race or gender so that they 
                can be provided opportunities to succeed in areas of:
              </p>
              
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 mx-auto mb-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6m0 0v6m0-6H8m0 0V6m0 0v6m0-6h8m-8 6v4a2 2 0 002 2h4a2 2 0 002-2v-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">
                    Employment
                  </h3>
                  <p className="mt-2 text-gray-600 text-center text-sm">
                    Supporting career development and workplace success
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-600 mx-auto mb-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">
                    Education
                  </h3>
                  <p className="mt-2 text-gray-600 text-center text-sm">
                    Facilitating access to educational opportunities and resources
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-600 mx-auto mb-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">
                    Housing
                  </h3>
                  <p className="mt-2 text-gray-600 text-center text-sm">
                    Assisting with housing access and independent living solutions
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-600 mx-auto mb-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">
                    Economics
                  </h3>
                  <p className="mt-2 text-gray-600 text-center text-sm">
                    Promoting financial independence and economic opportunities
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-600 mx-auto mb-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">
                    Self-Determination
                  </h3>
                  <p className="mt-2 text-gray-600 text-center text-sm">
                    Empowering personal choice and advocacy skills
                  </p>
                </div>
              </div>

              <div className="mt-10 bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                  Our Commitment to Inclusion
                </h3>
                <p className="text-gray-700 text-center">
                  We serve all individuals <strong>regardless of race or gender</strong>, ensuring 
                  equal access to opportunities and supporting the unique needs of deaf or 
                  hard-of-hearing elderly, DeafBlind individuals, and those with diminished visual acuity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Supporting Independence & Community Connection
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-200">
              Our programs are designed to meet you where you are and help you achieve 
              your goals for independent living and community participation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started today
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-200"
              >
                Learn more about CAN <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}