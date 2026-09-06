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
                    aria-pressed={typeOfActivity === "daily"}
                    className={`person-part-button ${
                                  typeOfActivity==="daily"? "white-text" : "blue-text"
                                 }`}>
                  
                    Daily
                   
              </button>  
                <button
                    type="button"
                    onClick={() => setTypeOfActivity("weekly")}
                    aria-pressed={typeOfActivity === "weekly"}
                    className={`person-part-button ${
                                  typeOfActivity==="weekly"? "white-text" : "blue-text"
                                 }`}>
                  
                    Weekly
                   
              </button>   
                 <button
                    type="button"
                    onClick={() => setTypeOfActivity("monthly")}
                    aria-pressed={typeOfActivity === "monthly"}
                    className={`person-part-button ${
                                  typeOfActivity==="monthly"? "white-text" : "blue-text"
                                 }`}>
                  
                    Monthly
                   
              </button>  
            </div>
             
            
       </article>
    )
}