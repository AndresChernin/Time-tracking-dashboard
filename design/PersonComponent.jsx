function PersonComponent({img_link,typeOfActivity}){
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
            {typeOfActivity==="daily" &&<div className="person-part-lower-part">
              
                <h2 className="white-text">Daily</h2>
                <h2 className="blue-text">Weekly</h2>
                <h2 className="blue-text">Monthly</h2>
            </div>}
             {typeOfActivity==="weekly" &&<div className="person-part-lower-part">
              
                <h2 className="blue-text">Daily</h2>
                <h2 className="white-text">Weekly</h2>
                <h2 className="blue-text">Monthly</h2>
            </div>}
             {typeOfActivity==="monthly" &&<div className="person-part-lower-part">
              
                <h2 className="blue-text">Daily</h2>
                <h2 className="blue-text">Weekly</h2>
                <h2 className="white-text">Monthly</h2>
            </div>}
            
       </article>
    )
}