import React from "react";

export default function CoursesGrid() {
  return (
    <>

      <div className="ag-format-container mx-auto max-w-[1142px] px-4">
        {/* Separator Heading */}
        <div className="w-full mt-8 mb-6">
          <h2 className="text-3xl font-extrabold text-white tracking-tight border-b-2 border-[#952aff] pb-2">
            Sakshi is technically sound in: 
          </h2>
        </div>
        <div className="ag-courses_box flex flex-wrap items-start py-12">
          {/* Course Items */}
          <div className="ag-courses_item basis-[calc(33.33333%-30px)] m-[0_15px_30px] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <a href="#" className="ag-courses-item_link relative block p-[30px_20px] bg-[#121212] overflow-hidden rounded-3xl">
              <div className="ag-courses-item_bg absolute top-[-75px] right-[-75px] h-[128px] w-[128px] rounded-full transition-transform duration-500 ease-in-out z-1 bg-[#f9b234]"></div>
              <div className="ag-courses-item_title relative z-2 min-h-[87px] mb-[25px] font-bold text-[30px] text-white">
                C++<br></br>OOPs
              </div>
              <div className="ag-courses-item_date-box relative z-2 text-[18px] text-white">
                <span className="ag-courses-item_date font-bold text-[#f9b234] transition-colors duration-500 ease-in-out">
                  primary (core competencies)
                </span>
              </div>
            </a>
          </div>

          <div className="ag-courses_item basis-[calc(33.33333%-30px)] m-[0_15px_30px] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <a href="#" className="ag-courses-item_link relative block p-[30px_20px] bg-[#121212] overflow-hidden rounded-3xl">
              <div className="ag-courses-item_bg absolute top-[-75px] right-[-75px] h-[128px] w-[128px] rounded-full transition-transform duration-500 ease-in-out z-1 bg-[#3ecd5e]"></div>
              <div className="ag-courses-item_title relative z-2 min-h-[87px] mb-[25px] font-bold text-[30px] text-white">
                DBMS<br></br>SQL
              </div>
              <div className="ag-courses-item_date-box relative z-2 text-[18px] text-white">
                <span className="ag-courses-item_date font-bold text-[#f9b234] transition-colors duration-500 ease-in-out">
                  primary (core competencies)
                </span>
              </div>
            </a>
          </div>

          <div className="ag-courses_item basis-[calc(33.33333%-30px)] m-[0_15px_30px] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <a href="#" className="ag-courses-item_link relative block p-[30px_20px] bg-[#121212] overflow-hidden rounded-3xl">
              <div className="ag-courses-item_bg absolute top-[-75px] right-[-75px] h-[128px] w-[128px] rounded-full transition-transform duration-500 ease-in-out z-1 bg-[#e44002]"></div>
              <div className="ag-courses-item_title relative z-2 min-h-[87px] mb-[25px] font-bold text-[30px] text-white">
                JavaScript <br></br> Three.js
              </div>
              <div className="ag-courses-item_date-box relative z-2 text-[18px] text-white">
                <span className="ag-courses-item_date font-bold text-[#f9b234] transition-colors duration-500 ease-in-out">
                  primary (core competencies)
                </span>
              </div>
            </a>
          </div>

          <div className="ag-courses_item basis-[calc(33.33333%-30px)] m-[0_15px_30px] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <a href="#" className="ag-courses-item_link relative block p-[30px_20px] bg-[#121212] overflow-hidden rounded-3xl">
              <div className="ag-courses-item_bg absolute top-[-75px] right-[-75px] h-[128px] w-[128px] rounded-full transition-transform duration-500 ease-in-out z-1 bg-[#952aff]"></div>
              <div className="ag-courses-item_title relative z-2 min-h-[87px] mb-[25px] font-bold text-[30px] text-white">
                Java <br></br> Python
              </div>
              <div className="ag-courses-item_date-box relative z-2 text-[18px] text-white">
                <span className="ag-courses-item_date font-bold text-[#f9b234] transition-colors duration-500 ease-in-out">
                  intermediate (working knowledge)
                </span>
              </div>
            </a>
          </div>

          <div className="ag-courses_item basis-[calc(33.33333%-30px)] m-[0_15px_30px] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <a href="#" className="ag-courses-item_link relative block p-[30px_20px] bg-[#121212] overflow-hidden rounded-3xl">
              <div className="ag-courses-item_bg absolute top-[-75px] right-[-75px] h-[128px] w-[128px] rounded-full transition-transform duration-500 ease-in-out z-1 bg-[#cd3e94]"></div>
              <div className="ag-courses-item_title relative z-2 min-h-[87px] mb-[25px] font-bold text-[30px] text-white">
                React <br></br>Tailwind CSS 
              </div>
              <div className="ag-courses-item_date-box relative z-2 text-[18px] text-white">
                <span className="ag-courses-item_date font-bold text-[#f9b234] transition-colors duration-500 ease-in-out">
                  intermediate (working knowledge)
                </span>
              </div>
            </a>
          </div>

          <div className="ag-courses_item basis-[calc(33.33333%-30px)] m-[0_15px_30px] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <a href="#" className="ag-courses-item_link relative block p-[30px_20px] bg-[#121212] overflow-hidden rounded-3xl">
              <div className="ag-courses-item_bg absolute top-[-75px] right-[-75px] h-[128px] w-[128px] rounded-full transition-transform duration-500 ease-in-out z-1 bg-[#4c49ea]"></div>
              <div className="ag-courses-item_title relative z-2 min-h-[87px] mb-[25px] font-bold text-[30px] text-white">
                Solidity <br></br> Web3
              </div>
              <span className="ag-courses-item_date font-bold text-[#f9b234] transition-colors duration-500 ease-in-out">
                intermediate (working knowledge)
              </span>
            </a>
          </div>

          <div className="ag-courses_item basis-[calc(33.33333%-30px)] m-[0_15px_30px] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <a href="#" className="ag-courses-item_link relative block p-[30px_20px] bg-[#121212] overflow-hidden rounded-3xl">
              <div className="ag-courses-item_bg absolute top-[-75px] right-[-75px] h-[128px] w-[128px] rounded-full transition-transform duration-500 ease-in-out z-1 bg-[#f9b234]"></div>
              <div className="ag-courses-item_title relative z-2 min-h-[87px] mb-[25px] font-bold text-[30px] text-white">
                Gsap<br></br> Node.js <br></br> Express.js <br></br> MongoDB
              </div>
              <span className="ag-courses-item_date font-bold text-[#f9b234] transition-colors duration-500 ease-in-out">
                familiar (basics)
              </span>
            </a>
          </div>

          {/* Separator Heading */}
          <div className="w-full mt-8 mb-6">
            <h2 className="text-3xl font-extrabold text-white tracking-tight border-b-2 border-[#952aff] pb-2">
              Professional Accomplishments & Qualities
            </h2>
          </div>

          {/* New row for the cards */}
          <div className="flex flex-wrap justify-center">
            <div className="ag-courses_item basis-[calc(33.33333%-30px)] m-[0_15px_30px] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <a href="#" className="ag-courses-item_link relative block p-[30px_20px] bg-[#121212] overflow-hidden rounded-3xl">
                <div className="ag-courses-item_bg absolute top-[-75px] right-[-75px] h-[128px] w-[128px] rounded-full transition-transform duration-500 ease-in-out z-1 bg-[#952aff]"></div>
                <div className="ag-courses-item_title relative z-2 min-h-[87px] mb-[25px] font-bold text-[30px] text-white">
                  🏆 IEEE Website Re-Engineering Challenge 
                </div>
                <div className="ag-courses-item_date-box relative z-2 text-[18px] text-white">
                  <span className="ag-courses-item_date font-bold text-[#f9b234] transition-colors duration-500 ease-in-out">
                    Secured 2nd place for innovative design and execution.
                  </span>
                </div>
              </a>
            </div>

            <div className="ag-courses_item basis-[calc(33.33333%-30px)] m-[0_15px_30px] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <a href="#" className="ag-courses-item_link relative block p-[30px_20px] bg-[#121212] overflow-hidden rounded-3xl">
                <div className="ag-courses-item_bg absolute top-[-75px] right-[-75px] h-[128px] w-[128px] rounded-full transition-transform duration-500 ease-in-out z-1 bg-[#952aff]"></div>
                <div className="ag-courses-item_title relative z-2 min-h-[87px] mb-[25px] font-bold text-[30px] text-white">
                  HashHack5 Hackathon Finalist
                </div>
                <div className="ag-courses-item_date-box relative z-2 text-[18px] text-white">
                  <span className="ag-courses-item_date font-bold text-[#f9b234] transition-colors duration-500 ease-in-out">
                    Project earned the highest rating among submissions.
                  </span>
                </div>
              </a>
            </div>

            <div className="ag-courses_item basis-[calc(33.33333%-30px)] m-[0_15px_30px] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <a href="#" className="ag-courses-item_link relative block p-[30px_20px] bg-[#121212] overflow-hidden rounded-3xl">
                <div className="ag-courses-item_bg absolute top-[-75px] right-[-75px] h-[128px] w-[128px] rounded-full transition-transform duration-500 ease-in-out z-1 bg-[#952aff]"></div>
                <div className="ag-courses-item_title relative z-2 min-h-[87px] mb-[25px] font-bold text-[30px] text-white">
                  Leadership & Organization
                </div>
                <div className="ag-courses-item_date-box relative z-2 text-[18px] text-white">
                  <span className="ag-courses-item_date font-bold text-[#f9b234] transition-colors duration-500 ease-in-out">
                    Core team member of NSC’25 and departmental events, driving planning and execution of academic & co-curricular programs.
                  </span>
                </div>
              </a>
            </div>

            <div className="ag-courses_item basis-[calc(33.33333%-30px)] m-[0_15px_30px] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <a href="#" className="ag-courses-item_link relative block p-[30px_20px] bg-[#121212] overflow-hidden rounded-3xl">
                <div className="ag-courses-item_bg absolute top-[-75px] right-[-75px] h-[128px] w-[128px] rounded-full transition-transform duration-500 ease-in-out z-1 bg-[#952aff]"></div>
                <div className="ag-courses-item_title relative z-2 min-h-[87px] mb-[25px] font-bold text-[30px] text-white">
                  Front-End Developer
                </div>
                <div className="ag-courses-item_date-box relative z-2 text-[18px] text-white">
                  <span className="ag-courses-item_date font-bold text-[#f9b234] transition-colors duration-500 ease-in-out">
                    Contributed to the official college website and also interned at DRDO as a front end developer, building responsive and user-centric interfaces.
                  </span>
                </div>
              </a>
            </div>

            <div className="ag-courses_item basis-[calc(33.33333%-30px)] m-[0_15px_30px] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <a href="#" className="ag-courses-item_link relative block p-[30px_20px] bg-[#121212] overflow-hidden rounded-3xl">
                <div className="ag-courses-item_bg absolute top-[-75px] right-[-75px] h-[128px] w-[128px] rounded-full transition-transform duration-500 ease-in-out z-1 bg-[#952aff]"></div>
                <div className="ag-courses-item_title relative z-2 min-h-[87px] mb-[25px] font-bold text-[30px] text-white">
                  Creative Expression
                </div>
                <div className="ag-courses-item_date-box relative z-2 text-[18px] text-white">
                  <span className="ag-courses-item_date font-bold text-[#f9b234] transition-colors duration-500 ease-in-out">
                    Performed at multiple open mic events as a writer & performance poet.
                  </span>
                </div>
              </a>
            </div>
            <div className="ag-courses_item basis-[calc(33.33333%-30px)] m-[0_15px_30px] rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <a href="#" className="ag-courses-item_link relative block p-[30px_20px] bg-[#121212] overflow-hidden rounded-3xl">
                <div className="ag-courses-item_bg absolute top-[-75px] right-[-75px] h-[128px] w-[128px] rounded-full transition-transform duration-500 ease-in-out z-1 bg-[#952aff]"></div>
                <div className="ag-courses-item_title relative z-2 min-h-[87px] mb-[25px] font-bold text-[30px] text-white">
                  Author 
                </div>
                <div className="ag-courses-item_date-box relative z-2 text-[18px] text-white">
                  <span className="ag-courses-item_date font-bold text-[#f9b234] transition-colors duration-500 ease-in-out">
                    Published a literary work in 2022.                  
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .ag-courses_item,
        .ag-courses-item_link {
          border-radius: 1.5rem !important; /* 24px, matches Tailwind's rounded-3xl */
        }
        .ag-courses-item_link:hover,
        .ag-courses-item_link:hover .ag-courses-item_date {
          text-decoration: none;
          color: #fff;
        }
        .ag-courses-item_link:hover .ag-courses-item_bg {
          transform: scale(10);
        }
        @media only screen and (max-width: 979px) {
          .ag-courses_item {
            flex-basis: calc(50% - 30px) !important;
          }
          .ag-courses-item_title {
            font-size: 24px !important;
          }
        }
        @media only screen and (max-width: 767px) {
          .ag-format-container {
            width: 96% !important;
          }
        }
        @media only screen and (max-width: 639px) {
          .ag-courses_item {
            flex-basis: 100% !important;
          }
          .ag-courses-item_title {
            min-height: 72px !important;
            line-height: 1 !important;
            font-size: 24px !important;
          }
          .ag-courses-item_link {
            padding: 22px 40px !important;
          }
          .ag-courses-item_date-box {
            font-size: 16px !important;
          }
        }
      `}</style>
    </>
  );
}
