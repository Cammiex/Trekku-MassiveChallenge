import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommenting,
  faTimesCircle,
  faFileText,
} from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FloatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <div
        className={
          isOpen
            ? 'size-[84px] rounded-full bg-white flex items-center z-[19] justify-center fixed bottom-[202px] right-[24px] transition-all duration-500 scale-100 opacity-100 cursor-pointer shadow-cardShadow'
            : 'size-[84px] rounded-full bg-white flex items-center z-[19] justify-center fixed bottom-4 right-[24px] transition-all duration-500 scale-75 opacity-70'
        }
      >
        <FontAwesomeIcon
          icon={faFaceDizzy}
          className="size-[32px] text-black"
        />
      </div>
      <div
        className={
          isOpen
            ? 'size-[84px] rounded-full bg-[#25D366] flex items-center z-[19] justify-center fixed bottom-[110px] right-[24px] transition-all duration-500 scale-100 opacity-100 cursor-pointer shadow-cardShadow'
            : 'size-[84px] rounded-full bg-[#25D366] flex items-center z-[19] justify-center fixed bottom-4 right-[24px] transition-all duration-500 scale-75 opacity-70'
        }
      >
        <FontAwesomeIcon icon={faWhatsapp} className="size-[32px]" />
      </div> */}
      <div
        className={
          isOpen
            ? 'size-[80px] rounded-full bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-sm bg-black/50 flex items-center z-20 justify-center fixed bottom-4 right-[24px] cursor-pointer transition-all duration-100 active:scale-95 shadow-cardShadow peer'
            : 'size-[80px] rounded-full bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-sm flex items-center z-20 justify-center fixed bottom-4 right-[24px] cursor-pointer transition-all duration-100 bg-black/50 active:scale-95 shadow-cardShadow peer'
        }
        onClick={handleClick}
      >
        <FontAwesomeIcon
          icon={isOpen ? faTimesCircle : faCommenting}
          className="size-[28px] transition-all duration-300 text-neutral-70"
        />
      </div>

      <div className="w-[0px] h-[62px] bg-gradient-to-l from-white/50 to-white/0 bg-black/50 backdrop-blur-lg text-transparent text-[20px] font-semibold text-left pl-6 py-4 fixed bottom-[27px] right-[76px] z-[19] rounded-l-full rounded-r-2xl transition-all duration-500 shadow-cardShadow peer-hover:w-[400px] peer-hover:opacity-100 peer-hover:text-neutral-70 opacity-0">
        <h1
          className={
            isOpen
              ? 'transition-all duration-100 select-none h-7 overflow-hidden'
              : 'transition-all duration-100 select-none h-7 overflow-hidden'
          }
        >
          Halo! Ada yang bisa kami bantu?
        </h1>
      </div>

      <div
        className={
          isOpen
            ? 'w-[310px] h-[208px] rounded-2xl bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-sm bg-black/50 fixed bottom-[136px] right-[24px] z-[20] overflow-hidden flex flex-col transition-all duration-700 select-none'
            : 'w-[310px] h-[208px] rounded-2xl bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-sm bg-black/50 fixed bottom-[136px] right-[-500px] z-[20] overflow-hidden flex flex-col transition-all duration-700 select-none'
        }
      >
        <div className="flex items-center justify-center w-full h-16 bg-gradient-to-br from-white to-white/60 backdrop-blur-sm bg-black/50 ">
          <h1 className="text-base font-semibold text-neutral-70">
            Punya pertanyaan ?
          </h1>
        </div>
        <div className="flex flex-col justify-center w-full mt-3">
          <Link className="flex items-center justify-center w-full gap-3 py-3 transition duration-200 hover:scale-105 hover:underline text-neutral-70">
            <FontAwesomeIcon
              icon={faFileText}
              className="size-9 text-neutral-70"
            />
            <h1 className="font-medium text-neutral-70">Pertanyaan Umum</h1>
          </Link>
          <Link className="flex items-center justify-center w-full gap-3 py-3 transition duration-200 hover:scale-105 hover:underline text-neutral-70">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="size-9 text-neutral-70"
            />
            <h1 className="font-medium text-neutral-70">Customer Service</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FloatButton;