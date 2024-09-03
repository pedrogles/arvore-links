import isologo from "../../../assets/logo/isologoBlack.png"

export function Navbar() {
  return (
    <header className="fixed flex items-center bg-slate-50 w-screen shadow-md h-20 md:h-24 lg:h-28">
      <img 
        className="w-16 pl-6 md:w-20 md:pl-8 lg:w-24 lg:pl-10" 
        src={isologo} 
        alt="Logotipo de cor branca, onde reune as letras P e G combinadas, referência a Pedro Gabriel." />
    </header>
  );
};