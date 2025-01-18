import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faUser, faCode, faMessage, faRobot ,faNoteSticky} from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom'
import './../index.css'


const Home = () => {
    const user = sessionStorage.getItem('name') || 'Guest';
  
    return (
      <section className="relative bg-black w-full h-[152vh] flex flex-col justify-between">
        <video
          className="absolute top-0 left-0 w-full h-[145vh] object-cover"
          src="https://cdn.pixabay.com/video/2020/04/18/36503-427607440_large.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
  
        <div className="h-[270vh] flex flex-col justify-around px-8 py-12 z-5">
          <div className="text-left text-white z-5">
            <h1 className="relative text-4xl font-bold mb-4">Welcome {user}!</h1>
            <p className="mb-[15vh] absolute h-[12vh] outline-2 outline-white bg-black text-[10vh] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
              Unfold the New
            </p> <br /><br /><br /><br />
            <p className="relative text-outline h-[14vh] bg-black text-[10vh] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
              World of Education
            </p>
          </div>
  
          <div className="flex justify-around">
            {/* Card 1: Enrollments */}
            <div className="h-[300px] w-[300px]">
              <a href="#" className="group relative block h-full w-full">
                <span className="rounded-lg absolute inset-0 border-2 border-dashed border-white"></span>
                <div className="rounded-lg relative flex h-full transform items-end border-2 border-white hover:border-black bg-[#FFAAAA] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="h-full w-full flex flex-col items-center justify-center transition-opacity group-hover:absolute group-hover:opacity-0">
                    <FontAwesomeIcon icon={faCode} className="text-[80px] p-4" />
                    <h2 className="text-2xl font-medium">Enrollments</h2>
                  </div>
                  <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                    <h3 className="mt-4 text-xl font-medium sm:text-2xl">Compete, Code, Conquer</h3>
                    <p className="mt-4 text-sm sm:text-base">
                      Join the best minds in the industry to tackle challenges, develop innovative solutions, and push the limits of your coding skills.
                    </p>
                    <p className="mt-8 font-bold">Learn more</p>
                  </div>
                </div>
              </a>
            </div>
  
            {/* Card 2: Profile */}
            <div className="h-[300px] w-[300px]">
              <a href="#" className="group relative block h-full w-full">
                <span className="rounded-lg absolute inset-0 border-2 border-dashed border-white"></span>
                <div className="rounded-lg relative flex h-full transform items-end border-2 border-white hover:border-black bg-[#73BBC9] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="h-full w-full flex flex-col items-center justify-center transition-opacity group-hover:absolute group-hover:opacity-0">
                    <FontAwesomeIcon icon={faUser} className="text-[80px] p-4" />
                    <h2 className="text-2xl font-medium">Profile</h2>
                  </div>
                  <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                    <h3 className="mt-4 text-xl font-medium sm:text-2xl">Your Personal Space</h3>
                    <p className="mt-4 text-sm sm:text-base">
                      Manage your account, update your details, and explore your activities. This is your hub for all personal and professional engagements.
                    </p>
                    <p className="mt-8 font-bold">Learn more</p>
                  </div>
                </div>
              </a>
            </div>
  
            {/* Card 3: Code */}
            <div className="h-[300px] w-[300px]">
              <a href="#" className="group relative block h-full w-full">
                <span className="rounded-lg absolute inset-0 border-2 border-dashed border-white"></span>
                <div className="rounded-lg relative flex h-full transform items-end border-2 border-white hover:border-black bg-[#F7E987] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="h-full w-full flex flex-col items-center justify-center transition-opacity group-hover:absolute group-hover:opacity-0">
                    <FontAwesomeIcon icon={faComputer} className="text-[80px] p-4" />
                    <h2 className="text-2xl font-medium">Code</h2>
                  </div>
                  <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                    <h3 className="mt-4 text-xl font-medium sm:text-2xl">Coding Platform</h3>
                    <p className="mt-4 text-sm sm:text-base">
                      A coding platform where members can collaborate and develop projects together.
                    </p>
                    <p className="mt-8 font-bold">Read more</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
  
          <div className="flex justify-around">
            {/* Card 4: ChatBot */}
            <div className="h-[300px] w-[300px]">
              <a href="#" className="group relative block h-full w-full">
                <span className="rounded-lg absolute inset-0 border-2 border-dashed border-white"></span>
                <div className="rounded-lg relative flex h-full transform items-end border-2 border-white hover:border-black bg-[#8431d6] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="h-full w-full flex flex-col items-center justify-center transition-opacity group-hover:absolute group-hover:opacity-0">
                    <FontAwesomeIcon icon={faRobot} className="text-[80px] p-4" />
                    <h2 className="text-2xl font-medium">ChatBot</h2>
                  </div>
                  <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                    <h3 className="mt-4 text-xl font-medium sm:text-2xl">AI Chat Bot</h3>
                    <p className="mt-4 text-sm sm:text-base">
                      An AI assistant that helps members by answering questions, providing information, and facilitating discussions.
                    </p>
                    <p className="mt-8 font-bold">Read more</p>
                  </div>
                </div>
              </a>
            </div>
  
            {/* Card 5: Note Maker */}
            <div className="h-[300px] w-[300px]">
              <a href="#" className="group relative block h-full w-full">
                <span className="rounded-lg absolute inset-0 border-2 border-dashed border-white"></span>
                <div className="rounded-lg relative flex h-full transform items-end border-2 border-white hover:border-black bg-[#d6a231] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="h-full w-full flex flex-col items-center justify-center transition-opacity group-hover:absolute group-hover:opacity-0">
                    <FontAwesomeIcon icon={faNoteSticky} className="text-[80px] p-4" />
                    <h2 className="text-2xl font-medium">Note Maker</h2>
                  </div>
                  <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                    <h3 className="mt-4 text-xl font-medium sm:text-2xl">AI Note Maker</h3>
                    <p className="mt-4 text-sm sm:text-base">
                      A tool that helps members create and organize notes on various topics.
                    </p>
                    <p className="mt-8 font-bold">Read more</p>
                  </div>
                </div>
              </a>
            </div>
  
            {/* Card 6: Community */}
            <div className="h-[300px] w-[300px]">
              <a href="#" className="group relative block h-full w-full">
                <span className="rounded-lg absolute inset-0 border-2 border-dashed border-white"></span>
                <div className="rounded-lg relative flex h-full transform items-end border-2 border-white hover:border-black bg-[#90B77D] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="h-full w-full flex flex-col items-center justify-center transition-opacity group-hover:absolute group-hover:opacity-0">
                    <FontAwesomeIcon icon={faMessage} className="text-[80px] p-4" />
                    <h2 className="text-2xl font-medium">Community</h2>
                  </div>
                  <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                    <h3 className="mt-4 text-xl font-medium sm:text-2xl">Communicate</h3>
                    <p className="mt-4 text-sm sm:text-base">
                      Communicate and collaborate in global chats.
                    </p>
                    <p className="mt-8 font-bold">Read more</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
  
        <footer className="w-full text-center py-4 bg-gray-900 text-white">
          <p>&copy; All rights in the name of Edu-Space ~ Published by Team Code Hawks</p>
        </footer>
      </section>
    );
  };
  
export default Home