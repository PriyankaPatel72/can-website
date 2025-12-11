export default function ServicesOverview() {
  const services = [
    {
      icon: "🏠",
      title: "Home Assistance Services",
      description: "In-home support services to help individuals maintain independence and quality of life in their own homes and communities.",
      bgColor: "bg-blue-600",
      textColor: "text-blue-600",
      hoverColor: "hover:bg-blue-700"
    },
    {
      icon: "👥",
      title: "Circle of Friends Events",
      description: "Social gatherings and community events that foster connections and friendships among community members.",
      bgColor: "bg-green-600",
      textColor: "text-green-600",
      hoverColor: "hover:bg-green-700"
    },
    {
      icon: "🤝",
      title: "Consumer Support Group",
      description: "Peer support groups providing a safe space for sharing experiences, resources, and mutual support among community members.",
      bgColor: "bg-purple-600",
      textColor: "text-purple-600",
      hoverColor: "hover:bg-purple-700"
    }
  ];

  return (
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
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
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
  );
}