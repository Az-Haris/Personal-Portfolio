import profileImage from "../assets/images/profile.jpg";

const AboutMe = () => {
  return (
    <section className="about-section bg-[#0B1221] text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            I&apos;m MD Alimuzzaman Haris, a Computer Science student at Trust
            University, Barishal, specializing in MERN stack development. With
            an entrepreneurial mindset, I aim to expand into various industries.
            <br />
            I&apos;m skilled in electrical work, electronics, plumbing, IT
            support, problem-solving, and creative thinking. My goal is to
            establish <span className="italic">Az Industries BD</span>, a company that will oversee multiple
            subsidiaries in diverse sectors.
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
