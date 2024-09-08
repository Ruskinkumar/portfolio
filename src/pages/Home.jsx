import React from 'react'

function Home() {
  return (
    




<>
 
  {/*welcome-hero start */}
  <section id="welcome-hero" className="welcome-hero">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="header-text">
            <h2>
              hi <span>,</span> i am <br /> Ruskin Kumar <span>.</span>{" "}
            </h2>
            <p>Full Stack Web Developer</p>
            <a href="./assets/resume/Ruskinkumar-M.pdf" download="">
              download resume
            </a>
          </div>
          {/*/.header-text*/}
        </div>
        {/*/.col*/}
      </div>
      {/* /.row*/}
    </div>
    {/* /.container*/}
  </section>
  {/*/.welcome-hero*/}
  {/*welcome-hero end */}
  {/*about start */}
  <section id="about" className="about">
    <div className="section-heading text-center">
      <h2>about me</h2>
    </div>
    <div className="container">
      <div className="about-content">
        <div className="row">
          <div className="col-sm-6">
            <div className="single-about-txt">
              <h3>
                I am a Professional Full Stack Web Developer with expertise in
                both front-end and back-end development. I am passionate about
                creating efficient, scalable, and user-friendly web applications
                that meet client needs.
              </h3>
              <p>
                As a dedicated Full Stack Web Developer, I specialize in
                crafting dynamic, responsive, and user-centric web applications.
                With a robust understanding of both front-end and back-end
                technologies, I ensure seamless integration and functionality
                across the entire stack. My passion lies in solving complex
                problems and delivering high-quality digital solutions that
                drive business success. I am adept at working with modern web
                technologies and frameworks, and I continuously strive to
                enhance my skills to stay ahead in the rapidly evolving tech
                landscape.
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <div className="single-about-add-info">
                    <h3>phone</h3>
                    <p>9489764223</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="single-about-add-info">
                    <h3>email</h3>
                    <p>ruskinkumar24@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-5">
            <div className="single-about-img">
              <img
                src="assets/images/about/profile_image.webp"
                alt="profile_image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*/.about*/}
  {/*about end */}
  {/*education start */}
  <section id="education" className="education">
    <div className="section-heading text-center">
      <h2>education</h2>
    </div>
    <div className="container">
      <div className="education-horizontal-timeline">
        <div className="row">
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time">
                <h2>2021-2023</h2>
                <h3>
                  master <span>of </span> computer science
                </h3>
              </div>
              {/*/.experience-time*/}
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true" />
                <span className="single-timeline-horizontal" />
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <h4 className="title">
                    Scott Christian College (Autonomous)
                  </h4>
                  <h5>Nagercoil, Kanyakumari,Tamilnadu,India.</h5>
                  <p className="description">
                    I earned my Master of Computer Science from Scott Christian
                    College (Autonomous) in Nagercoil, Tamil Nadu, India,
                    enhancing my skills as a Full Stack Web Developer.
                  </p>
                </div>
                {/*/.timeline-content*/}
              </div>
              {/*/.timeline*/}
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time">
                <h2>2018-2021</h2>
                <h3>
                  bachelor <span>of </span> computer science
                </h3>
              </div>
              {/*/.experience-time*/}
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true" />
                <span className="single-timeline-horizontal" />
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <h4 className="title">
                    Scott Christian College (Autonomous)
                  </h4>
                  <h5>Nagercoil, Kanyakumari,Tamilnadu,India.</h5>
                  <p className="description">
                    I pursued a laying the foundation for my career in
                    technology.
                  </p>
                </div>
                {/*/.timeline-content*/}
              </div>
              {/*/.timeline*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*/.education*/}
  {/*education end */}
  {/*skills start */}
  <section id="skills" className="skills">
      <div className="skill-content">
        <div className="section-heading text-center">
          <h2>Skills</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="single-skill-content">
                <div className="barWrapper">
                  <span className="progressText">HTML5</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={100}
                        aria-valuemin={10}
                        aria-valuemax={100}
                        style={{ width: '100%' }} // Set width here
                      ></div>
                    </div>
                    <h3>100%</h3>
                  </div>
                </div>
                {/* /.barWrapper */}
                <div className="barWrapper">
                  <span className="progressText">CSS 3 Animation</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={10}
                        aria-valuemax={100}
                        style={{ width: '85%' }} // Set width here
                      ></div>
                    </div>
                    <h3>85%</h3>
                  </div>
                </div>
                {/* /.barWrapper */}
                <div className="barWrapper">
                  <span className="progressText">JavaScript</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={97}
                        aria-valuemin={10}
                        aria-valuemax={100}
                        style={{ width: '97%' }} // Set width here
                      ></div>
                    </div>
                    <h3>97%</h3>
                  </div>
                </div>
                {/* /.barWrapper */}
                <div className="barWrapper">
                  <span className="progressText">React</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={10}
                        aria-valuemax={100}
                        style={{ width: '90%' }} // Set width here
                      ></div>
                    </div>
                    <h3>90%</h3>
                  </div>
                </div>
                {/* /.barWrapper */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-skill-content">
                <div className="barWrapper">
                  <span className="progressText">Express.js</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={10}
                        aria-valuemax={100}
                        style={{ width: '90%' }} // Set width here
                      ></div>
                    </div>
                    <h3>90%</h3>
                  </div>
                </div>
                {/* /.barWrapper */}
                <div className="barWrapper">
                  <span className="progressText">Node.js</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={10}
                        aria-valuemax={100}
                        style={{ width: '85%' }} // Set width here
                      ></div>
                    </div>
                    <h3>85%</h3>
                  </div>
                </div>
                {/* /.barWrapper */}
                <div className="barWrapper">
                  <span className="progressText">PHP Laravel Framework</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={97}
                        aria-valuemin={10}
                        aria-valuemax={100}
                        style={{ width: '97%' }} // Set width here
                      ></div>
                    </div>
                    <h3>97%</h3>
                  </div>
                </div>
                {/* /.barWrapper */}
                <div className="barWrapper">
                  <span className="progressText">Python</span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={10}
                        aria-valuemax={100}
                        style={{ width: '90%' }} // Set width here
                      ></div>
                    </div>
                    <h3>90%</h3>
                  </div>
                </div>
                {/* /.barWrapper */}
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.skill-content*/}
    </section>
  {/*/.skills*/}
  {/*skills end */}
  {/*experience start */}
  <section id="experience" className="experience">
    <div className="section-heading text-center">
      <h2>experience</h2>
    </div>
    <div className="container">
      <div className="experience-content">
        <div className="main-timeline">
          <ul>
            <li>
              <div className="single-timeline-box fix">
                <div className="row">
                  <div className="col-md-5">
                    <div className="experience-time text-right">
                      <h2>2023 - Present</h2>
                      <h3>Web Developer</h3>
                    </div>
                    {/*/.experience-time*/}
                  </div>
                  {/*/.col*/}
                  <div className="col-md-offset-1 col-md-5">
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">
                          <span>
                            <i className="fa fa-circle" aria-hidden="true" />
                          </span>
                          Redevon It Services Pvt Ltd
                        </h4>
                        <h5>Nagercoil,Kanyakumar, India</h5>
                        <p className="description">
                          A web developer creates websites using coding
                          languages like HTML, CSS, and JavaScript, ensuring
                          they are functional, secure, and user-friendly across
                          different devices.
                        </p>
                      </div>
                      {/*/.timeline-content*/}
                    </div>
                    {/*/.timeline*/}
                  </div>
                  {/*/.col*/}
                </div>
              </div>
              {/*/.single-timeline-box*/}
            </li>
            <li>
              <div className="single-timeline-box fix">
                <div className="row">
                  <div className="col-md-offset-1 col-md-5 experience-time-responsive">
                    <div className="experience-time">
                      <h2>
                        <span>
                          <i className="fa fa-circle" aria-hidden="true" />
                        </span>
                      </h2>
                      <h3 />
                    </div>
                    {/*/.experience-time*/}
                  </div>
                  {/*/.col*/}
                  <div className="col-md-5">
                    <div className="timeline">
                      <div className="timeline-content text-right">
                        <h4 className="title">Inbox Info Solution</h4>
                        <h5>Nagercoil,Kanyakumar, India</h5>
                        <p className="description">
                          I have experience as a Full Stack Python Developer
                          intern, focusing on designing and implementing both
                          front-end and back-end solutions for web applications.
                          I collaborated on various projects, ensuring robust
                          functionality, security, and a seamless user
                          experience.
                        </p>
                      </div>
                      {/*/.timeline-content*/}
                    </div>
                    {/*/.timeline*/}
                  </div>
                  {/*/.col*/}
                  <div className="col-md-offset-1 col-md-5 experience-time-main">
                    <div className="experience-time">
                      <h2>
                        <span>
                          <i className="fa fa-circle" aria-hidden="true" />
                        </span>
                        May 2023 - August 2023
                      </h2>
                      <h3>Full Stack Developer -Intern</h3>
                    </div>
                    {/*/.experience-time*/}
                  </div>
                  {/*/.col*/}
                </div>
              </div>
              {/*/.single-timeline-box*/}
            </li>
            <li>
              <div className="single-timeline-box fix">
                <div className="row">
                  <div className="col-md-5">
                    <div className="experience-time text-right">
                      <h2 />
                      <h3 />
                    </div>
                    {/*/.experience-time*/}
                  </div>
                  {/*/.col*/}
                  <div className="col-md-offset-1 col-md-5">
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">
                          {/*	<span><i class="fa fa-circle" aria-hidden="true"></i></span>*/}
                        </h4>
                        <h5 />
                        <p className="description"></p>
                      </div>
                      {/*/.timeline-content*/}
                    </div>
                    {/*/.timeline*/}
                  </div>
                  {/*/.col*/}
                </div>
              </div>
              {/*/.single-timeline-box*/}
            </li>
          </ul>
        </div>
        {/*.main-timeline*/}
      </div>
      {/*.experience-content*/}
    </div>
  </section>
  {/*/.experience*/}
  {/*experience end */}
  {/*/.clients*/}
  {/*/.clients*/}
  {/*clients end */}
  {/*contact start */}
  <section id="contact" className="contact">
    <div className="section-heading text-center">
      <h2>contact me</h2>
    </div>
    <div className="container">
      <div className="contact-content">
        <div className="row">
          <div className="col-md-offset-1 col-md-10 col-sm-12">
            <div className="single-contact-box">
              <div className="row">
                <div className="col-sm-6">
                  <div className="contact-adress">
                    <div className="contact-add-head">
                      <h3>Ruskin kumar</h3>
                      <p>Fullstack web developer</p>
                    </div>
                    <div className="contact-add-info">
                      <div className="single-contact-add-info">
                        <h3>phone</h3>
                        <p>9489764223</p>
                      </div>
                    </div>
                  </div>
                  {/*/.contact-adress*/}
                </div>
                {/*/.col-sm-6*/}
                <div className="col-sm-6">
                  <div className="single-contact-add-info">
                    <h3>email</h3>
                    <p>ruskinkumar24@gmail.com</p>
                  </div>
                  <div className="hm-foot-icon text-center">
                    <ul className="list-inline">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/ruskin-kumar-m-733942223/">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*/.hm-foot-icon*/}
                </div>
                {/*/.col-sm-6*/}
              </div>
              {/*/.row*/}
            </div>
            {/*/.single-contact-box*/}
          </div>
          {/*/.col*/}
        </div>
        {/*/.row*/}
      </div>
      {/*/.contact-content*/}
    </div>
    {/*/.container*/}
  </section>
 
</>














  )
}

export default Home