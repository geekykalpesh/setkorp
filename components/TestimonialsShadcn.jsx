'use client'

import { Badge } from "@/components/ui/badge";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "SetKorp made our business setup in Dubai seamless. Their expertise transformed the process into a smooth journey.",
    name: "Ahmed Al-Mansoori",
    designation: "CEO, Tech Innovations",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
  },
  {
    quote: "Outstanding service! The team's professionalism exceeded our expectations at every step.",
    name: "Sarah Johnson",
    designation: "Founder, Global Trading Co",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
  },
  {
    quote: "From consultation to execution, SetKorp delivered excellence and made the complex process simple.",
    name: "Mohammed Hassan",
    designation: "Director, Energy Solutions",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
  },
  {
    quote: "The best decision we made was partnering with SetKorp. Their transparency made all the difference.",
    name: "Emily Chen",
    designation: "Managing Partner, Consulting Firm",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
  },
];

export default function TestimonialsShadcn() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-6 space-y-4">
          <Badge className="label px-6 py-3 bg-[#ea6a61]/10 text-[#ea6a61] border-[#ea6a61]/20">
            TESTIMONIALS
          </Badge>
          <h2>
            What Our Clients Say
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Hear from businesses we've helped succeed in Dubai
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
