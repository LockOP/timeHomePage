import { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function App() {
  const dur = "5s";
  const t = 20;
  const cF = 30;
  const [w, setW] = useState(window.innerWidth);
  const [h, setH] = useState(window.innerHeight);

  function logInnerScreenSize() {
    setW(window.innerWidth);
    setH(window.innerHeight);
    // console.log(`Inner Screen Size: Width = ${width}, Height = ${height}`);
  }
  window.addEventListener("resize", logInnerScreenSize);

  const [status, setStatus] = useState(false);
  function handleIn() {
    setStatus(true);
  }
  function handleOut() {
    setStatus(false);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden relative">
      <div
        className="absolute -z-10 h-[500%] w-[500%] angular-gradient-div"
        style={{ "--animation-duration": dur }}
      ></div>
      <svg className="absolute w-full h-full">
        <path
          className="br"
          fillRule="evenodd"
          clipRule="evenodd"
          d={`
          M${t + cF} ${t} C${t + cF} ${t} ${t} ${t} ${t} ${t + cF}
          V${h - t - cF} C${t} ${h - t - cF} ${t} ${h - t} ${t + cF} ${h - t}
          H${w - t - cF} C${w - t - cF} ${h - t} ${w - t} ${h - t} ${w - t} ${
            h - t - cF
          }
          V${t + cF} C${w - t} ${t + cF} ${w - t} ${t} ${w - t - cF} ${t}
          Z
          M0 0 V${h} H${w} V0 H0 Z
          `}
          fill="#ffffff"
          fillOpacity="0.3"
        />
      </svg>
      <div
        //  className={`absolute w-screen h-screen p-[${t + cF}px]`}
        className={`absolute w-screen h-screen p-[50px]`}
      >
        <div className="w-full h-full relative flex flex-col">
          <div className="w-full flex flex-row justify-between max-[890px]:flex-col max-[890px]:justify-start">
            <p className="font-['MuseoModerno'] font-black tracking-[5px] text-[100px] leading-[100px] text-[#ffffffe7] bg-transparent">
              time
            </p>
            <div className="flex flex-col bg-[#ffff0000]">
              <p className="s text-[#ffffff]">
                Libraries used : react-icons, tailwind
              </p>
              <p className="font-['MuseoModerno'] text-[#ffffff]">
                Font used : MuseoModerno
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        // className={`absolute w-screen z-20 h-screen flex justify-start items-end p-[${
        //   t + cF
        // }px]`}
        className={`absolute w-screen z-20 h-screen flex justify-start items-end p-[50px]`}
      >
        <div
          onMouseEnter={() => {
            handleIn();
          }}
          onMouseLeave={() => {
            handleOut();
          }}
          // className={`bg-[rgba(255,255,255,0.3)] rounded-[${
          //   cF / 3
          // }px] p-[20px] flex flex-col font-['MuseoModerno'] font-normal text-3xl cursor-default`}
          className={`bg-[rgba(255,255,255,0.3)] rounded-[10px] py-[20px] px-[30px] flex flex-col font-['MuseoModerno'] font-normal text-3xl cursor-default max-[890px]:text-xl max-[890px]:mb-[140px]`}
        >
          <div className="relative">
            <p
              className={`text-[#${
                status ? "0f3654" : "fff"
              }] absolute top-[-10px] left-[-20px] font-sans text-5xl max-[890px]:text-2xl`}
            >
              "
            </p>
            <p className="text-[#fff]">Healing is a matter</p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="text-[#fff]">of time,</p>
            <p className="text-[#0f3654]">but it is</p>
          </div>
          <div>
            <p className="text-[#0f3654]">sometimes also a</p>
          </div>
          <div className="relative">
            <p
              className={`text-[#${
                status ? "fff" : "0f3654"
              }] absolute bottom-[-10px] right-[-20px] font-sans text-5xl max-[890px]:text-2xl`}
            >
              "
            </p>
            <p className="text-[#0f3654]">matter of oppurtunity</p>
          </div>
          <div className="transition-all duration-300">
            {status && (
              <p className="text-[#0f3654] text-base italic w-full flex justify-end mt-2  max-[890px]:text-sm">
                - Hippocrates
              </p>
            )}
          </div>
        </div>
      </div>
      <div
        className={`absolute z-40 right-0 bottom-0 flex justify-end items-end p-[50px] max-[890px]:right-auto max-[890px]:left-0`}
      >
        <div
          className={`flex flex-col font-normal text-sm items-end gap-2 max-[890px]:items-start max-[890px]:mb-[30px]`}
        >
          <div className="flex flex-row items-center gap-2 max-[890px]:flex-row-reverse">
            <a
              target="_blank"
              className=""
              href="https://github.com/LockOP"
              rel="noreferrer"
            >
              https://github.com/LockOP
            </a>
            <AiFillGithub size={20} />
          </div>

          <div className="flex flex-row items-center gap-2 max-[890px]:flex-row-reverse">
            <a
              target="_blank"
              rel="noreferrer"
              className=""
              href="https://www.linkedin.com/in/arul-madhava-3a4238196"
            >
              https://www.linkedin.com/in/arul-madhava-3a4238196
            </a>
            <AiFillLinkedin size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
