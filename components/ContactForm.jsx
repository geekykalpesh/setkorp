'use client'

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Badge } from "@/components/ui/badge";
import { LampContainer } from "@/components/ui/lamp";
import { SparklesCore } from "@/components/ui/sparkles-core";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "motion/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  // Removed manual event listeners to prevent conflict with lord-icon built-in triggers

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative bg-gradient-to-br from-[#2a8d8d]/5 to-[#ea6a61]/5">
      <LampContainer className="min-h-[80vh] max-w-[92%] sm:max-w-[96%] md:max-w-none mx-auto">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full absolute inset-0"
          particleColor="#ea6a61"
        />
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="text-center space-y-3 relative z-10">
          <Badge className="label px-4 py-2 bg-[#ea6a61] text-white border-0">
            CONTACT US
          </Badge>
          <h2 className="!text-white font-black">
            Let's Start Your Journey
          </h2>
          <p className="body max-w-2xl mx-auto !text-gray-200 font-medium">
            Ready to establish your business in Dubai? Get in touch with our experts today
          </p>
        </motion.div>
      </LampContainer>
      
      <div className="container mx-auto max-w-6xl py-8 px-4 relative z-10 -mt-40">

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="relative border-0 bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl">
            <GlowingEffect proximity={150} spread={40} />
            <CardHeader className="pb-4">
              <CardTitle className="h3">Send us a message</CardTitle>
              <CardDescription className="body-sm">We'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3">
                  <Input 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="h-10"
                  />
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="h-10"
                  />
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-10"
                  />
                  <Textarea 
                    placeholder="Tell us about your business needs..." 
                    rows={10}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="min-h-[150px]"
                  />
                  <AnimatedButton type="submit" className="w-full h-11">
                    Send Message
                  </AnimatedButton>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="relative border-0 bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl">
              <GlowingEffect proximity={100} spread={30} />
              <CardContent className="p-0 relative z-10">
                <video autoPlay loop muted playsInline className="w-full h-[350px] object-cover rounded-2xl -mt-6">
                  <source src="/assets/globe.mp4" type="video/mp4" />
                </video>
              </CardContent>
            </Card>
            
            <Card className="relative border-0 bg-white/95 backdrop-blur-sm shadow-xl rounded-xl hover:shadow-2xl transition-shadow cursor-pointer" data-lordicon-target>
              <GlowingEffect proximity={80} spread={25} />
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 flex items-center justify-center bg-[#ea6a61]/10 rounded-full"
                      onMouseEnter={(e) => e.currentTarget.querySelector('lord-icon')?.playerInstance?.playFromBeginning()}
                    >
                      <lord-icon
                        src="https://cdn.lordicon.com/wpsdctqb.json"
                        colors="primary:#ee6d66"
                        style={{width: '18px', height: '18px'}}
                      ></lord-icon>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Email</h4>
                      <p className="text-xs text-gray-600">info@setkorp.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 flex items-center justify-center bg-[#ea6a61]/10 rounded-full"
                      onMouseEnter={(e) => e.currentTarget.querySelector('lord-icon')?.playerInstance?.playFromBeginning()}
                    >
                      <lord-icon
                        src="https://cdn.lordicon.com/wtywrnoz.json"
                        colors="primary:#ee6d66"
                        style={{width: '18px', height: '18px'}}
                      ></lord-icon>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Call</h4>
                      <p className="text-xs text-gray-600">+971 4 XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 flex items-center justify-center bg-[#ea6a61]/10 rounded-full"
                      onMouseEnter={(e) => e.currentTarget.querySelector('lord-icon')?.playerInstance?.playFromBeginning()}
                    >
                      <lord-icon
                        src="https://cdn.lordicon.com/oeotfwsx.json"
                        colors="primary:#ee6d66"
                        style={{width: '18px', height: '18px'}}
                      ></lord-icon>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Visit</h4>
                      <p className="text-xs text-gray-600">Dubai, UAE</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
