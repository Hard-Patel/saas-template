import { Users } from "lucide-react";
import Marquee from "react-fast-marquee";

const reviews = [
  {
    name: "Mike Peterson",
    role: "CEO",
    image: "https://i.pravatar.cc/100?img=12",
    review:
      "From day one, we saw improvements in our workflows. Zuro’s automation features are a total game-changer.",
  },
  {
    name: "Daniel Ward",
    role: "Manager",
    image: "https://i.pravatar.cc/100?img=20",
    review:
      "Our daily operations are now seamless, thanks to Zuro’s intuitive interface and real-time updates.",
  },
  {
    name: "Carla Brown",
    role: "HR Manager",
    image: "https://i.pravatar.cc/100?img=30",
    review:
      "I can't imagine going back to manual processes ever again. Zuro helped us cut our overhead by 30%!",
  },
  {
    name: "Linda Chen",
    role: "Designer",
    image: "https://i.pravatar.cc/100?img=40",
    review:
      "We used to spend hours sorting data. With Zuro, everything is automated and stress-free.",
  },
];

export const CustomerReviews = () => {
  return (
    <div className="px-4 sm:px-8 xl:px-[var(--horizontal-padding)] my-16">
      <section className="grid grid-cols-1 xl:grid-cols-2 min-h-[85vh] bg-teal-900 text-white rounded-3xl xl:px-10 py-8 xl:py-0 gap-0">
        {/* Left side - heading */}
        <div className="flex flex-col col-span-1 justify-center space-y-6 ml-4 px-3 sm:px-10">
          <div className="inline-flex items-center bg-lime-400 text-teal-900 px-4 py-2 rounded-full w-fit">
            <Users />
          </div>
          <h2 className="text-4xl sm:text-[52px] font-bold leading-tight text-left">
            What Our Customers
            <br />
            Are Saying
          </h2>
          <p className="text-gray-300 text-lg text-left">
            Create an account to receive a customized
            <br /> onboarding experience.
          </p>
        </div>

        {/* Right side - reviews */}
        <div className="hidden relative xl:flex overflow-hidden">
          <div className="flex-1 flex-col max-w-40">
            <Marquee className="w-full h-full" direction="up">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="my-2 w-60 bg-white/10 rounded-2xl py-5 px-2 shadow-lg border border-white/10 hover:bg-white/20"
                >
                  {/* user info */}
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-left text-gray-300">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  {/* review text */}
                  <p className="text-gray-200 text-sm text-left leading-relaxed">
                    {review.review}
                  </p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="relative flex xl:hidden overflow-hidden mt-12">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 md:w-48 bg-gradient-to-r from-teal-900 to-transparent z-2" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 md:w-48 bg-gradient-to-l from-teal-900 to-transparent z-2" />

          <Marquee className="w-full">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="my-2 mx-2 h-full w-60 bg-white/10 rounded-2xl py-5 px-2 shadow-lg border border-white/10 hover:bg-white/20"
              >
                {/* user info */}
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-left text-gray-300">
                      {review.role}
                    </p>
                  </div>
                </div>
                {/* review text */}
                <p className="text-gray-200 text-sm text-left leading-relaxed">
                  {review.review}
                </p>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="relative flex xl:hidden overflow-hidden mt-4">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-18 sm:w-32 md:w-48 bg-gradient-to-r from-teal-900 to-transparent z-2" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-18 sm:w-32 md:w-48 bg-gradient-to-l from-teal-900 to-transparent z-2" />

          <Marquee className="w-full" direction="right">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="my-2 mx-2 h-full w-60 bg-white/10 rounded-2xl py-5 px-2 shadow-lg border border-white/10 hover:bg-white/20"
              >
                {/* user info */}
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-left text-gray-300">
                      {review.role}
                    </p>
                  </div>
                </div>
                {/* review text */}
                <p className="text-gray-200 text-sm text-left leading-relaxed">
                  {review.review}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
};
