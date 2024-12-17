import React from "react";
import "./Testimonial.css";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      name: "Sophia Carter",
      review:
        "Working with Andrew was an absolute pleasure. His attention to detail and ability to bring ideas to life through code is unmatched. Highly recommended for any web development project!",
    },
    {
      img: profilePic2,
      name: "Emily Johnson",
      review:
        "Andrew's dedication and creativity transformed our website into a powerful tool for our business. He delivered exceptional results ahead of schedule and exceeded our expectations.",
    },
    {
      img: profilePic3,
      name: "Olivia Brown",
      review:
        "I am beyond impressed by Andrew's technical expertise and professionalism. He went above and beyond to ensure every detail was perfect. Truly a master of his craft!",
    },
    {
      img: profilePic4,
      name: "James Wilson",
      review:
        "Andrew's ability to understand our needs and provide innovative solutions made all the difference. His work was seamless, and his support throughout the process was outstanding. A true asset to any team!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      {/* Section Title */}
      <h2 className="t-title">Client Reviews</h2>

      {/* Bold Heading */}
      <div className="t-heading">
        <span>Clients always get </span>
        <span style={{ color: "var(--orange)", fontWeight: "bold" }}>
          Exceptional Work
        </span>
        <span> from me...</span>
      </div>

      {/* Sliding Testimonials */}
      <div className="t-slider-container">
        {clients.map((client, index) => (
          <div className="testimonial" key={index}>
            <img src={client.img} alt={client.name} />
            <h3>{client.name}</h3>
            <span>{client.review}</span>
          </div>
        ))}
        {/* Duplicate slides for continuous effect */}
        {clients.map((client, index) => (
          <div className="testimonial" key={`duplicate-${index}`}>
            <img src={client.img} alt={client.name} />
            <h3>{client.name}</h3>
            <span>{client.review}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
