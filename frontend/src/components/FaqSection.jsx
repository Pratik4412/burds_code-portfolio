import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoChevronDown } from "react-icons/io5";
const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What do I need to get started?",
      answer:
        "We offer a wide range of services including web development, mobile app development, and digital marketing solutions tailored to your specific needs.",
    },
    {
      question: "What kind of customization is available?",
      answer:
        "We offer a wide range of services including web development, mobile app development, and digital marketing solutions tailored to your specific needs.",
    },
    {
      question: "How easy is it to edit for beginners?",
      answer:
        "We offer a wide range of services including web development, mobile app development, and digital marketing solutions tailored to your specific needs.",
    },
    {
      question: "Let me know more about moneyback guarantee?",
      answer:
        "We offer a wide range of services including web development, mobile app development, and digital marketing solutions tailored to your specific needs.",
    },
    {
      question: "Do I need to know how to code?",
      answer:
        "We offer a wide range of services including web development, mobile app development, and digital marketing solutions tailored to your specific needs.",
    },
    {
      question: "What will I get after purchasing the template?",
      answer:
        "We offer a wide range of services including web development, mobile app development, and digital marketing solutions tailored to your specific needs.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="seven_section_part">
      <div className="seven_start">
        <div className="seven_section_partitions">
          {/* Header Section */}
          <div className="seven_text">
            <div className="btn_tem">
              <GoDotFill className="text-white" />
              <span>Portfolio</span>
            </div>
            <div className="text" id="text">
              <div id="text_sections">
                <h1>Frequently Asked Questions</h1>{" "}
              </div>
              <p>
                Have questions? Our FAQ section has you covered with quick
                answers to the most common inquiries.
              </p>
            </div>
          </div>

          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
