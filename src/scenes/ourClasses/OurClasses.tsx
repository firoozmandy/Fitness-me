import React from "react";
import { ClassesType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import image1 from "@/assets/ourClassesImg.png";
import Class from "./Class";

const classes: Array<ClassesType> = [
  {
    name: "weight training Classes",
    description:
      "Experience an all-in-one fitness plan that blends hypertrophy,strength and performance Build a strong resilient body without",
    image: image1,
  },

  {
    name: "weight training Classes",
    description:
      "Experience an all-in-one fitness plan that blends hypertrophy,strength and performance Build a strong resilient body without",
    image: image1,
  },
  {
    name: "weight training Classes",
    description:
      "Experience an all-in-one fitness plan that blends hypertrophy,strength and performance Build a strong resilient body without",
    image: image1,
  },
];

type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

function OurClasses({ setSelectedPage }: Props) {
  return (
    <section id="ourclasses" className="w-full py-28 bg-pink-50">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto v-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5 md:ml-24 ml-10">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Experience an all-in-one fitness plan that blends hypertrophy,
              strength, and performance. Build a strong, resilient body without
              burnout or injury using our proven methods and expert advic
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[353px] w-full overflow-x-hidden overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassesType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default OurClasses;
