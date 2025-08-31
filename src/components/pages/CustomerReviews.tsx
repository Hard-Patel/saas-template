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
    <div className="px-[var(--horizontal-padding)] my-16">
      <section className="h-[85vh] bg-teal-900 text-white rounded-3xl px-10 grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left side - heading */}
        <div className="flex flex-col col-span-1 justify-center space-y-6 ml-4">
          <div className="inline-flex items-center bg-lime-400 text-teal-900 px-4 py-2 rounded-full w-fit">
            <Users />
          </div>
          <h2 className="text-[52px] font-bold leading-tight text-left">
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
        <div className="relative flex overflow-hidden">
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
      </section>
    </div>
  );
};
