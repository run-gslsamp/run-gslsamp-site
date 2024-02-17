import Title from "../../src/components/Title.js";
import diploma from "../../public/diploma.png";
import Image from 'next/image';

export default function Membership() {
    return (
      <>
        <main className="overflow-auto h-screen">
          <Title name={"MEMBERSHIP"}/>
          <div className="flex justify-center items-centerk">
            
            <section id='membership-top' className="relative w-3/4 h-[50vw]">
                
              <Image id='grad-image' className="relative w-full h-[50vw]" src={diploma} alt="Graduation Diploma" />
              <div id="mem-top-layout-mobile" className="absolute inset-0 bg-[#9D1739] bg-opacity-40 shadow-lg rounded-lg">
                <div id="" className="flex justify-center text-white">
                  <h2 className="drop-shadow-lg font-bold italic text-2xl p-[1rem]">
                    As an LSAMP Scholar, you will have outstanding 
                    opportunities to help you complete your undergraduate!
                  </h2>
                </div>

                <div id="mem-button" className="flex justify-center">
                  <div className="w-[8rem] text-center bg-[#9D1739] rounded-[.2rem] p-[.7rem] mt-[2rem] col-span-1 text-white font-bold drop-shadow-md hover:scale-105 transition">
                    <p className="drop-shadow-xl"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdPVNYfpvLnqMP5R4Kl8gzXeqNEDDrcF9bGsIx_HfRMaAFWrA/viewform">JOIN NOW!</a></p>
                  </div>
                </div>

                <div id="admission-section" className="flex justify-center row-span-3 pb-[5rem]">
                  <article className=" bg-white border-2 border-[#9D1739] rounded-lg shadow-md row-span-3 mt-[3rem] ">
                    <h1 className="text-center p-3 bg-[#9D1739] text-white font-bold drop-shadow-md rounded-tl-xlg rounded-tr-xlg">
                      Admission Requirements
                    </h1>

                    <h3 className="text-center text-[#9D1739] font-bold p-[.5rem] drop-shadow-md">
                      To become a LSAMP Scholar you must exhibit the following criteria:
                    </h3>

                    <p className="pl-[.5rem] font-bold drop-shadow-md">
                      1. Be an undergraduate student from an underrepresented ethnic or racial group.
                      <br/>2. Fully matriculated.
                      <br/>3. Majoring or intending to major in a non medical STEM field.
                    </p>

                    <p className="text-[#9D1739] drop-shadow-md text-md p-[.5rem]">
                      *if you do not fit these criteria, click <a className="underline hover:text-[#62e8c6]" href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:4c0a5d4f-0a0f-4433-ac13-e1580520d415">here</a> for more resources.
                    </p>

                    <h3 className="text-left text-[#9D1739] font-bold p-[.5rem] drop-shadow-md">
                      Eligible Majors
                    </h3>

                    <div className="grid grid-cols-3 pl-[.5rem] pb-[.5rem] text-sm">
                      <p className="">
                        <a className="majors" href="https://sasn.rutgers.edu/biology">Biology</a>
                        <br/> <a className="majors" href="https://sasn.rutgers.edu/chemistry">Chemistry</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/mathematics-and-computer-science">Computer Science</a>
                        <br/><a className="majors" href="https://soe.rutgers.edu/">Engineering</a>
                      </p>
                      <p className="">
                        <a  className="majors" href="https://sasn.rutgers.edu/earth-and-environmental-sciences">Environmental Science</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/earth-and-environmental-sciences">Environmental Geology</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/earth-environmental-science/ba-geoscience-geology">Geology</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/geoscience-geology-minor">Geoscience Engineering</a>
                      </p>
                      <p className="">
                        <a  className="majors" href="https://sasn.rutgers.edu/mathematics-and-computer-science">Mathematics</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/center-molecular-and-behavioral-neuroscience">Neuroscience and Behavior</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/academics/undergraduate-majors-minors">Science Education</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/node/318">Physics</a>
                      </p>
                    </div>
                  </article>
                </div>

                <div id="student-resources-mobile" className="">
                  <Title name={"STUDENT RESOURCES"} />
                  <div className="flex justify-center align-items-center">
                    <div className="bg-gray-200 flex flex-col justify-center rounded-lg w-full mb-[3rem]">
                      <section className="flex flex-col justify-items-center place-items-center mt-2">
                          <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md mt-[1rem]'>
                            <div className="sr-button">ALEKS Boot Camp | Academic Success Boot Camp</div>
                            <div className='description-container'>
                                <p>
                                    ALEKS trains students based on their performance on an initial pre-test.
                                    As they complete the training daily, the math level gradually progresses to their desired level of achievement.
                                    Scores are recorded and displayed until mastery is reached. To participate in the LSAMP ALEKS boot camp, please contact a LSAMP coordinator.<br /><br />
                                    The academic success boot camp is a unique program designed for students who may be struggling academically. This boot camp helps students develop the following skills:
                                    <br /><br />Time Management
                                    <br />Increasing GPA
                                    <br />Essential Study Skills
                                </p>
                            </div>
                            <button className='link-button'><a href='/contact'>Learn More</a></button>
                          </div>

                          <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md mt-[1rem]'>
                              <div className="sr-button">Visit the RU-Newark Learning Center</div>
                              <div className='description-container'>
                                  <p>
                                      Active and collaborative place to learn through a variety of peer-led academic support services that will enhance the success of students. We offer the following core support programs:

                                      <br/><br/>Peer-Led Tutoring:

                                      <br/>Walk-in Group Tutoring: Available on all campuses.
                                      <br/>One-on-One Tutoring: Available through our partnership with the SAS Honors Program.
                                      <br/>Academic Coaching:

                                      <br/><br/>Time Management
                                      <br/>Critical Thinking
                                      <br/>Study skills
                                  </p>
                              </div>
                              <button className='link-button'><a href='/contact'>Visit Today!</a></button>
                          </div>

                          <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md mt-[1rem]'>
                              <div className="sr-button">PLTL & Study Groups</div>
                              <div className='description-container'>
                                  <p>
                                      A Peer Led Team Leader is an LSAMP upperclassman assigned to a group of students who
                                      require guidance on how to navigate a STEM-related major, get help with homework assignments, 
                                      receive test review/prep for STEM courses, study skills, and progression and retention in a major. 
                                      Your PLTL will be available during scheduled PLTL sessions to assist with the STEM courses you may be 
                                      struggling with. The PLTL student will also be assigned to students who have been newly admitted in 
                                      LSAMP to assist throughout the semester.
                                  </p>
                              </div>
                              <button className='link-button'><a href='/contact'>Learn More</a></button>
                          </div>
                        
                          <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md mt-[1rem]'>
                              <div className="sr-button">GRE Prep & Applying to Graduate School</div>
                              <div className='description-container'>
                                  <p>
                                      Free GRE prep is offered to juniors and seniors preparing for the GRE exam. Meetings/events hosted by LSAMP for GRE and graduate school include:

                                      <br/><br/>1. Strategies for Taking the GRE Exam
                                      <br/>2. Full Length Past GRE Exams
                                      <br/>3. National Research Fellowship Program Workshops
                                      <br/>4. How to Apply to the NRFP
                                      <br/>5. Career Development Workshops
                                      <br/><br/>For more GRE prep visit these popular sites:
                                      
                                      <br/>
                                      <br/><a className='text-[#007bff] hover:underline' href='https://www.ets.org/gre.html'>ETS</a>
                                      <br/><a className='text-[#007bff] hover:underline' href='https://www.princetonreview.com/grad/gre-test-prep'>The Princeton Review</a>
                                      <br/><a className='text-[#007bff] hover:underline' href='https://www.manhattanprep.com/gre/'>Manhattan Prep</a>
                                  </p>
                              </div>
                              <button className='link-button'><a href='/contact'>Learn More</a></button>
                          </div>

                          <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md mt-[1rem]'>
                              <div className="sr-button">Bridge to the Doctorate</div>
                              <div className='description-container'>
                                  <p>
                                      The bridge to the Doctorate program is a fellowship which offers LSAMP graduates monetary support while they pursue a doctoral degree in STEM. The BD program provides LSAMP scholars financial support up to $32,000 for the first two years of graduate study including graduate school tuition and fees, as well as health insurance!

                                      <br /><br />Eligibility includes:

                                      <br /><br />Participation in LSAMP at an undergraduate institution. Bachelor's degree in a STEM field as well as being first time graduate student. 
                                      <br />U.S. citizen or permanent resident.
                                      <br />3.0 GPA 
                                      <br />Plans to pursue doctoral degree in STEM.
                                      <br />Gain admission to a STEM graduate program.
                                  </p>
                              </div>
                              <button className='link-button'><a href='/contact'>Learn More</a></button>
                          </div>

                          <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md mt-[1rem] mb-[2rem]'>
                              <div className="sr-button">How to Find your Academic Advisor(s)</div>
                              <div className='description-container'>
                                  <p>
                                      For students enrolled in Newark College of Arts and Science(NCAS) or University College Newark(UCN), the Office of Academic Services(OAS) will see students according to there last name. See the Advisor breakdown and how to make an appointment by clicking <a href='https://sasn.rutgers.edu/support'>HERE!</a>.

                                      <br /><br />For students in the Honors College, please contact the Honors College for information about your adviser assignment. Find contact information for the honors college <a className='text-[#007bff] hover:underline' href='https://sasn.rutgers.edu/honors-college'>HERE!</a>.

                                      <br /><br />To meet with your adviser for your declared major(s) and minor(s), please visit the respective department. Contact the <a className='text-[#007bff] hover:underline' href='/contact'>LSAMP office</a> for assistance.
                                  </p>
                              </div>
                              <button className='link-button'><a href='/contact'>Learn More</a></button>
                          </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>


              <div id="mem-top-layout-pc" className="absolute inset-0 bg-[#9D1739] bg-opacity-40 shadow-lg rounded-lg flex justify-center sm:grid sm:grid-rows-4 md:grid md:grid-rows-4 lg:grid lg:grid-rows-4 xl:grid xl:grid-rows-4">
            
                <div className="flex justify-center sm:grid sm:grid-cols-4 sm:row-span-1 md:grid md:grid-cols-4 md:row-span-1 lg:grid lg:grid-cols-4 lg:row-span-1 xl:grid xl:grid-cols-4 xl:row-span-1">
                  <div id="" className="flex justify-center sm:m-5 sm:col-span-3 md:m-5 md:col-span-3 lg:m-5 lg:col-span-3 xl:m-5 xl:col-span-3 text-white">
                    <h2 className="drop-shadow-lg font-bold sm:text-2xl lg:text-2xl xl:text-2xl italic">
                      As an LSAMP Scholar, you will have outstanding 
                      opportunities to help you complete your undergraduate!
                    </h2>
                  </div>

                  <div className="align-items-center">
                    <div id="" className="w-[8rem] text-center bg-[#9D1739] rounded-[.2rem] p-[.7rem] mt-[2rem] col-span-1 text-white font-bold drop-shadow-md hover:scale-105 transition">
                      <p className="drop-shadow-xl"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdPVNYfpvLnqMP5R4Kl8gzXeqNEDDrcF9bGsIx_HfRMaAFWrA/viewform">JOIN NOW!</a></p>
                    </div>
                  </div>
                  
                </div>
                
                <div id="admission-section" className="flex justify-center row-span-3 mb-[2rem]">
                  <article className="w-4/5 h-[30vw] bg-white border-2 border-[#9D1739] rounded-lg shadow-md row-span-3 mt-[3rem]">
                    <h1 className="text-center p-3 bg-[#9D1739] text-white font-bold drop-shadow-md rounded-tl-xlg rounded-tr-xlg">
                      Admission Requirements
                    </h1>

                    <h3 className="text-center text-[#9D1739] font-bold p-[.5rem] drop-shadow-md">
                      To become a LSAMP Scholar you must exhibit the following criteria:
                    </h3>

                    <p className="pl-[.5rem] font-bold drop-shadow-md">
                      1. Be an undergraduate student from an underrepresented ethnic or racial group.
                      <br/>2. Fully matriculated.
                      <br/>3. Majoring or intending to major in a non medical STEM field.
                    </p>

                    <p className="text-[#9D1739] drop-shadow-md text-md p-[.5rem]">
                      *if you do not fit these criteria, click <a className="underline hover:text-[#62e8c6]" href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:4c0a5d4f-0a0f-4433-ac13-e1580520d415">here</a> for more resources.
                    </p>

                    <h3 className="text-left text-[#9D1739] font-bold p-[.5rem] drop-shadow-md">
                      Eligible Majors
                    </h3>

                    <div className="grid grid-cols-3 pl-[.5rem]">
                      <p className="">
                        <a className="majors" href="https://sasn.rutgers.edu/biology">Biology</a>
                        <br/> <a className="majors" href="https://sasn.rutgers.edu/chemistry">Chemistry</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/mathematics-and-computer-science">Computer Science</a>
                        <br/><a className="majors" href="https://soe.rutgers.edu/">Engineering</a>
                      </p>
                      <p className="">
                        <a  className="majors" href="https://sasn.rutgers.edu/earth-and-environmental-sciences">Environmental Science</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/earth-and-environmental-sciences">Environmental Geology</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/earth-environmental-science/ba-geoscience-geology">Geology</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/geoscience-geology-minor">Geoscience Engineering</a>
                      </p>
                      <p className="">
                        <a  className="majors" href="https://sasn.rutgers.edu/mathematics-and-computer-science">Mathematics</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/center-molecular-and-behavioral-neuroscience">Neuroscience and Behavior</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/academics/undergraduate-majors-minors">Science Education</a>
                        <br/><a className="majors" href="https://sasn.rutgers.edu/node/318">Physics</a>
                      </p>
                    </div>
                  </article>
                </div>

              </div>
            </section>
          </div>

          <div id="student-resources" className="mt-[7rem] pb-[rem]">
            <Title name={"STUDENT RESOURCES"} />
            <div className="flex justify-center align-items-center">
              <div className="bg-gray-200 p-6 w-3/4 flex flex-col justify-center rounded-lg">
                <section className="grid grid-cols-3 justify-items-center place-items-center gap-8 mt-2">
                    <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md ml-20 mr-20'>
                        <div className="sr-button">ALEKS Boot Camp | Academic Success Boot Camp</div>
                        <div className='description-container'>
                            <p>
                                ALEKS trains students based on their performance on an initial pre-test.
                                As they complete the training daily, the math level gradually progresses to their desired level of achievement.
                                Scores are recorded and displayed until mastery is reached. To participate in the LSAMP ALEKS boot camp, please contact a LSAMP coordinator.<br /><br />
                                The academic success boot camp is a unique program designed for students who may be struggling academically. This boot camp helps students develop the following skills:
                                <br /><br />Time Management
                                <br />Increasing GPA
                                <br />Essential Study Skills
                            </p>
                        </div>
                        <button className='link-button'><a href='/contact'>Learn More</a></button>
                    </div>

                    <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md ml-20 mr-20'>
                        <div className="sr-button">Visit the RU-Newark Learning Center</div>
                        <div className='description-container'>
                            <p>
                                Active and collaborative place to learn through a variety of peer-led academic support services that will enhance the success of students. We offer the following core support programs:

                                <br/><br/>Peer-Led Tutoring:

                                <br/>Walk-in Group Tutoring: Available on all campuses.
                                <br/>One-on-One Tutoring: Available through our partnership with the SAS Honors Program.
                                <br/>Academic Coaching:

                                <br/><br/>Time Management
                                <br/>Critical Thinking
                                <br/>Study skills
                            </p>
                        </div>
                        <button className='link-button'><a href='/contact'>Visit Today!</a></button>
                    </div>

                    <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md ml-20 mr-20'>
                        <div className="sr-button">PLTL & Study Groups</div>
                        <div className='description-container'>
                            <p>
                                A Peer Led Team Leader is an LSAMP upperclassman assigned to a group of students who
                                require guidance on how to navigate a STEM-related major, get help with homework assignments, 
                                receive test review/prep for STEM courses, study skills, and progression and retention in a major. 
                                Your PLTL will be available during scheduled PLTL sessions to assist with the STEM courses you may be 
                                struggling with. The PLTL student will also be assigned to students who have been newly admitted in 
                                LSAMP to assist throughout the semester.
                            </p>
                        </div>
                        <button className='link-button'><a href='/contact'>Learn More</a></button>
                    </div>
                  
                    <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md ml-20 mr-20'>
                        <div className="sr-button">GRE Prep & Applying to Graduate School</div>
                        <div className='description-container'>
                            <p>
                                Free GRE prep is offered to juniors and seniors preparing for the GRE exam. Meetings/events hosted by LSAMP for GRE and graduate school include:

                                <br/><br/>1. Strategies for Taking the GRE Exam
                                <br/>2. Full Length Past GRE Exams
                                <br/>3. National Research Fellowship Program Workshops
                                <br/>4. How to Apply to the NRFP
                                <br/>5. Career Development Workshops
                                <br/><br/>For more GRE prep visit these popular sites:
                                
                                <br/>
                                <br/><a className='text-[#007bff] hover:underline' href='https://www.ets.org/gre.html'>ETS</a>
                                <br/><a className='text-[#007bff] hover:underline' href='https://www.princetonreview.com/grad/gre-test-prep'>The Princeton Review</a>
                                <br/><a className='text-[#007bff] hover:underline' href='https://www.manhattanprep.com/gre/'>Manhattan Prep</a>
                            </p>
                        </div>
                        <button className='link-button'><a href='/contact'>Learn More</a></button>
                    </div>

                    <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md ml-20 mr-20'>
                        <div className="sr-button">Bridge to the Doctorate</div>
                        <div className='description-container'>
                            <p>
                                The bridge to the Doctorate program is a fellowship which offers LSAMP graduates monetary support while they pursue a doctoral degree in STEM. The BD program provides LSAMP scholars financial support up to $32,000 for the first two years of graduate study including graduate school tuition and fees, as well as health insurance!

                                <br /><br />Eligibility includes:

                                <br /><br />Participation in LSAMP at an undergraduate institution. Bachelor's degree in a STEM field as well as being first time graduate student. 
                                <br />U.S. citizen or permanent resident.
                                <br />3.0 GPA 
                                <br />Plans to pursue doctoral degree in STEM.
                                <br />Gain admission to a STEM graduate program.
                            </p>
                        </div>
                        <button className='link-button'><a href='/contact'>Learn More</a></button>
                    </div>

                    <div className='hover:scale-105 transition-transform duration-300 ease-in-out shadow-md ml-20 mr-20'>
                        <div className="sr-button">How to Find your Academic Advisor(s)</div>
                        <div className='description-container'>
                            <p>
                                For students enrolled in Newark College of Arts and Science(NCAS) or University College Newark(UCN), the Office of Academic Services(OAS) will see students according to there last name. See the Advisor breakdown and how to make an appointment by clicking <a href='https://sasn.rutgers.edu/support'>HERE!</a>.

                                <br /><br />For students in the Honors College, please contact the Honors College for information about your adviser assignment. Find contact information for the honors college <a className='text-[#007bff] hover:underline' href='https://sasn.rutgers.edu/honors-college'>HERE!</a>.

                                <br /><br />To meet with your adviser for your declared major(s) and minor(s), please visit the respective department. Contact the <a className='text-[#007bff] hover:underline' href='/contact'>LSAMP office</a> for assistance.
                            </p>
                        </div>
                        <button className='link-button'><a href='/contact'>Learn More</a></button>
                    </div>
                </section>
              </div>
            </div>
          </div>
        </main>

        <div id="mobile-footer" className=''>
          <p>Copyright ©2023, Rutgers, The State University of New Jersey</p>
        </div>
      </>
    );
  }