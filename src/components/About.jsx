function About() {
  return (
    <div className="bg-white py-24 px-20">

      {/* two div layout */}
      <div className="grid grid-cols-2 gap-16 items-center">

        {/* LEFT: about text */}
        <div>
          <h2 className="text-4xl font-semibold mb-6">
            About Us
          </h2>

          <p className="text-gray-600 text-lg leading-8">
             Welcome to <span className="font-bold">A.T.T.I.C</span> — a curated thrift store
            bringing sustainable, stylish, and affordable fashion to everyone.
            Each piece is carefully selected to give clothing a second life
            while helping you express your unique style.
            </p>
            <p>to check git</p>
        </div>

        {/* RIGHT: store image */}
        <div className="flex justify-center">
          <img
            src="/Store.png"
            alt="Store"
            className="w-[420px] h-[320px] object-cover"
          />
        </div>

      </div>

    </div>
  );
}

export default About;
