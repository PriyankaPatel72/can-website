import Link from 'next/link';
import Image from 'next/image';
import PhotoCarousel from '@/components/ui/PhotoCarousel';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Communication Advocacy Network 
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Empowering Connecticut's hard-of-hearing, Blind, and DeafBlind community through advocacy, and communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>


      {/* Trust & Transparency Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex-shrink-0">
          <Image
        src="/Platinum.jpeg"
        alt="Candid Platinum Transparency Seal 2025"
        width={200}
        height={200}
        className="rounded-lg shadow-lg"
          />
        </div>
        <div className="text-center md:text-left max-w-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
        We've earned our Platinum Seal of Transparency with Candid!
          </h3>
          <p className="text-gray-800 leading-relaxed mb-4">
        We earned a <strong>2025 Candid Platinum Seal of Transparency!</strong> Keep up with 
        our work in the community using the link below. It will give you unlimited access. 
        We rely on our profile to gather support; it enables funders and donors to find us 
        and learn about our impact.
          </p>
          <p className="text-gray-800 mb-6">
        Get updates on our impact through our <strong>Nonprofit Profile</strong>. We'll keep our 
        profile up to date so you can see what your donations help us accomplish.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="https://app.candid.org/profile/7515047/communication-advocacy-networkcorp/?pkId=5f922927-2c8b-43cc-bdfe-46522ee49774&isActive=true"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          View Our Candid Profile
            </a>
            <Link
          href="/about"
          className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
          Learn More About CAN
            </Link>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Home Assistance Services</h3>
              <p className="text-gray-800">
                Providing in-home support services to help individuals maintain independence and quality of life in their own homes.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Consumer Support Groups</h3>
              <p className="text-gray-800">
                Peer-led support groups providing guidance, resources, and emotional support for individuals navigating various life challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* Video Section */}
    <section className="-mt-10 pt-0 pb-3 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-5 md:p-8 shadow-xl border border-blue-900/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-white">
              <p className="text-sm uppercase tracking-[0.18em] text-blue-100 font-semibold">Community Voices</p>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold">A Word From Our Members</h3>
              <p className="mt-4 text-blue-100 leading-relaxed">
                "CAN helped me feel seen, supported, and connected. The services and people here
                made everyday communication easier and gave me confidence to participate in my community."
              </p>
              <p className="mt-3 text-sm font-semibold text-white/90">- CAN Community Member</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
              <div className="w-full max-w-[150px] md:max-w-[170px] overflow-hidden shadow-lg bg-white/20 border border-white/35">
                <video
                  className="w-full aspect-[9/16] object-contain"
                  controls
                  preload="metadata"
                >
                  <source src="/photots/HomePageVideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="w-full max-w-[150px] md:max-w-[170px] overflow-hidden shadow-lg bg-white/20 border border-white/35">
                <video
                  className="w-full aspect-[9/16] object-contain"
                  controls
                  preload="metadata"
                >
                  <source src="/Home page video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
              <div className="text-blue-700 font-bold mb-2">Ongoing Program</div>
              <h3 className="text-xl font-bold mb-3">Peer Mentoring</h3>
              <p className="text-gray-800 mb-4">
                Connect with experienced mentors who provide guidance and support for personal and professional growth.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
              <div className="text-green-700 font-bold mb-2">June 7, 2026</div>
              <h3 className="text-xl font-bold mb-3">Walk4Hearing</h3>
              <p className="text-gray-800 mb-4">
                Join us for our annual walk to raise awareness and funds for hearing health initiatives in our community.
              </p>
              <a
                href="https://www.walk4hearing.org/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                Walk4Hearing Website →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
              <div className="text-purple-700 font-bold mb-2">TBD</div>
              <h3 className="text-xl font-bold mb-3">CAN 20th Anniversary</h3>
              <p className="text-gray-800 mb-4">
                Celebrate two decades of service with us at our special anniversary event featuring community stories and achievements.
              </p>
              <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
                Contact Us →
              </Link>
            </div>
          </div>

          <div className="mt-10 mx-auto max-w-3xl bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 rounded-lg border border-gray-200 p-3 bg-gray-50">
                <Image
                  src="/photots/EventQrCode.jpeg"
                  alt="QR code for CAN event registration"
                  width={220}
                  height={220}
                  className="h-auto w-[180px] md:w-[220px]"
                />
              </div>

              <div className="text-center md:text-left">
                <p className="text-sm font-semibold text-blue-700 mb-2">Quick Registration</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Scan to Register for Events</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Use your phone camera to scan the QR code and access the latest CAN event details,
                  registration links, and updates.
                </p>
                <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
                  Need help registering? Contact us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">20+</div>
              <h3 className="text-xl font-semibold mb-2">Years of Service</h3>
              <p className="text-gray-800">Supporting Connecticut's deaf, hard-of-hearing, and DeafBlind community</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-green-600 mb-2">100+</div>
              <h3 className="text-xl font-semibold mb-2">Individuals Served</h3>
              <p className="text-gray-800">Community members supported through our programs and services</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-purple-600 mb-2">∞</div>
              <h3 className="text-xl font-semibold mb-2">Lives Changed</h3>
              <p className="text-gray-800">Immeasurable impact through independence and community connection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Community in Action
          </h2>
          <PhotoCarousel
            photos={[
              { src: '/photots/Resized Board DSC00295 copy.jpg', alt: 'CAN Board of Directors meeting' },
              { src: '/photots/Resized DB and SSP  DSC00321 copy (1).jpg', alt: 'DeafBlind support services in action' },
              { src: '/photots/Resized EP interpreter  April 2025 DSC01620-Enhanced-NR.jpg', alt: 'Educational program with interpreter' },
              { src: '/photots/Resized Maria DSC09139-Enhanced-NR copy.jpg', alt: 'Community member Maria receiving support' },
              { src: '/photots/Resized Morrison JWJ  watching speaker April 2025 DSC01621.jpg', alt: 'Morrison engaged in community discussion' },
              { src: '/photots/Resized DB SSP Michelle DSC01622 copy.jpg', alt: 'Michelle providing dedicated volunteer support' },
              { src: '/photots/Morrison LFV M April 2025 DSC01624.jpg', alt: 'Low vision services demonstration' },
              { src: '/photots/Resized NY man tribute Sue DSC05413 copy.jpg', alt: 'Community tribute and recognition event' },
              { src: '/photots/Resized DB and SSP  DSC00321 copy (1) (1).jpg', alt: 'Additional DeafBlind support services' }
            ]}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Connect with Us?
          </h2>
          <p className="text-xl mb-8">
            Reach out to learn more about our services and how we support Connecticut's deaf, hard-of-hearing, and DeafBlind residents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
