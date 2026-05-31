import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  num: string;
  title: string;
  desc: string;
}

const servicesList: ServiceItem[] = [
  {
    num: '01',
    title: 'Embedded Systems',
    desc: 'Development of micro-controller based solutions using Arduino, ESP32, and NodeMCU, integrating sensors, actuators, and hardware components.',
  },
  {
    num: '02',
    title: 'Circuit Design',
    desc: 'Designing logic gate and transistor-based switching circuits, including analog control, sensor systems, and power optimization techniques.',
  },
  {
    num: '03',
    title: 'Full-Stack Dev',
    desc: 'Building responsive, high-performance web applications using React.js, Node.js, Express, MongoDB, and Firebase integration.',
  },
  {
    num: '04',
    title: 'AI & Cloud',
    desc: 'Integrating intelligent machine learning models and deploying scalable, real-time containerized web applications on Google Cloud Run.',
  },
  {
    num: '05',
    title: 'Data Analytics',
    desc: 'Developing analytical dashboards featuring CSV processing, data validation, statistical analysis, and interactive visualizations.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section 
      id="services" 
      className="bg-servicesBg text-servicesText rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="font-black uppercase text-center text-servicesText text-[3rem] sm:text-[6rem] md:text-[8.5rem] lg:text-[10rem] leading-none mb-16 sm:mb-20 md:mb-28">
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col border-t border-servicesText/15">
          {servicesList.map((service, index) => (
            <FadeIn 
              key={service.num} 
              delay={index * 0.1} 
              y={30} 
              className="border-b border-servicesText/15"
            >
              <motion.div 
                whileHover={{ x: 16 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="group flex items-center gap-6 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12 cursor-pointer transition-colors duration-300 hover:bg-servicesText/[0.02] px-4 -mx-4 rounded-2xl"
              >
                {/* Left: Huge Number */}
                <div className="font-black text-servicesText text-[3rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] leading-none select-none min-w-[70px] sm:min-w-[150px] md:min-w-[200px] transition-colors duration-300 group-hover:text-[#B600A8]">
                  {service.num}
                </div>

                {/* Right: Stacked Name + Description */}
                <div className="flex flex-col gap-2 flex-grow">
                  <h3 className="font-medium uppercase text-servicesText text-[1.1rem] sm:text-[1.6rem] md:text-[2.1rem] leading-tight transition-colors duration-300 group-hover:text-[#7621B0]">
                    {service.title}
                  </h3>
                  <p className="font-light leading-relaxed max-w-2xl text-servicesText/60 text-[0.85rem] sm:text-[1.1rem] md:text-[1.25rem] transition-colors duration-300 group-hover:text-servicesText/85">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
