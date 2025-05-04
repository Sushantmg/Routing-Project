import React from 'react';


const About = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <h1 className="text-5xl font-bold text-blue-600 mt-5 sm:text-2xl">
        INTRODUCTION
      </h1>
      <p className="lg:px-2 lg:text-2xl font-medium text-gray-400 mt-5 sm:text-lg sm:px-6 pr-8 pl-8">
        I am a 20-year-old software engineering student at Gandaki College of Engineering and Science, 
        affiliated with Pokhara University. Originally from Khudi, Lamjung, I grew up in Pokhara,
        where I completed my SEE and +2 in science at Gandaki Boarding School. From a young age,
        I have been captivated by technology and innovation. I thrive on solving complex problems
        through code and have a deep passion for software development. My expertise lies in front-end 
        technologies like HTML and CSS, and I am currently mastering the MERN stack at Skill Shikshya 
        to build full-fledged web applications.
        <br />
        <br />
        Academically, I have always been a dedicated and high-achieving student.
        I secured excellent grades in both SEE and +2, excelling in subjects like mathematics and computer science, 
        which further fueled my passion for technology. My ability to grasp complex concepts and apply them
        practically has set me apart throughout my academic journey. At university, I actively participate in
        coding competitions, hackathons, and technical seminars to enhance my problem-solving and software 
        development skills.
      </p>
      <a 
        target="_blank" 
        rel="noopener noreferrer" 
        href="https://github.com/Sushantmg" 
        className="text-white inline-block bg-blue-600 mt-5 px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg font-medium"
      >
       <div className='flex gap-2'> Github</div>
      </a>
      <a 
        href="/contact" 
        className="inline-block bg-blue-600 mt-5 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg font-medium"
      >
        Contact Me
      </a>
    </div>
  );
}

export default About;
