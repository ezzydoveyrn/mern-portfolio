import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Neptune Connect Cyber",
      role: "Software Development Company",
      image:
        "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-1/469203145_122098782404666540_8898110837583494516_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeFA6vu2M5pTIXBTulfzldENRuXqfJZEahhG5ep8lkRqGIF82L-RXaNH9B_GsddQfE6sxvGhS0MprOwvW8NUdArJ&_nc_ohc=5ZScikrAZNEQ7kNvwH9QG06&_nc_oc=Adn0b5dlpoFsy5gRE5vEcVB6OkL8WmA_yJ3idxDpPxgpcZAhp3l5SfdpDc8pWKbZxbI&_nc_pt=5&_nc_zt=24&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=oifhouMNdqi7s0HLYFRf3w&oh=00_Aff9nsZA6H1OhCkeW7BHTLrJ-MdvJ19HAM7B384Ns-wqdA&oe=68F99536",
      text: "Working with Ezekiel was an incredible experience! He delivered our web app on time, with clean code and great communication throughout.",
      rating: 5,
    },
    {
      name: "Asati Danstan",
      role: "CEO, Stan Bank Limited",
      image:
        "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/278189472_1158804574676005_2735208096983892117_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeECoogOgZXPSXYj_xS1mqVdCTr3hXXgnqcJOveFdeCep0_SuspcFW_h0lDkw-4uLzg6e4VsOkeBObQHNYOgbhZC&_nc_ohc=ITcEe5Wl1UQQ7kNvwElgnJl&_nc_oc=AdnWD8QhW7SyoL-3b3VGGoR3ktUROV-0Be_1b8tO76Ssn06n1Ht0rJjPBqUrvxcQ4vM&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=1UngfbVgd0p_jPPzqbliJg&oh=00_Afc-b7Xu3tBFX7lcdckdqgs2uaeEZPxvLWsFdGYrFu1Atw&oe=68F967D0",
      text: "Ezzy is a talented developer who pays attention to detail. Our website performance improved significantly after his optimizations!",
      rating: 4,
    },
    {
      name: "Zion Networks",
      role: "Internet Company",
      image:
        "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-1/481332728_1051647733675753_8640578523435921684_n.jpg?stp=c320.0.832.832a_dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeHuQsxBQwsKRlhexHlxtB6TijYvnehmsaKKNi-d6GaxopRum_cCSfindkwCU6INg-kjcYgsJUpHOZyJz2_V-cVa&_nc_ohc=fCA0QukWi5YQ7kNvwEkPjW4&_nc_oc=AdmBW9Z9yopVkkLo8TWJhmB3rLYSZF7mimrZEwbX1Nv_LazopMsCjPNFUoTa19fqEHA&_nc_pt=5&_nc_zt=24&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=MUIAEOWtm5w6Nju7ntrDjw&oh=00_AfcpuQQi-MshD1tX9nc_LCqWd55v7FYZUYi5j7x5IVt2Kw&oe=68F98FEC",
      text: "He’s not just a coder — he’s a problem solver. I loved how he turned my ideas into a working product so smoothly.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
        <p className="text-gray-400 mb-12">
          A few kind words from people I’ve worked with.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-indigo-500 object-cover"
              />
              <p className="text-gray-300 text-sm mb-4 italic">
                “{review.text}”
              </p>

              <div className="flex justify-center mb-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className="text-indigo-400 text-sm">{review.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
