function Blank() {
  return (

    <div className="flex flex-col items-center py-12">
      
      {/* Text */}
      <h1
        className="text-center text-[40px] "
        style={{ fontFamily: "'Gilda Display', serif" }}
      >
        Available this week
      </h1>

      {/* Line below */}
      <div className="w-85 h-1 bg-black mt-2 rounded"></div>

    </div>

  );
}

export default Blank;
