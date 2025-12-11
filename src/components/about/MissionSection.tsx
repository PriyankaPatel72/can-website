export default function MissionSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At CAN, we are dedicated to supporting individuals with DeafBlindness, vision loss, and hearing loss by fostering independence, inclusivity, and community connection. Our programs are designed to address unique needs and help build a brighter future for all.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission Statement</h3>
            <p className="text-gray-700 mb-6">
              Our mission is to empower individuals with disabilities by providing tailored assistance, fostering community, and promoting independence.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </span>
                <div>
                  <strong className="text-gray-900">Empathy:</strong>
                  <span className="text-gray-700"> We approach every individual with understanding and compassion.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </span>
                <div>
                  <strong className="text-gray-900">Inclusivity:</strong>
                  <span className="text-gray-700"> We strive to create spaces where everyone feels welcome.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </span>
                <div>
                  <strong className="text-gray-900">Empowerment:</strong>
                  <span className="text-gray-700"> We encourage independence and self-confidence.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </span>
                <div>
                  <strong className="text-gray-900">Community:</strong>
                  <span className="text-gray-700"> We believe in the power of connection and mutual support.</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Impact</h3>
            <p className="text-gray-700 mb-6">
              For over 20 years, CAN has supported individuals with vision loss by offering programs such as household care assistance, inclusive social events, and application guidance for essential services. These initiatives are driven by our belief that everyone deserves to live a full and independent life, regardless of their challenges.
            </p>
            <p className="text-gray-700">
              By collaborating with volunteers, partners, and the broader community, we continue to expand our reach and impact throughout Connecticut.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}