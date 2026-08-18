"use client";
import Link from "next/link";
import { Globe, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-primary-dark text-white border-t border-[#222222]">
      <div className="container mx-auto px-6 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-6 lg:pr-16 lg:col-span-2">
            <Link href="/" className="text-3xl font-display font-black tracking-tighter">
              IronX
            </Link>
            <p className="text-muted leading-relaxed max-w-sm">
              A Place Where Strength and Community Grow Together.
            </p>
            <div className="mt-4 max-w-sm">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-transparent border-b border-[#333] pb-3 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-[#555] mb-4"
              />
              <button className="bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-display font-bold mb-2">Services</h4>
            <Link href="#" className="text-muted hover:text-white transition-colors text-sm">Personal Training</Link>
            <Link href="#" className="text-muted hover:text-white transition-colors text-sm">Group Fitness Classes</Link>
            <Link href="#" className="text-muted hover:text-white transition-colors text-sm">Strength and Conditioning</Link>
            <Link href="#" className="text-muted hover:text-white transition-colors text-sm">Cardio Training</Link>
            <Link href="#" className="text-muted hover:text-white transition-colors text-sm">Functional Training</Link>
            <Link href="#" className="text-muted hover:text-white transition-colors text-sm">Wellness and Recovery</Link>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-display font-bold mb-2">Contacts</h4>
            <p className="text-muted text-sm leading-relaxed">
              27 Division St, New York,<br />
              NY 10002, USA
            </p>
            <p className="text-muted text-sm mt-2 hover:text-white transition-colors cursor-pointer">
              +1 800 123 456 789
            </p>
            <p className="text-white text-sm font-semibold hover:text-muted transition-colors cursor-pointer">
              ironx@gym.mail.com
            </p>
            
            <div className="flex gap-4 mt-6">
              <Link href="#" className="border border-[#333] p-3 hover:bg-white hover:text-black transition-colors">
                <Globe size={18} />
              </Link>
              <Link href="#" className="border border-[#333] p-3 hover:bg-white hover:text-black transition-colors">
                <Mail size={18} />
              </Link>
              <Link href="#" className="border border-[#333] p-3 hover:bg-white hover:text-black transition-colors">
                <Phone size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-[#222222] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#666]">
          <p>Copyright &copy; {new Date().getFullYear()} IronX by VibeCoding. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
          <div className="mt-4 md:mt-0 text-gray-500">
            Design by <span className="text-gray-400 hover:text-white hover:underline transition-colors">vutranpk</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
