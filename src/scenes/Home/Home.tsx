import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQueries from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
import { SelectedPage } from "../../shared/types";
import HomePage from "@/assets/HomePage.png";
import HomepageGraphic from "@/assets/HompageGraphic.jpg";
import RedBull from "@/assets/SponsorRedBull.png";
import forbes from "@/assets/SponsorForbes.png";
import fortune from "@/assets/SponsorFortune.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQueries("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* {imag && main heder} */}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* {main heder} */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* {heaDings} */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:content-evoLvetext">
                <img src={HomePage} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm ">
              Experience an all-in-one fitness plan that blends hypertrophy,
              strength, and performance. Build a strong, resilient body without
              burnout or injury using our proven methods and expert advice.
            </p>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-blue-400 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* {image} */}
        <div className="flex basis-3/5 justify-center md:z-10 md:h-4/5 md:ml-40 md:-scroll-mt-48 mt-40 md:justify-items-end">
          <img src={HomepageGraphic} alt="HomepageGraphic" />
        </div>
      </motion.div>

      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10 mt-32">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={RedBull} alt="redbull-sponsor" />
              <img src={forbes} alt="forbes-sponsor" />
              <img src={fortune} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
