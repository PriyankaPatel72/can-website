import Image from 'next/image';

interface BoardMember {
  name: string;
  position: string;
  image: string;
  description: string;
  color: string;
}

const boardMembers: BoardMember[] = [
  {
    name: "LeRoy Terrio Jr.",
    position: "Vice Chair",
    image: "/photots/LeRoy.jpg",
    color: "blue-600",
    description: "LeRoy Terrio Jr was born and raised in Baton Rouge, Louisiana. He graduated as valedictorian from the Louisiana School for the Deaf. He later earned a Bachelor of Science in Accounting from the Rochester Institute of Technology, followed by an MBA in Finance from Pace University in Pleasantville, New York. Mr. Terrio began his professional career at GTE Corporation, where he served in various accounting positions. When GTE merged into Verizon Communications, he continued his tenure there, later transitioning to Idearc Media, a spinoff from Verizon. Over his 31-year career, he held several supervisory roles, with assignments in Stamford, Connecticut, and Dallas, Texas. Notably, during his time at Verizon Communications, he played a key role in streamlining financial reporting systems, which improved the efficiency and accuracy of the company's financial operations. Mr. Terrio has participated in various community activities alongside his corporate responsibilities. He served on the Jean Massieu Foundation board in Arlington from 2005 to 2017 and later joined several Connecticut-based organizations for the Deaf, including the Connecticut Association of the Deaf (CAD), Connecticut Council of Organizations Serving the Deaf (CCOSD), and Connecticut Retirement Community (CRC), where he held roles such as treasurer. Since 2021, he has been a board member of the Communication Advocacy Network and became vice president in 2024. LeRoy Terrio Jr currently resides in Ridgefield, Connecticut, with his wife, Suzanne. They are the proud parents of two adult children, both Children of Deaf Adults (CODA), who have achieved national certification as interpreters."
  },
  {
    name: "Cheri Hembree",
    position: "Assistant Director",
    image: "/Cherrie.jpeg",
    color: "blue-600",
    description: "Cheri Hembree is an assistant director at the Communication Advocacy Network (CAN), where she has worked for nearly 10 years. She holds a Bachelor of Arts degree in psychology from Gallaudet University in Washington, DC. As a social worker and manager, she is recognized for supporting numerous specialized programs and providing care to members of the Deaf and hard of hearing community—including older adults, DeafBlind and Hard of Hearing Blind individuals, and people with additional disabilities—in Seattle, WA, and Hartford, CT, for over 30 years. Beyond her work in social services, she enjoyed her office roles in the police department and the stock marketing industry in Seattle. Cheri has frequently dedicated her time to supporting emergency services in unexpected situations involving elderly and DeafBlind clients. Whenever she has the opportunity for a long weekend, she enjoys traveling with her husband—mostly throughout New England and upstate New York—to places near or on rivers, seas, and oceans, and waterfalls! She loves viewing the stunning fall foliage, exploring as many lighthouses as possible, and attending air shows, especially those featuring planes with Pratt & Whitney engines. Cheri also enjoys hiking trails and watching wildlife, taking in the beauty and tranquility of nature."
  },
  {
    name: "Wade Terry",
    position: "Board Member",
    image: "/Wade.jpeg",
    color: "orange-600",
    description: "Retired Counselor , Connecticut Commission on the Deaf & Hearing Impaired Past Board Chair, Northwestern CT Community College Advisory Board Board Member, Communication Advocacy Network Board of Directors ( Finance Committee, Audit Review Committee, Nomination Committee Chair, Search Committee Chair)"
  },
  {
    name: "Roselle Weiner",
    position: "Secretary",
    image: "/Roselle.png",
    color: "teal-600",
    description: "As Grants Manager for CAN, Roselle brings over a decade of dedicated grant-writing experience. Since beginning to volunteer in 2011, she has successfully secured funding from various sources, including Aging in America Agencies, the Hartford Foundation for Public Giving, and Donor Advised Funds. Previously a teacher, librarian, and learning resource center manager at the American School for the Deaf from 1976-2011. Graduate of City College of NY, Syracuse University, and Teachers College Columbia University."
  },
  {
    name: "Debbie Boswell",
    position: "Treasurer",
    image: "/Debbie.png",
    color: "yellow-600",
    description: "Retired Residential Counselor from the American School for the Deaf with extensive experience supporting students in residential settings."
  },
  {
    name: "Sue Pedersen",
    position: "Board Member",
    image: "/Sue.jpeg",
    color: "purple-600",
    description: "Retired Director of Communication Access Network, INC. (CAN). Certified Deaf Interpreter and retired Communication Officer of CT Commission on the Deaf and Hearing Impaired."
  },
  {
    name: "Maura McGuire",
    position: "Board Member",
    image: "/Maura.png",
    color: "red-600",
    description: "Maura has been a professional in the field of Deaf Education for 38 years as a teacher, consultant, administrator, board member and past Chair of the Collegiate Education of the Deaf/Hard of Hearing at Northwest Connecticut Community College. Past chair and current member of the Walk4Hearing Committee for the CT Walk4Hearing, past member of the National Association of the Deaf, A.G. Bell and CT Relay. Maura has been integral in creating and implementing self-advocacy programs for students who are Deaf/Hard of Hearing and Deaf-Blind, creating community partnerships to provide students work related internships. When not working to further access and opportunities for students, she can be found with a camera in her hand capturing memories with her family while enjoying Mother Nature."
  },
  {
    name: "Lisa Flaherty-Vaughn",
    position: "Board Member",
    image: "/photots/Lisa.jpeg",
    color: "indigo-600",
    description: "Dedicated board member contributing expertise and passion to CAN's mission of supporting the deaf and hard-of-hearing community."
  }
];

// Helper function to get initials from name
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

export default function BoardOfDirectors() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Board of Directors</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            The Communication Advocacy Network has nine (9) members on the Board of Directors. They meet quarterly every year to discuss the needs of Connecticut's DeafBlind and Deaf Elderly population. Topics include fundraising strategies, and reviewing CAN's services.
          </p>
          <div className="bg-blue-100 rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-gray-700">
              <strong>Board Meetings:</strong> Meetings occur at CAN's office in Hartford, CT. Please contact at{" "}
              <a href="mailto:info@cancorp.org" className="text-blue-600 hover:text-blue-800 underline">
                info@cancorp.org
              </a>{" "}
              or call{" "}
              <a href="tel:860-566-9488" className="text-blue-600 hover:text-blue-800 underline">
                860-566-9489
              </a>{" "}
              if you would like to attend a board meeting.
            </p>
          </div>
        </div>

        {/* Board Chair - Edward Peltier */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Board Chair</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 relative bg-gray-100 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <Image
                  src="/photots/EdPhoto.jpeg"
                  alt="Edward F. Peltier, Board Chair"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Edward F. Peltier</h4>
                <p className="text-green-600 font-semibold">Board Chair</p>
                <p className="text-gray-600 text-sm mt-2">2003 - Present</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-700 mb-4">
                  Ed F. Peltier worked as the Executive Director at the American School for the Deaf from 2006-2014 and the Executive Director at the Vermont Center for the Deaf and Hard of Hearing from 2003-2006. Before that he was the Assistant Executive Director at the American School for the Deaf, 1982-2003 and the Principal, Dean of Students, and teacher at the Kentucky School for the Deaf from 1972-1982.
                </p>
                <p className="text-gray-700 mb-4">
                  He has been heavily involved in his community as the Board Chair CAN, 2003 to present, member of the Board for CT Mental Health Association 2014-2024, a member of Deaf Rec-Spirit Club-Deaf Rec, 2006-present. He has been Chair and parish council president for his local church from 1996-1998 and a Paul Harris Fellow of the Rotary.
                </p>
                <p className="text-gray-700">
                  While doing all that, he has been married to his wife, Carol, for 53 years and they have 4 children and 6 grandchildren. He can be found gardening, fishing, golfing and other sports when not with family or at meetings for CAN.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Board Members */}
        <div className="grid md:grid-cols-2 gap-8">
          {boardMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-32 h-32 mx-auto mb-4 relative bg-gray-100 rounded-full border-4 border-gray-200 overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.position}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 128px"
                    />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center bg-${member.color} text-white text-3xl font-bold`}>
                      {getInitials(member.name)}
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                <p className={`text-${member.color} font-semibold`}>{member.position}</p>
              </div>
              <p className="text-gray-700 text-sm">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}