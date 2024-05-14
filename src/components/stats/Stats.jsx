import React from "react";
//icon
import { HiChartBar, HiUser, HiGlobe } from "react-icons/hi";

const Stats = () => {
  return (
    <section className="pt-24" data-aos="fade-up" data-aos-delay="1200">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:justify-between">
          {/* item1 */}
          <div className="flex items-center gap-x-6">
            {/* item icon */}
            <div className="bg-slate-200 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl">
              <HiChartBar />
            </div>
            {/* item text */}
            <div>
              <div className="text-2xl font-bold lg:text-[40px] lg:mb-2 dark:text-blue-600">
                $30B
              </div>
              <div className="dark:text-neutral-300">Digital Currency Exchanged</div>
            </div>
          </div>
          {/* item2 */}
          <div className="flex items-center gap-x-6">
            {/* item icon */}
            <div className="bg-slate-200 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl">
              <HiUser />
            </div>
            {/* item text */}
            <div>
              <div className="text-2xl font-bold lg:text-[40px] lg:mb-2 dark:text-blue-600">
                $10M+
              </div>
              <div className="dark:text-neutral-300">Trusted Wallets Investor</div>
            </div>
          </div>
          {/* item3 */}
          <div className="flex items-center gap-x-6">
            {/* item icon */}
            <div className="bg-slate-200 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl">
              <HiGlobe />
            </div>
            {/* item text */}
            <div>
              <div className="text-2xl font-bold lg:text-[40px] lg:mb-2 dark:text-blue-600">
                195
              </div>
              <div className="dark:text-neutral-300">Countries Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
