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

      {/* Featured Resources */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Resources
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our most popular and impactual resources to get you started with effective advocacy.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900">
                    Advocacy Starter Guide
                  </h3>
                </div>
                <p className="mt-4 text-gray-600">
                  A comprehensive 50-page guide covering the fundamentals of effective advocacy, 
                  from planning your campaign to measuring impact.
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF • 2.1 MB</span>
                  <Link
                    href="#"
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                  >
                    Download
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 border border-green-200">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900">
                    Message Templates
                  </h3>
                </div>
                <p className="mt-4 text-gray-600">
                  Ready-to-use templates for emails, letters, social media posts, and press 
                  releases to communicate with officials and the public.
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-gray-500">ZIP • 12 templates</span>
                  <Link
                    href="#"
                    className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
                  >
                    Download
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 border border-purple-200">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900">
                    Research Toolkit
                  </h3>
                </div>
                <p className="mt-4 text-gray-600">
                  Tools and techniques for conducting policy research, analyzing data, and 
                  building evidence-based arguments for your advocacy campaigns.
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF • 1.8 MB</span>
                  <Link
                    href="#"
                    className="rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500"
                  >
                    Download
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="bg-gray-50 py-24 sm:py-32" id="education">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Resource Library
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Browse our comprehensive collection organized by category and topic.
            </p>
          </div>
          
          {/* Pamphlets */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Pamphlets & Educational Materials</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Auxiliary Support Services Overview</h4>
                    <p className="text-sm text-gray-500">PDF • 1.2 MB</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive overview of CAN's auxiliary support services and how to access them.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Download →
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Communication Access Guide</h4>
                    <p className="text-sm text-gray-500">PDF • 2.8 MB</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Guide for deaf, hard-of-hearing, and DeafBlind individuals on communication access rights and resources.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Download →
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Home Assistance Services</h4>
                    <p className="text-sm text-gray-500">PDF • 0.9 MB</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Information about in-home support services to help maintain independence and quality of life.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Download →
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Circle of Friends Events</h4>
                    <p className="text-sm text-gray-500">PDF • 1.1 MB</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Information about social gatherings and community events that foster connections and friendships.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Download →
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Consumer Support Groups</h4>
                    <p className="text-sm text-gray-500">PDF • 0.7 MB</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Details about peer support groups and how they provide mutual support among community members.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Download →
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">How to Apply for Services</h4>
                    <p className="text-sm text-gray-500">PDF • 0.5 MB</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step guide on how to apply for CAN's services and what to expect during the process.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Download →
                </button>
              </div>
            </div>
          </div>

          {/* Practical Guides */}
          <div className="mt-16" id="guides">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Practical Action Guides</h3>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Meeting with Elected Officials
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Tips for scheduling, preparing for, and conducting effective meetings with legislators.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-500 font-medium text-sm">
                  Download Guide →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Organizing Community Forums
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Planning checklist and facilitation guide for hosting productive community discussions.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-500 font-medium text-sm">
                  Download Guide →
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Grassroots Fundraising
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Strategies for raising funds to support your advocacy campaigns and organization.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-500 font-medium text-sm">
                  Download Guide →
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Public Speaking for Advocates
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Techniques for confident public speaking, from town halls to legislative hearings.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-500 font-medium text-sm">
                  Download Guide →
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Writing Policy Briefs
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Format and structure for creating compelling policy briefs that influence decision-makers.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-500 font-medium text-sm">
                  Download Guide →
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Volunteer Recruitment
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Best practices for finding, training, and retaining volunteers for your advocacy efforts.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-500 font-medium text-sm">
                  Download Guide →
                </Link>
              </div>
            </div>
          </div>

          {/* Helpful Links */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Helpful Links</h3>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m0-3.838l4-4a4 4 0 00-5.656-5.656l-1.102 1.102m1.414 1.414l2.828 2.828" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">CT Commission on the Deaf and Hearing Impaired</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Official state commission providing resources and advocacy for Connecticut's deaf and hard-of-hearing community.
                </p>
                <a href="https://portal.ct.gov/AgingandDisability/Content-Pages/Commissions/Commission-on-the-Deaf-and-Hearing-Impaired" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Visit Website →
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m0-3.838l4-4a4 4 0 00-5.656-5.656l-1.102 1.102m1.414 1.414l2.828 2.828" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Connecticut Association of the Deaf</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Statewide organization advocating for the rights and interests of deaf and hard-of-hearing individuals in Connecticut.
                </p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Visit Website →
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m0-3.838l4-4a4 4 0 00-5.656-5.656l-1.102 1.102m1.414 1.414l2.828 2.828" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">American School for the Deaf</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Educational institution serving deaf and hard-of-hearing students with comprehensive academic and support programs.
                </p>
                <a href="https://www.asd-1817.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Visit Website →
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m0-3.838l4-4a4 4 0 00-5.656-5.656l-1.102 1.102m1.414 1.414l2.828 2.828" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">National Association of the Deaf</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  National civil rights organization advocating for and empowering the deaf and hard-of-hearing community.
                </p>
                <a href="https://www.nad.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Visit Website →
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m0-3.838l4-4a4 4 0 00-5.656-5.656l-1.102 1.102m1.414 1.414l2.828 2.828" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Hearing Loss Association of America</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  National organization providing information, education, support and advocacy for people with hearing loss.
                </p>
                <a href="https://www.hearingloss.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Visit Website →
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m0-3.838l4-4a4 4 0 00-5.656-5.656l-1.102 1.102m1.414 1.414l2.828 2.828" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Walk4Hearing Connecticut</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Annual fundraising and awareness event supporting hearing loss advocacy and research in Connecticut.
                </p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Visit Website →
                </a>
              </div>
            </div>
          </div>

          {/* Position Papers */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Position Papers</h3>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Communication Access in Healthcare</h4>
                    <p className="text-sm text-gray-500">Position Paper • March 2024</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  CAN's official position on ensuring communication accessibility in healthcare settings for deaf, 
                  hard-of-hearing, and DeafBlind patients.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read Paper →
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Educational Equity and Inclusion</h4>
                    <p className="text-sm text-gray-500">Position Paper • January 2024</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Our stance on ensuring equal educational opportunities and inclusive learning environments 
                  for students with hearing and vision challenges.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read Paper →
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Employment and Workplace Accommodation</h4>
                    <p className="text-sm text-gray-500">Position Paper • October 2023</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  CAN's position on workplace accommodations, equal employment opportunities, and breaking down 
                  barriers to career advancement.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read Paper →
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Technology and Digital Accessibility</h4>
                    <p className="text-sm text-gray-500">Position Paper • August 2023</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Our position on ensuring digital technologies and online platforms are accessible to 
                  individuals with hearing and vision disabilities.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read Paper →
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Housing and Independent Living</h4>
                    <p className="text-sm text-gray-500">Position Paper • June 2023</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  CAN's stance on accessible housing options and support services that promote independent 
                  living for individuals with dual sensory challenges.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read Paper →
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Emergency Preparedness and Response</h4>
                    <p className="text-sm text-gray-500">Position Paper • April 2023</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Our position on ensuring emergency communication systems and disaster response plans 
                  are inclusive of deaf, hard-of-hearing, and DeafBlind community needs.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read Paper →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Reports */}
      <section className="py-24 sm:py-32" id="research">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Research & Reports
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Data-driven insights and analysis to inform our advocacy strategies and service development.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  2024 State of Community Advocacy Report
                </h3>
                <p className="text-gray-600 mb-6">
                  Annual analysis of advocacy trends, success rates, and emerging challenges 
                  facing community organizations nationwide.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Published: January 2024</p>
                    <p className="text-sm text-gray-500">48 pages • PDF</p>
                  </div>
                  <Link
                    href="#"
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                  >
                    Download
                  </Link>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-8 border border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Digital Organizing Impact Study
                </h3>
                <p className="text-gray-600 mb-6">
                  Research on the effectiveness of digital advocacy tools and online organizing 
                  strategies in achieving policy outcomes.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Published: September 2023</p>
                    <p className="text-sm text-gray-500">32 pages • PDF</p>
                  </div>
                  <Link
                    href="#"
                    className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
                  >
                    Download
                  </Link>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-8 border border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Coalition Building Best Practices
                </h3>
                <p className="text-gray-600 mb-6">
                  Analysis of successful advocacy coalitions, examining factors that contribute 
                  to effective collaboration and sustained impact.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Published: June 2023</p>
                    <p className="text-sm text-gray-500">24 pages • PDF</p>
                  </div>
                  <Link
                    href="#"
                    className="rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500"
                  >
                    Download
                  </Link>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-8 border border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Community Engagement Trends 2023
                </h3>
                <p className="text-gray-600 mb-6">
                  Survey results and analysis of community participation patterns, barriers 
                  to engagement, and effective outreach strategies.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Published: March 2023</p>
                    <p className="text-sm text-gray-500">36 pages • PDF</p>
                  </div>
                  <Link
                    href="#"
                    className="rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500"
                  >
                    Download
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}