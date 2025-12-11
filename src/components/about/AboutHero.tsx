import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
      <div className="absolute inset-0">
        <Image
          src="/photots/Resized Board DSC00295 copy.jpg"
          alt="CAN Board of Directors meeting"
          fill
          className="object-cover opacity-30"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">About CAN</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Empowering Connecticut's DeafBlind and Hard of Hearing community through support, advocacy, and connection.
        </p>
      </div>
    </section>
  );
}