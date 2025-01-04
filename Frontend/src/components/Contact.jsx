import Swal from 'sweetalert2'
import { Send, Phone, MapPin, Mail } from "lucide-react";
import GitHub from "../assets/social-icons/github.png";
import LinkedIn from "../assets/social-icons/linkedin.png";
import Facebook from "../assets/social-icons/facebook.png";
import WhatsApp from "../assets/social-icons/whatsapp.png";

export default function Contact() {
  

  const handleSubmit = e =>{
    e.preventDefault();

    Swal.fire({
      title: "Successfully Sent Message!",
      icon: "success",
      draggable: true
    });
  }


  const socialLinks = [
    {
      name: "GitHub",
      image: GitHub,
      link: "https://github.com/Az-Haris",
    },
    {
      name: "LinkedIn",
      image: LinkedIn,
      link: "https://www.linkedin.com/in/alimuzzaman-haris",
    },
    {
      name: "Facebook",
      image: Facebook,
      link: "https://www.facebook.com/alimuzzaman.haris",
    },
    {
      name: "WhatsApp",
      image: WhatsApp,
      link: "https://wa.me/+8801405742311",
    },
  ];

  return (
    <main className="pt-20 lg:pt-[0rem] bg-[#0f1629] text-white min-h-screen">
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-lg">
                  Have a question or want to work together? Drop us a message!
                </p>
              </div>

              {/* Social Links */}
              <div className="relative mb-8 sm:mb-12 max-w-xl flex gap-5">
                {socialLinks.map((link, idx) => (
                  <a key={idx} href={link.link} target="_blank">
                    <img
                      className="w-12 shadow-lg transform hover:scale-110 transition duration-200"
                      src={link.image}
                      alt={link.name}
                    />
                  </a>
                ))}
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">mdalimuzzaman437@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-400">+880 1405-742311</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">23/3, Hospital Road, Nalchity, Jhalokati.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Status Message */}
              {status && (
                <div className="mt-4 text-center text-gray-300">
                  <p>{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
