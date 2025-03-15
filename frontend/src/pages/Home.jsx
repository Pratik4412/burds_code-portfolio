import React, { useState } from "react";
import vector_1 from "../assets/Vector 1.png";
import vector_2 from "../assets/Vector 2.png";
import Container_1 from "../assets/Container 1.png";
import Container_2 from "../assets/Container 2.png";
import Container_3 from "../assets/Container 3.png";
import portfolio from "../assets/portfolio_img.png";
import Gradient_1 from "../assets/Gradient_1.png";
import Gradient_2 from "../assets/Gradient_2.png";
import Gradient_3 from "../assets/Gradient_3.png";
import { PiRocket } from "react-icons/pi";
import { LuAtom } from "react-icons/lu";
import { PiHandDepositBold } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import FaqSection from "../components/FaqSection";
import { testimunials } from "../store/store";
import Rating from "@mui/material/Rating";
import Popup from "@/components/Popup";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useOutletContext();
  return (
    <div className="home_container">
      <div className="main_hero_section">
        <div className="hero_section">
          <div className="heading_sectin">
            <h1>
              Premium UI/UX & Web <br />
              Development to Elevate <br />
              Your Brand
            </h1>
            <p>
              We design & develop modern, high-performing websites <br />& apps
              that drive results.
            </p>
          </div>
          <div className="btns_hero_sections">
            <button className="btn1" onClick={() => setIsOpen(true)}>
              Get a free Consulation
            </button>
            <button className="btn2" onClick={() => setIsOpen(true)}>
              Let's Build Your Dream Website
            </button>
          </div>
        </div>
      </div>
      <div className="secont_section_contatainer">
        <div className="second_section">
          <div className="first_img">
            <img src={vector_1} alt="" />
          </div>
          <div className="second_text_content">
            <div className="second_btn1">
              <div className="btn_tem">
                <GoDotFill className="text-white" />
                <span>service section</span>
              </div>
              <div className="text">
                <h1>What We Offer</h1>
                <h2>That Propel Your Success</h2>
              </div>
              <div className="btn">
                <button onClick={() => setIsOpen(true)}>Gt In Touch</button>
              </div>
            </div>
          </div>
          <div className="first_img">
            <img src={vector_2} alt="" />
          </div>
        </div>
        <div className="card_sections">
          <div className="card_grid">
            <div className="fird_one">
              <div className="img_container_card">
                <img src={Container_1} alt="" />
              </div>
              <div className="padingSection">
                <div className="text_container_card">
                  <h1>UI/UX Design</h1>
                  <div className="container_line"></div>
                  <p>
                    Modern & User-Friendly <br /> Interfaces
                  </p>
                  <div className="shwo_tags_cards">
                    <span>30% Increase in Sales</span>
                    <span>40% Boost in Retention</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="fird_one">
              <div className="img_container_card">
                <img src={Container_2} alt="" />
              </div>
              <div className="padingSection">
                <div className="text_container_card">
                  <h1>Web Development</h1>
                  <div className="container_line"></div>
                  <p>
                    Scalable & Fast <br /> Websites
                  </p>
                  <div className="shwo_tags_cards">
                    <span>25% Conversion Rates</span>
                    <span>50% Reduced in CPA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="fird_one">
              <div className="img_container_card">
                <img src={Container_3} alt="" />
              </div>
              <div className="padingSection">
                <div className="text_container_card">
                  <h1>E-commerce Solutions</h1>
                  <div className="container_line"></div>
                  <p>
                    {" "}
                    Shopify, WooCommerce, <br /> etc.
                  </p>
                  <div className="shwo_tags_cards">
                    <span>60% Increased Traffic</span>
                    <span>35% Growth in Sales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third_section">
        <div className="container_third">
          <div className="img_third">
            <img src={portfolio} alt="" />
          </div>
          <div className="text_third">
            <div className="fit_btn">
              <div className="btn_tem">
                <GoDotFill className="text-white" />
                <span>Portfolio</span>
              </div>
            </div>
            <h1>
              Latest Work <br /> Samples
            </h1>
            <p>
              Delivering high-quality, on-demand designs with precision.
              <br /> Elevate your brand effortlessly, one snap at a time.
            </p>
            <div className="container_line"></div>
            <div className="check_section">
              <span>
                <i className="fa-solid fa-circle-check icon_chckmard"></i>From
                $0 to $500,000 in revenue.
              </span>
              <span>
                <i className="fa-solid fa-circle-check icon_chckmard"></i>47%
                growth in new customers.
              </span>
            </div>
            <div className="third_btn_section">
              <div className="btn">
                <button onClick={() => setIsOpen(true)}>Gt In Touch</button>
              </div>
              <div className="starts_section">
                <div className="stars">
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <h6>200+ Agencies Rated</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fourth_section">
        <div className="container_fourth">
          <div className="fourth_one">
            <div className="btn_tem">
              <GoDotFill className="text-white" />
              <span>Trust & Credibility</span>
            </div>
            <div className="why_text_section">
              <h1>
                Why Choose <br /> Us?
              </h1>
              <p>
                We make it easy to bring your ideas to life, guiding you from
                concept to a fully launched product.
              </p>
            </div>
            <div className="why_section_cards">
              <div className="card_sections">
                <div className="first_why_card">
                  <div className="icon_section_why">
                    <div className="icon_roc">
                      <PiRocket className="stage_icon" size={24} />
                    </div>
                    <div className="btn_tem">
                      <GoDotFill className="text-white" />
                      <span>Stage 1</span>
                    </div>
                  </div>
                  <div className="cant_why_text_section">
                    <h1>Kickoff</h1>
                    <div className="container_line"></div>
                    <p>
                      The kickoff stage is where everything begins. We align
                      with you to understand your goals, vision, and
                      expectations. Through in-depth discussions and thorough
                      research.
                    </p>
                    <div className="shwo_tags_cards_card">
                      <span>Comprehensive Consultation</span>
                      <span>Project Roadmap</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_sections">
                <div className="first_why_card">
                  <div className="icon_section_why">
                    <div className="icon_roc">
                      <LuAtom className="stage_icon" size={24} />
                    </div>
                    <div className="btn_tem">
                      <GoDotFill className="text-white" />
                      <span>Stage 2</span>
                    </div>
                  </div>
                  <div className="cant_why_text_section">
                    <h1>Execution</h1>
                    <div className="container_line"></div>
                    <p>
                      With a clear strategy in place, we move into the execution
                      phase, where ideas come to life. Our team works high
                      efficiently and collaboratively to implement the plan.
                    </p>
                    <div className="shwo_tags_cards_card">
                      <span>Seamless Integration</span>
                      <span>Real Time Collaboration</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_sections">
                <div className="first_why_card">
                  <div className="icon_section_why">
                    <div className="icon_roc">
                      <PiHandDepositBold className="stage_icon" size={24} />
                    </div>
                    <div className="btn_tem">
                      <GoDotFill className="text-white" />
                      <span>Stage 3</span>
                    </div>
                  </div>
                  <div className="cant_why_text_section">
                    <h1>Handoff</h1>
                    <div className="container_line"></div>
                    <p>
                      Once the design and development are finalized, we
                      seamlessly transition to the handoff stage. Here, we
                      provide you with all the assets, documentation, and
                      support to a smooth launch.
                    </p>
                    <div className="shwo_tags_cards_card">
                      <span>Ongoing Support</span>
                      <span>Documentation</span>
                    </div>
                  </div>
                  <div className="card_sample_btn">
                    <div className="btn">
                      <button onClick={() => setIsOpen(true)}>
                        Book an Appointment
                      </button>
                    </div>
                  </div>
                  <div className="start_bg">
                    <img src="./images/starbg.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="img_thirds">
            <img src={portfolio} alt="" />
          </div>
        </div>
      </div>
      <div className="fifth_section">
        <div className="start_fifth_section">
          <div className="second_btn1">
            <div className="btn_tem">
              <GoDotFill className="text-white" />
              <span>Portfolio</span>
            </div>
            <div className="text" id="text">
              <div id="text_section">
                <h1>Our Selected Projects</h1>
                <h2>That Propel Your Website</h2>
              </div>
              <p>
                Explore our curated work, showcasing collaborations with
                visionary <br />
                clients across diverse industries.{" "}
              </p>
            </div>
            <div className="btn">
              <button onClick={() => setIsOpen(true)}>View Portfolio</button>
            </div>
          </div>
        </div>
        <div className="sliding_image_section">
          <div className="first_continer">
            {/* <img src="./images/Gradient_1.png" alt="" /> */}
            <img src={Gradient_1} alt="" />
          </div>
          <div className="first_continer">
            {/* <img src="./images/Gradient_2.png" alt="" /> */}
            <img src={Gradient_2} alt="" />
          </div>
          <div className="first_continer">
            {/* <img src="./images/Gradient_3.png" alt="" /> */}
            <img src={Gradient_3} alt="" />
          </div>
        </div>
      </div>
      <div className="six_section">
        <div className="six_section_start">
          <div className="six_glassy_effect">
            <div className="second_btn1">
              <div className="btn_tem">
                <GoDotFill className="text-white" />
                <span>Join Us Now</span>
              </div>
              <div className="text" id="text">
                <div id="text_section">
                  <h1>Each Project we Undertake</h1>
                  <h2>is a Unique Opportunity.</h2>
                </div>
                <p>
                  Ready to take the next step? Join us now and start
                  transforming your{" "}
                </p>
              </div>
              <div className="btn">
                <button onClick={() => setIsOpen(true)}>
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimunial_section">
        <div className="six_testi">
          <div className="second_btn1">
            <div className="btn_tem">
              <GoDotFill className="text-white" />
              <span>Testimonial</span>
            </div>
            <div className="text flex flex-col gap-2">
              <h1>Customer Reviews About</h1>
              <h2>Work, Usability and Design.</h2>
            </div>
            <div className="text_sector">
              <p>
                Hear from our happy clients! See how we’ve helped them achieve{" "}
                <br />
                their goals and create lasting impact.
              </p>
            </div>
            <div className="btn">
              <button onClick={() => setIsOpen(true)}>Gt In Touch</button>
            </div>
          </div>
          <div className="card_content">
            {testimunials.map((items, i) => (
              <div className="main_card_container" key={i}>
                <div className="card_container">
                  <div className="flex items-center gap-2 justify-between">
                    <img src={items.image} alt="" />
                    <h1>{items.icon}</h1>
                  </div>
                  <span>
                    <Rating
                      name="read-only"
                      precision={0.5}
                      value={items.stars}
                      readOnly
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: "#fff",
                        },
                      }}
                    />
                  </span>
                  <p>{items.dis}</p>
                  <div className="container_line"></div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-bold text-lg">
                        {items.name}
                      </h3>
                      <GoDotFill className="text-white" size={8} />
                      <h3 className="text-white font-semibold text-lg">
                        {items.role}
                      </h3>
                    </div>
                    <p>{items.para}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FaqSection />
      {isOpen && <Popup setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Home;
