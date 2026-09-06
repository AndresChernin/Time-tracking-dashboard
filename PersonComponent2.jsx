function PersonComponent2({img_link,typeOfActivity,setTypeOfActivity}){
    return(

        <article className="person-part">
            <div className="person-part-upper-part">
               <div className="person-part-inner-container">
               <img src={img_link} className="img-part" alt="image of jeremy"/>
               <div className="person-part-p-h-part">
                   <p>Report for</p>
                   <h1>Jeremy Robson</h1>
               </div>
              </div>
            </div>
            <div className="person-part-lower-part">
              <button
                    type="button"
                    onClick={() => setTypeOfActivity("daily")}
                    aria-pressed={typeOfActivity === "daily"}>
                    <h2 className={typeOfActivity==="daily"? "white-text" : "blue-text"}
                       onClick={()=>setTypeOfActivity("daily")}>
                    Daily
                   </h2>
              </button>  
               <button
                    type="button"
                    onClick={() => setTypeOfActivity("weekly")}
                    aria-pressed={typeOfActivity === "weekly"}>
                     <h2 className={typeOfActivity==="weekly"? "white-text" : "blue-text"}
                        onClick={()=>setTypeOfActivity("weekly")}>
                        Weekly
                    </h2>
                    </button>   
                <button
                    type="button"
                    
                    onClick={() => setTypeOfActivity("monthly")}
                    aria-pressed={typeOfActivity === "monthly"}>
                <h2 className={typeOfActivity==="monthly"? "white-text" : "blue-text"}
                onClick={()=>setTypeOfActivity("monthly")}>
                    Monthly</h2>
                </button>
            </div>
             
            
       </article>
    )
}