import Link from 'next/link';
import PhotoGallery from '@/components/ui/PhotoGallery';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Connecticut Association of the Nonprofits
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            CAN is a member-driven advocacy and capacity building organization working to advance the common interests of Connecticut nonprofits and strengthen the sector's ability to serve the public good.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Involved
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

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Home Assistance Services</h3>
              <p className="text-gray-600">
                Providing in-home support services to help individuals maintain independence and quality of life in their own homes.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Circle of Friends Events</h3>
              <p className="text-gray-600">
                Community building events that bring people together to foster connections, support, and friendship within our community.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Consumer Support Groups</h3>
              <p className="text-gray-600">
                Peer-led support groups providing guidance, resources, and emotional support for individuals navigating various life challenges.
              </p>
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
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 font-semibold mb-2">Ongoing Program</div>
              <h3 className="text-xl font-bold mb-3">Peer Mentoring</h3>
              <p className="text-gray-600 mb-4">
                Connect with experienced mentors who provide guidance and support for personal and professional growth.
              </p>
              <Link href="/get-involved" className="text-blue-600 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-green-600 font-semibold mb-2">June 22, 2025</div>
              <h3 className="text-xl font-bold mb-3">Walk4Hearing</h3>
              <p className="text-gray-600 mb-4">
                Join us for our annual walk to raise awareness and funds for hearing health initiatives in our community.
              </p>
              <Link href="/get-involved" className="text-blue-600 font-semibold hover:underline">
                Register →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-purple-600 font-semibold mb-2">September 2025</div>
              <h3 className="text-xl font-bold mb-3">CAN 20th Anniversary</h3>
              <p className="text-gray-600 mb-4">
                Celebrate two decades of service with us at our special anniversary event featuring community stories and achievements.
              </p>
              <Link href="/get-involved" className="text-blue-600 font-semibold hover:underline">
                Save the Date →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Partners
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <h3 className="font-semibold text-lg mb-2">Bureau of Education and Services for the Blind</h3>
              <p className="text-gray-600 text-sm">Supporting vision services and accessibility</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-semibold text-lg mb-2">NCAAA</h3>
              <p className="text-gray-600 text-sm">National Council on Aging advocacy</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-semibold text-lg mb-2">Disability Rights Connecticut</h3>
              <p className="text-gray-600 text-sm">Legal advocacy and protection services</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-semibold text-lg mb-2">Connecticut Community Foundation</h3>
              <p className="text-gray-600 text-sm">Community development and grants</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-semibold text-lg mb-2">United Way</h3>
              <p className="text-gray-600 text-sm">Community support and fundraising</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-semibold text-lg mb-2">Hartford Foundation</h3>
              <p className="text-gray-600 text-sm">Grant funding and community investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Community in Action
          </h2>
          <PhotoGallery 
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
            columns={3}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8">
            Join our community of dedicated individuals working to strengthen Connecticut's nonprofit sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Volunteer Today
            </Link>
            <Link
              href="/about"
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
