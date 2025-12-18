import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import MissionSection from '@/components/about/MissionSection';
import LeadershipSection from '@/components/about/LeadershipSection';
import BoardOfDirectors from '@/components/about/BoardOfDirectors';
import ServicesOverview from '@/components/about/ServicesOverview';
import HistorySection from '@/components/about/HistorySection';

export const metadata: Metadata = {
  title: "About Us | Communication Access Network",
  description: "Learn about CAN's mission to provide auxiliary support services to deaf, hard-of-hearing, and DeafBlind individuals in Connecticut. Meet our Board of Directors and leadership team.",
};

export default function About() {
  return (
    <div className="bg-white">
      <AboutHero />
      <MissionSection />
      <LeadershipSection />
      <BoardOfDirectors />
      <ServicesOverview />
      <HistorySection />
      
      {/* Sponsors & Partnerships Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sponsors & Partnerships</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              CAN has numerous sponsorships and relationships that enable us to serve Connecticut's deaf, hard-of-hearing, and DeafBlind community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Community Partners */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Community Partners</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">Within the Deaf Community, CAN works closely with:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Connecticut Association of the Deaf</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>DeafBlind Association of Connecticut</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Connecticut Council of Organizations Serving the Deaf (CCOSD)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Walk for Hearing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Bureau of Deaf, DeafBlind Services under the State Aging and Disability Services (ADS)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Bureau of Educational Services for the Blind (BESB)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Several Area Aging Agencies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Robinson House - Connecticut Mental Health Association</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Five Connecticut Independent Living Centers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Connecticut Hands and Voices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>American School for the Deaf</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Financial Sponsors */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Financial Sponsors</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">CAN's sponsors include:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="font-semibold">Hartford Foundation for Public Giving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="font-semibold">Eugene G. & Margaret M. Blackford Memorial Fund fbo Blind, Bank of America, N.A., Co-Trustee</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="font-semibold">Bank of America</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="font-semibold">KeyBank</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Numerous local businesses including T-Mobile and other technology-related services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Special Events */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 mr-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Special Events</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
                <h4 className="font-bold text-gray-900 mb-2">Annual DeafBlind Walk</h4>
                <p className="text-gray-700">
                  CAN sponsors an Annual DeafBlind Walk each September, bringing together community members to raise awareness and support for DeafBlind individuals in Connecticut.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <h4 className="font-bold text-gray-900 mb-2">Periodic Special Events</h4>
                <p className="text-gray-700">
                  Throughout the year, CAN hosts special fundraising events, including recognition events such as the fundraiser honoring the retiring volunteer CAN Director, Sue Pedersen.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Interested in Becoming a Sponsor?</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Join our network of partners dedicated to supporting Connecticut's deaf, hard-of-hearing, and DeafBlind community.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Us to Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Help us continue supporting Connecticut's deaf, hard-of-hearing, and DeafBlind community. 
            Every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-involved"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Involved
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}