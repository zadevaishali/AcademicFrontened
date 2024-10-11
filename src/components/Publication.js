import { useState } from "react";

const Publication=()=>{

    const[publication,setPublication]=useState({
        title:'',
        publication:'',
        publicationDate:''
    });
    return(
           <div>
              <h1>Publication</h1>
              <form>
              <input 
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={publication.title}
                    onChange={handleChange}
                />
                <input
                     type="text"
                     name="publisher"
                     placeholder="Publisher"
                     value={publication.publication}
                     
                />

                <input
                   type="date"
                   name="publicationDate"
                   placeholder="publicationDate"
                   va
                />
                <button type="button">Add</button>
              </form>


           </div>
    );
}

export default Publication;