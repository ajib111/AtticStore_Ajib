function Banner() {
  return (
    <div className="relative w-full h-[450px]">

      {/* Banner image */}
      <img
        src="/banner.png"
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* Text on image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold bg-black/40 px-6 py-3 rounded">
          Welcome to my store
        </h1>
      </div>

    </div>
  );
}

export default Banner;
