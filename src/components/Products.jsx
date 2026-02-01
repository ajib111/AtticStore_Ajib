import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";

function Products() {
  return (
    <div className="bg-[#EBEBEB] py-20">

      <div className="grid grid-cols-3 gap-10 px-20">

        <div className="bg-white p-4">
          <img src={photo1} className="w-full h-64 object-cover" />
          <h3 className="mt-4 font-semibold">Vintage Black Hoodie</h3>
          <p className="text-gray-600">NPR 2,500</p>
        </div>

        <div className="bg-white p-4">
          <img src={photo2} className="w-full h-64 object-cover" />
          <h3 className="mt-4 font-semibold">Nike AirForce</h3>
          <p className="text-gray-600">NPR 1,800</p>
        </div>

        <div className="bg-white p-4">
          <img src={photo3} className="w-full h-64 object-cover" />
          <h3 className="mt-4 font-semibold">Watch</h3>
          <p className="text-gray-600">NPR 1,200</p>
        </div>

        <div className="bg-white p-4">
          <img src={photo4} className="w-full h-64 object-cover" />
          <h3 className="mt-4 font-semibold">Sweat for Baby</h3>
          <p className="text-gray-600">NPR 2,200</p>
        </div>

        <div className="bg-white p-4">
          <img src={photo5} className="w-full h-64 object-cover" />
          <h3 className="mt-4 font-semibold">Brown Boots</h3>
          <p className="text-gray-600">NPR 1,700</p>
        </div>

        <div className="bg-white p-4">
          <img src={photo6} className="w-full h-64 object-cover" />
          <h3 className="mt-4 font-semibold">Dr Martin</h3>
          <p className="text-gray-600">NPR 3,200</p>
        </div>

      </div>
    </div>
  );
}

export default Products;

{/*We can use map and array to use single product card and reuse it, have to learn */}




