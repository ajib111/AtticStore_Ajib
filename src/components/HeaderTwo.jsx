function HeaderTwo({ openSignUp }) {
  return (
    <div className="bg-white p-5 flex items-center justify-between">
      
      <div>
        <input
          type="text"
          placeholder="Search"
          className="border px-2 py-1"
        />
      </div>

      <div className="text-xl font-bold border-2 border-black px-4 py-1 rounded">
        ___A.T.T.I.C___
      </div>

      <div
        onClick={openSignUp}
        className="cursor-pointer"
      >
        Sign In
      </div>

    </div>
  );
}

export default HeaderTwo;
