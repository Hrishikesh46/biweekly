// import "./Contributors.css";
import meeti from "../../assets/TeamMembers/Meeti.webp";
import hrishikesh from "../../assets/TeamMembers/Nakli.webp";
import sahil from "../../assets/TeamMembers/Sahil.webp";
import contri from "../../assets/NewCategoryAsset/finalcontri.webp";

// bg-gradient-to-r from-red-900 from-25% via-pink-300 via-75% to-slate-700 to-100%

export default function Contributors() {
  return (
    <div className=" h-screen mx-auto p-20 flex-col w-[1200px] ">
      <div className="h-40 flex justify-center items-center">
        <div className="">
          <h1 className="text-white text-center text-5xl">CONTRIBUTORS</h1>
          <h3 className="mt-2  text-white text-2xl text-center">
            The Mind for Muscle
          </h3>
        </div>
      </div>
      {/* <div className="content flex flex-wrap">
        <div className="content-box flex flex-col">
          <div className="img-container">
            <img className="image  bg-[#9E1B32] " src={hrishikesh} />
          </div>
          <h2 className="">Hrishikesh Yadav</h2>
          <p className="text-2xl">Developer</p>
        </div>

        <div className="content-box flex flex-col">
          <div className="img-container">
            <img className="image bg-[#C48E89]" src={sahil} />
          </div>
          <h2>Sahil Dhole</h2>
          <p className="text-2xl">Design</p>
        </div>

        <div className="content-box flex flex-col">
          <div className="img-container">
            <img className="image  bg-[#605F5F]" src={meeti} />
          </div>
          <h2>Meeti Shah</h2>
          <p className="text-2xl">Design</p>
        </div>
        {/* <div className="content-box flex flex-col mx-auto">
          <div className="img-container">
            <img className="image  bg-[#605F5F]" src={meeti} />
          </div>
          <h2>Meeti Shah</h2>
          <p className="text-2xl">Design</p>
        </div> 
      </div> */}

      <div className="px-16 pb-16 mt-2 ">
        <img src={contri} alt="" />
      </div>

      <div className="text-white text-center text-sm py-10">
        Copyright &copy; 2025, The Mind for Muscle, All Rights Reserved
      </div>
    </div>
  );
}
