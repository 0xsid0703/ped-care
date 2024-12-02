import React from "react";
import LearnMoreCard from "./LearnMoreCard";

const LearnMore = () => {
  const LearnMoreData = [
    {
      image: "/learnmore1.jpg",
      title: "Sick Visits",
      description:
        "When your child is unwell, you can count on us. Our sick visits are designed to diagnose and treat your child's illness swiftly, ensuring they get back to normal activities in no time.",
      link: "/sick-visits",
    },
    {
      image: "/learnmore2.jpg",
      title: "Wellness Visits",
      description:
        "Our wellness visits focus on preventive care, tracking your child's growth and development, and addressing any concerns you may have. We believe in proactive care to keep your child healthy.",
      link: "/wellness-visits",
    },
    {
      image: "/learnmore3.jpg",
      title: "School and Sports Physicals",
      description:
        "We offer comprehensive school and sports physicals to ensure your child is fit and ready for academic and athletic activities. Our thorough examinations meet all school and sports requirements.",
      link: "/school-and-sports-physicals",
    },
    {
      image: "/learnmore4.jpg",
      title: "Newborn Care",
      description:
        "From your baby's first check-up to their first steps, we're here to provide expert newborn care. We monitor your baby's growth, development, and health, providing guidance every step of the way.",
      link: "/newborn-care",
    },
    {
      image: "/learnmore5.jpg",
      title: "Immunizations",
      description:
        "Immunizations are a vital part of your child's health. We provide all necessary vaccinations following the recommended immunization schedule, protecting your child from preventable diseases.",
      link: "/immunizations",
    },
    {
      image: "/learnmore6.jpg",
      title: "Additional Pediatric Services",
      description:
        "Beyond our core services, we offer a range of additional pediatric medical services to cater to your child's unique health needs. From allergy testing to behavioral health, we're here for your child.",
      link: "/additional-pediatric-medical-services",
    },
  ];
  return (
    <div className="mx-[350px] flex flex-col gap-10 py-10">
      {LearnMoreData.map((item, index) => (
        <LearnMoreCard key={index} {...item} index={index} />
      ))}
    </div>
  );
};

export default LearnMore;
