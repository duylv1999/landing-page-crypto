import React from "react";
//components
import CalcForm from "./CalcForm";

const Calculate = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center">
          <h2
            className="section-title dark:text-blue-600"
            data-aos="fade-up"
            data-aos-offset="400"
          >
            Check how much you can earn.
          </h2>
          <p
            className="section-subtitle text-lg mb-16 max-w-[622px] mx-auto dark:text-neutral-300"
            data-aos="fade-up"
            data-aos-offset="450"
          >
            Let's check your hash rate to see how much you will earn today.
          </p>
        </div>
        {/* form */}
        <CalcForm />
      </div>
    </section>
  );
};

export default Calculate;
