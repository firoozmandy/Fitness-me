import { BenefitType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import {
  UserGroupIcon,
  HomeModernIcon,
  AcademicCapIcon,
} from "@heroicons/react/16/solid";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitImage from "@/assets/benefit.jpg";

type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      " Experience an all-in-one fitness plan that blends hypertrophy strength, and performance",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of diverse classes",
    description:
      "all-in-one fitness plan that blends hypertrophy strength, and performance",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      " fitness plan that blends hypertrophy strength, and performance",
  },
];
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-32 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText> MORE THAN JUST GYM </HText>
          <p className="my-5 text-sm">
            Experience an all-in-one fitness plan that blends hypertrophy,
            strength, and performance. Build a strong, resilient body without
            burnout or injury using our proven methods and expert advice.
          </p>
        </motion.div>
        {/* {mini div} */}

        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              title={benefit.title}
              icon={benefit.icon}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* {graphics && description} */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-20 md:flex">
          {/* {graphics} */}
          <img
            className="mx-auto w-5/12"
            src={BenefitImage}
            alt="Benefit-page"
          />

          {/* {description} */}
          <div>
            {/* {title} */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:-z-[1] before:content-abstractwaves">
                <motion.div
                  className="relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING
                    <span className="text-primary-500"> FITNESS </span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* {description} */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Experience an all-in-one fitness plan that blends hypertrophy,
                strength, and performance. Build a strong, resilient body
                without burnout or injury using our proven methods and expert
                advice.Experience an all-in-one fitness plan that blends
                hypertrophy, strength, and performance. Build a strong,
                resilient body without burnout or injury using our proven
                methods and expert advice.
              </p>
              <p className="mb-5">
                Experience an all-in-one fitness plan that blends hypertrophy,
                strength, and performance. Build a strong, resilient body
                without burnout or injury using our proven methods and expert
                advice.
              </p>
            </motion.div>
            {/* {button} */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  JOIN NOW
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
