import pedro_photo from "../../../assets/user/photo.png";

export function User() {
  return (
    <section className="flex flex-col justify-center items-center mt-32 mb-6 md:mt-40 lg:mt-48">
      <img className="w-full h-full max-w-32 max-h-32 rounded-full shadow-md md:max-w-44 md:max-h-44" 
        src={pedro_photo} 
        alt="Rosto de Pedro Gabriel visto de frente. Ele utiliza óculos de grau, bigode e barba rala. A foto contém fundo branco e bordas arredondadas." />
      <h2 className="text-2xl text-center text-black font-semibold mt-4 md:text-3xl md:mt-5 lg:text-4xl lg:mt-6">
        Pedro Gabriel Lima
      </h2>
      <p className="text-lg text-center text-black font-light md:text-xl md:mt-1 lg:text-2xl lg:mt-2">
        Desenvolvedor e Web Designer
      </p>
    </section>
  );
};
