import React from 'react';
import Image from 'next/image';
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | Communication Advocacy Network",
  description: "Access free advocacy guides, educational materials, research reports, and training resources to strengthen your community engagement efforts.",
};

export default function Resources() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Advocacy Resources
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
              Free guides, templates, research reports, and educational materials to 
              support your advocacy efforts and strengthen community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Resources in Action */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/photots/Resized EP interpreter  April 2025 DSC01620-Enhanced-NR.jpg"
                alt="Educational resources being used in training session"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Educational Materials</h3>
                <p className="text-lg opacity-90">Training resources in action</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/photots/Resized Morrison JWJ  watching speaker April 2025 DSC01621.jpg"
                alt="Community member engaged with advocacy resources"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Community Engagement</h3>
                <p className="text-lg opacity-90">Resources empowering participation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Links */}
      <section className="py-24 sm:py-32" id="education">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Resource Links
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore trusted organizations and tools that support the deaf, hard-of-hearing, and DeafBlind community.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900">CT Commission on the Deaf and Hearing Impaired</h4>
              <p className="mt-2 text-gray-600 text-sm">
                Official state commission providing resources and advocacy for Connecticut&apos;s deaf and hard-of-hearing community.
              </p>
              <a href="https://portal.ct.gov/AgingandDisability/Content-Pages/Commissions/Commission-on-the-Deaf-and-Hearing-Impaired" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 hover:text-blue-700 text-sm font-medium">
                Visit Website →
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900">American School for the Deaf</h4>
              <p className="mt-2 text-gray-600 text-sm">
                Educational institution serving deaf and hard-of-hearing students with comprehensive academic and support programs.
              </p>
              <a href="https://www.asd-1817.org/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 hover:text-blue-700 text-sm font-medium">
                Visit Website →
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900">National Association of the Deaf</h4>
              <p className="mt-2 text-gray-600 text-sm">
                National civil rights organization advocating for and empowering the deaf and hard-of-hearing community.
              </p>
              <a href="https://www.nad.org/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 hover:text-blue-700 text-sm font-medium">
                Visit Website →
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200" id="research">
              <h4 className="font-semibold text-gray-900">Hearing Loss Association of America</h4>
              <p className="mt-2 text-gray-600 text-sm">
                National organization providing information, education, support, and advocacy for people with hearing loss.
              </p>
              <a href="https://www.hearingloss.org/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 hover:text-blue-700 text-sm font-medium">
                Visit Website →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}