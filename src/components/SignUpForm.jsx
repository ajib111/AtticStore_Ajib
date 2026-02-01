function SignUpForm(){

    return(

     <div className="bg-white py-12 px-10 w-96 mx-auto mt-12 rounded shadow-md">
       <h2 className=" text-2xl font-semibold mb-6 text-center" >
        Sign Up
       </h2>
       <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"/>

        <input 
            type="Email" 
            placeholder="Email" 
            className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"/>
    
       <input 
            type="password" 
            placeholder="Password" 
            className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"/>    
        <input 
            type="password" 
            placeholder="Comfirm Password" 
            className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"/>     
        
        <button className="w-full bg-black text-white py-2 font-semibold rounded hover:bg-gray-800">Sign Up</button>
     </div> 

    );

}

export default SignUpForm;