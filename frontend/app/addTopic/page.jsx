
export default function AddTopic(){
    return(
        <from class ="flex flex-col gap-3">
            <input className="boer border-slate-500 px-8 py-2" 
            type="text" placeholder="Topic title"/> 

             <input className="boer border-slate-500 px-8 py-2" 
            type="text" placeholder="Topic Description"/> 

            <button className="bg-green-600 font-bold text-white
             py-3 px-6 w-fit">Add Topic</button>
        </from>
        
    );
}