function Ceo() {
  return (
    <div className="bg-white py-24 px-20">

      <div className="grid grid-cols-2 gap-16 items-center">

        {/* Left photo */}
        <div className="flex justify-center">
          <img
            src="/Ceo.jpg"
            alt="CEO"
            className="w-[320px] h-[400px] object-cover"
          />
        </div>

        {/* Right text */}
        <div>
          <h3 className="text-3xl font-semibold mb-6">
            A Word From the Founder
          </h3>

          <p className="text-gray-600 text-lg leading-8">
            <span className="font-bold">A.T.T.I.C</span>  was created from passion for fashion and
            creativity. My goal is to make thrift shopping
            accessible, affordable, and stylish for everyone.
            Each product is selected with care and purpose.
          </p>

          <p className="mt-8 font-semibold">
            — AJIB DAHAL
          </p>

          <p className="text-sm text-gray-500">
            Founder & Creative Director
          </p>
        </div>

      </div>

    </div>
  );
}

export default Ceo;
