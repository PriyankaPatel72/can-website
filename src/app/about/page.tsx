import { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Us | Communication Access Network",
  description: "Learn about CAN's mission to provide auxiliary support services to deaf, hard-of-hearing, and DeafBlind individuals in Connecticut. Meet our Board of Directors.",
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              About CAN
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Discover the story behind Communication Access Network and meet our dedicated 
              board members who are working to empower individuals with hearing and vision challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Lives Through Connection
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              At CAN, we are dedicated to supporting individuals with DeafBlindness, vision loss, and 
              hearing loss by fostering independence, inclusivity, and community connection. Our 
              programs are designed to address unique needs and help build a brighter future for all.
            </p>
            <div className="mt-12 bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                Our mission is to empower individuals with disabilities by providing tailored assistance, 
                fostering community, and promoting independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Photo Showcase */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/photots/Resized Board DSC00295 copy.jpg"
              alt="CAN Board of Directors in meeting"
              width={1200}
              height={600}
              className="w-full h-96 object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Our Leadership Team</h3>
              <p className="text-xl opacity-90">Dedicated board members guiding CAN's mission</p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Board of Directors
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our dedicated board members bring diverse expertise and unwavering commitment 
              to CAN's mission.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col bg-white rounded-lg p-8 shadow-sm">
                <dt className="text-xl font-bold leading-7 text-blue-600 mb-4">
                  Empathy
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We approach every individual with understanding and compassion, recognizing 
                    that each person's journey is unique and deserving of respect.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col bg-white rounded-lg p-8 shadow-sm">
                <dt className="text-xl font-bold leading-7 text-blue-600 mb-4">
                  Inclusivity
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We strive to create spaces where everyone feels welcome, valued, and 
                    included regardless of their abilities, background, or circumstances.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col bg-white rounded-lg p-8 shadow-sm">
                <dt className="text-xl font-bold leading-7 text-blue-600 mb-4">
                  Empowerment
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We encourage independence and self-confidence by providing tools, resources, 
                    and support that enable individuals to achieve their goals.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col bg-white rounded-lg p-8 shadow-sm">
                <dt className="text-xl font-bold leading-7 text-blue-600 mb-4">
                  Community
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We believe in the power of connection and work to build strong, supportive 
                    networks that enrich the lives of all community members.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Board of Directors
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet the dedicated leaders who guide CAN's mission and ensure we continue to 
              serve our community with excellence and compassion.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            
            {/* Board Chair - Featured */}
            <div className="mb-16 bg-blue-50 rounded-lg p-8 border border-blue-200">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-3xl">EP</span>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-900">Edward Peltier</h3>
                  <p className="text-blue-600 font-medium text-lg mb-4">Board Chair</p>
                  <p className="text-gray-700 leading-relaxed">
                    Retired Executive Director of the American School for the Deaf. Brings decades 
                    of experience in deaf education and community leadership to guide CAN's strategic direction.
                  </p>
                </div>
              </div>
            </div>

            {/* Vice Chair - Featured */}
            <div className="mb-16 bg-green-50 rounded-lg p-8 border border-green-200">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-3xl">LT</span>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-900">LeRoy Terrio Jr.</h3>
                  <p className="text-green-600 font-medium text-lg mb-4">Vice Chair</p>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <p>
                      LeRoy Terrio Jr was born and raised in Baton Rouge, Louisiana. He graduated as valedictorian 
                      from the Louisiana School for the Deaf. He later earned a Bachelor of Science in Accounting 
                      from the Rochester Institute of Technology, followed by an MBA in Finance from Pace University 
                      in Pleasantville, New York.
                    </p>
                    <p>
                      Mr. Terrio began his professional career at GTE Corporation, where he served in various 
                      accounting positions. When GTE merged into Verizon Communications, he continued his tenure 
                      there, later transitioning to Idearc Media, a spinoff from Verizon. Over his 31-year career, 
                      he held several supervisory roles, with assignments in Stamford, Connecticut, and Dallas, Texas. 
                      Notably, during his time at Verizon Communications, he played a key role in streamlining 
                      financial reporting systems, which improved the efficiency and accuracy of the company's 
                      financial operations.
                    </p>
                    <p>
                      In addition to his corporate career, Mr. Terrio has a strong record of community service. 
                      From 2005 to 2017, he served on the board of the Jean Massieu Foundation in Arlington, Texas. 
                      After moving to Connecticut, he joined the board of the Connecticut Association of the Deaf, 
                      where he continues to contribute his expertise.
                    </p>
                    <p>
                      LeRoy Terrio Jr currently resides in Ridgefield, Connecticut, with his wife, Suzanne. 
                      They are the proud parents of two adult children, both Children of Deaf Adults (CODA), 
                      who have achieved national certification as interpreters.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Board Members Grid */}
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2">
              
              {/* Sue Pedersen */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-2xl">SP</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Sue Pedersen</h3>
                  <p className="text-purple-600 font-medium mb-3">Board Member</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Retired Director of Communication Access Network, INC. (CAN). Certified Deaf Interpreter 
                    and retired Communication Officer of CT Commission on the Deaf and Hearing Impaired.
                  </p>
                </div>
              </div>

              {/* Roselle Weiner */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-2xl">RW</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Roselle Weiner</h3>
                  <p className="text-teal-600 font-medium mb-3">Secretary</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    As Grants Manager for CAN, Roselle brings over a decade of dedicated grant-writing experience. 
                    Since beginning to volunteer in 2011, she has successfully secured funding from various sources, 
                    including Aging in America Agencies, the Hartford Foundation for Public Giving, and Donor Advised 
                    Funds. Previously a teacher, librarian, and learning resource center manager at the American School 
                    for the Deaf from 1976-2011. Graduate of City College of NY, Syracuse University, and Teachers 
                    College Columbia University.
                  </p>
                </div>
              </div>

              {/* Debbie Boswell */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-yellow-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-2xl">DB</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Debbie Boswell</h3>
                  <p className="text-yellow-600 font-medium mb-3">Treasurer</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Retired Residential Counselor from the American School for the Deaf with extensive 
                    experience supporting students in residential settings.
                  </p>
                </div>
              </div>

              {/* Maura McGuire */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-2xl">MM</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Maura McGuire</h3>
                  <p className="text-red-600 font-medium mb-3">Board Member</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Maura has been a professional in the field of Deaf Education for 38 years as a teacher, 
                    consultant, administrator, board member and past Chair of the Collegiate Education of 
                    the Deaf/Hard of Hearing at Northwest Connecticut Community College. Past chair and current 
                    member of the Walk4Hearing Committee for the CT Walk4Hearing, past member of the National 
                    Association of the Deaf, A.G. Bell and CT Relay. Maura has been integral in creating and 
                    implementing self-advocacy programs for students who are Deaf/Hard of Hearing and Deaf-Blind, 
                    creating community partnerships to provide students work related internships. When not working 
                    to further access and opportunities for students, she can be found with a camera in her hand 
                    capturing memories with her family while enjoying Mother Nature.
                  </p>
                </div>
              </div>

              {/* Lisa Flaherty-Vaughn */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-2xl">LF</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Lisa Flaherty-Vaughn</h3>
                  <p className="text-indigo-600 font-medium mb-3">Board Member</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Dedicated board member contributing expertise and passion to CAN's mission 
                    of supporting the deaf and hard-of-hearing community.
                  </p>
                </div>
              </div>

              {/* Wade Terry */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-2xl">WT</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Wade Terry</h3>
                  <p className="text-orange-600 font-medium mb-3">Board Member</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Committed board member bringing valuable perspective and dedication 
                    to advancing CAN's community support initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Programs & Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive support services designed to promote independence and community engagement.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              
              {/* Home Assistance Services */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Assistance Services</h3>
                <p className="text-gray-600">
                  In-home support services to help individuals maintain independence and quality of 
                  life in their own homes and communities.
                </p>
              </div>

              {/* Circle of Friends Events */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Circle of Friends Events</h3>
                <p className="text-gray-600">
                  Social gatherings and community events that foster connections and friendships 
                  among community members.
                </p>
              </div>

              {/* Consumer Support Group */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Consumer Support Group</h3>
                <p className="text-gray-600">
                  Peer support groups providing a safe space for sharing experiences, resources, 
                  and mutual support among community members.
                </p>
              </div>
            </div>

            {/* How to Apply */}
            <div className="mt-16 bg-blue-50 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Apply for Services</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Getting started with CAN's services is simple. We're here to help you navigate 
                  the application process and connect you with the right resources.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                  >
                    Contact Us Today
                  </a>
                  <a
                    href="/services"
                    className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
                  >
                    Learn About Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Our History
            </h2>
            <div className="prose prose-lg prose-blue">
              <p className="text-lg leading-8 text-gray-600 mb-6">
                For over 20 years, CAN has supported individuals with vision loss by offering programs 
                such as household care assistance, inclusive social events, and application guidance for 
                essential services. These initiatives are driven by our belief that everyone deserves to 
                live a full and independent life, regardless of their challenges.
              </p>
              <p className="text-lg leading-8 text-gray-600 mb-6">
                By collaborating with volunteers, partners, and the broader community, we continue to 
                expand our reach and impact. Our journey began with a simple recognition: that individuals 
                who are deaf, hard-of-hearing, or DeafBlind deserve comprehensive support services that 
                address their unique needs and promote independence.
              </p>
              <p className="text-lg leading-8 text-gray-600 mb-6">
                Over the years, we have grown from a small grassroots organization to a respected provider 
                of auxiliary support services. We have built strong partnerships with statewide agencies, 
                developed innovative programs, and created a community where individuals feel valued, 
                supported, and empowered to achieve their goals.
              </p>
              <p className="text-lg leading-8 text-gray-600">
                As we look toward the future, CAN remains committed to our founding principles while 
                continuously evolving to meet the changing needs of our community. Our 20th anniversary 
                celebration in September 2025 will mark not just our past achievements, but our ongoing 
                commitment to empowering lives through connection and support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}