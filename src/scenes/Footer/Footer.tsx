import Logo from "@/assets/Logo.png";



// type Props = {
//   setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
// };

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" className="w-1/6"/>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum
          </p>
          <p> Evogym all rights reserved</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold"> Links </h4>
            <p className="my-5"> Massa orci senectus </p>
            <p className="my-5 "> Et gravid id et etiam </p>
            <p> ULL amcorper viv amus </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold"> Contact us </h4>
            <p className="my-5"> Tempus Massa orci senectus </p>
            <p> (333)767-999 </p>
            
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;








