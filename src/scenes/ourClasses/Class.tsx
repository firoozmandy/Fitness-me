import { ClassesType } from "../../shared/types";

// type Props = {
//     name:
// description:
// image:
// }

function Class({ name, description, image }: ClassesType) {
  const overLayStyles =
    "p-5 absolute z-30 rounded-t-lg flex h-[300px] w-[450px] flex-col items-center justify-center whitespace-normal bg-pink-400 text-center text-white opacity-0 transition duration-500 hover:opacity-90 ";

  return (
     <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overLayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img className="w-2/3 md:ml-10 ml-10" src={image} alt={`${image}`} />
      </li>
    
  );
}

export default Class;
//

// </li>
