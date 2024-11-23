import React from "react";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";
import Header from "../components/Header";
import Footer from "../components/Footer"; 
import MobileNavbar from "../components/MobileNavbar";

const Home = () => {
  const profiles = [
    {
      name: "A. M.",
      experience: "4 years",
      bio: "Optimized transportation systems at Walmart Labs.",
      skills: ["Java", "Spring", "GCP", "SQL"],
      profileUrl: "/user1.jpg",
      commitment: ["Full-time"], // Can be an array
    },
    {
      name: "B. S.",
      experience: "3 years",
      bio: "Developed cloud-based solutions at Google.",
      skills: ["Python", "AWS", "Django", "SQL"],
      profileUrl: "/user.jpg",
      commitment: ["Full-time", "Part-time"], // Both options
    },
    {
      name: "C. T.",
      experience: "5 years",
      bio: "Worked on AI-powered applications at Tesla.",
      skills: ["C++", "TensorFlow", "Docker", "Kubernetes"],
      profileUrl: "/user1.jpg",
      commitment: ["Full-time"],
    },
    {
      name: "D. W.",
      experience: "2 years",
      bio: "Created mobile apps for startups.",
      skills: ["Flutter", "Dart", "Firebase", "JavaScript"],
      profileUrl: "/user.jpg",
      commitment: ["Part-time"],
    },
    {
      name: "B. S.",
      experience: "3 years",
      bio: "Developed cloud-based solutions at Google.",
      skills: ["Python", "AWS", "Django", "SQL"],
      profileUrl: "/user.jpg",
      commitment: ["Full-time", "Part-time"],
    },
    {
      name: "C. T.",
      experience: "5 years",
      bio: "Worked on AI-powered applications at Tesla.",
      skills: ["C++", "TensorFlow", "Docker", "Kubernetes"],
      profileUrl: "/user.jpg",
      commitment: ["Full-time"],
    },
    {
      name: "D. W.",
      experience: "2 years",
      bio: "Created mobile apps for startups.",
      skills: ["Flutter", "Dart", "Firebase", "JavaScript"],
      profileUrl: "/user.jpg",
      commitment: ["Part-time"],
    }
    // Add more profiles here
  ];
  

  return (
    <div>
      <MobileNavbar />
      <div className="relative flex">
        <Sidebar />
        <div className="flex-1">
          <div className="relative flex">
            <div
              id="search-results"
              className="h-[calc(100vh-4rem)] flex-1 overflow-scroll pb-20 sm:h-screen sm:pb-0 w-full"
            >
              <Header />
              <div className="p-5 pb-0">
                <div className="m-0.5 sm:mx-5 pb-0">
                  <ul role="list" className="grid gap-5 grid-cols-1 lg:grid-cols-2">
                    {profiles.map((profile, index) => (
                      <ProfileCard key={index} {...profile} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
