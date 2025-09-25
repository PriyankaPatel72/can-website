import { Metadata } from "next";
import Link from "next/link";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Get Involved | Communication Access Network",
  description: "Join CAN's mission to support Connecticut's deaf, hard-of-hearing, and DeafBlind community. Volunteer, donate, or explore career opportunities to make a difference.",
};

export default function GetInvolved() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Get Involved
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
              Join us in making a meaningful difference in the lives of Connecticut's deaf, 
              hard-of-hearing, and DeafBlind community members. Every contribution matters.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ways to Make a Difference
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you have time to volunteer, resources to donate, or skills to contribute, 
              there are many ways to support our mission.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              
              {/* Donate */}
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-blue-600 mx-auto mb-6">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Donate
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Your financial support helps us provide essential services, maintain programs, 
                  and expand our reach to serve more community members in need.
                </p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">How Your Donation Helps:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Fund home assistance services</li>
                    <li>• Support Circle of Friends events</li>
                    <li>• Provide consumer support resources</li>
                    <li>• Maintain accessible facilities</li>
                    <li>• Training for staff and volunteers</li>
                  </ul>
                </div>
                <div className="mt-8 text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>

              {/* Volunteer */}
              <div className="bg-green-50 rounded-lg p-8 border border-green-200">
                <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-green-600 mx-auto mb-6">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Volunteer
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Share your time and skills to directly impact lives. Our volunteers are the 
                  heart of our organization, providing essential support and companionship.
                </p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Volunteer Opportunities:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Home assistance companion</li>
                    <li>• Event planning and coordination</li>
                    <li>• Transportation assistance</li>
                    <li>• Administrative support</li>
                    <li>• Peer mentoring</li>
                  </ul>
                </div>
                <div className="mt-8 text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Join Our Team
                  </Link>
                </div>
              </div>

              {/* Career Opportunities */}
              <div className="bg-purple-50 rounded-lg p-8 border border-purple-200">
                <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-purple-600 mx-auto mb-6">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6m0 0v6m0-6H8m0 0V6m0 0v6m0-6h8m-8 6v4a2 2 0 002 2h4a2 2 0 002-2v-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Career Opportunities
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Build a meaningful career while making a difference. Join our professional 
                  team and help expand our services and impact in the community.
                </p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Potential Positions:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Support services coordinator</li>
                    <li>• Community outreach specialist</li>
                    <li>• Program assistant</li>
                    <li>• Administrative roles</li>
                    <li>• ASL interpretation services</li>
                  </ul>
                </div>
                <div className="mt-8 text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    View Openings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Showcase */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              See the Impact in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our volunteers and community members make a real difference every day. 
              See how you can be part of this meaningful work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/photots/Resized Morrison JWJ  watching speaker April 2025 DSC01621.jpg"
                alt="Community member actively participating in CAN event"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold mb-1">Community Participation</h3>
                <p className="text-sm opacity-90">Engaged members attending events and workshops</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/photots/Resized DB SSP Michelle DSC01622 copy.jpg"
                alt="Michelle providing dedicated volunteer support services"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold mb-1">Dedicated Volunteers</h3>
                <p className="text-sm opacity-90">Committed individuals making a daily difference</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/photots/Resized NY man tribute Sue DSC05413 copy.jpg"
                alt="Sue participating in community tribute event"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold mb-1">Community Events</h3>
                <p className="text-sm opacity-90">Special celebrations and meaningful gatherings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your Impact
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              When you get involved with CAN, you become part of a community that creates 
              real, lasting change in people's lives.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <p className="text-gray-900 font-semibold mb-2">Years of Service</p>
                <p className="text-gray-600 text-sm">Supporting Connecticut's deaf, hard-of-hearing, and DeafBlind community</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                <p className="text-gray-900 font-semibold mb-2">Individuals Served</p>
                <p className="text-gray-600 text-sm">Community members supported through our programs and services</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
                <p className="text-gray-900 font-semibold mb-2">Lives Changed</p>
                <p className="text-gray-600 text-sm">Immeasurable impact through independence and community connection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Make a Difference?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-200">
              Every person who gets involved helps us build a more inclusive and 
              supportive community for all.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us Today
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-200"
              >
                Learn More About CAN <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}