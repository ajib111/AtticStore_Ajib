import NavLink from "./NavLink";
function Newsletter({ openSignUp }) {

  return (
  
    <div className="bg-[#EBEBEB] grid grid-cols-3">

      <div className=" py-16 px-20 text-center">
        <NavLink/>
      </div>
      

    <div className=" py-16 px-20 text-center">

      <h2 className="text-3xl font-semibold mb-4">
        STAY TUNED
      </h2>

      <p className="text-gray-700 mb-8"> 
        Sign up and stay up to date for our new products!
      </p>

      {/* Input + Button */}
      <div className="flex justify-center gap-4 flex-wrap">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 w-72 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      <button onClick={openSignUp}>
        Sign In
      </button>
      </div>

    </div>
    {/*Map*/}
    <div className="w-1/2 flex items-center justify-right p-4">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d872.5049105093126!2d85.3505223560265!3d27.672342387657384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb195ed948c2ef%3A0xf433f1852138e628!2sA.T.T.I.C!5e0!3m2!1sen!2snp!4v1769921450412!5m2!1sen!2snp" width="600" height="300"  loading="lazy"></iframe>
    </div>
    </div>
  );
}
export default Newsletter;
