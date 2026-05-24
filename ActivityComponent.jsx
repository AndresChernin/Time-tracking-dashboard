function ActivityComponent({img_link, img_elli, title,color,
                            typeOfActivity,activityData,resetCounter}){
        const[showMenu, setShowMenu]=React.useState(false);
        const [localType, setLocalType] = React.useState(null);
        const activeType = localType || typeOfActivity;
        const localCurrent =activityData.timeframes[activeType].current;

        const localPrevious =activityData.timeframes[activeType].previous;
        const activityMap={
           daily: "Day",
           weekly: "Week",
           monthly: "Month"
     }
        React.useEffect(()=>{setLocalType(null);},[resetCounter]);
    return(
        <article className={`activity-part ${color}`}>
            <div className="activity-part-upper-part">
               <img src={img_link} className="activity-img-part" alt="image of activity"/>
            </div>
            <div className="activity-part-lower-part">
              <div className="lower-part-inner-part">
                      <div className="lower-part-left">
                          <p className="fat-white-p">{title}</p>
                          <p className="big-white-p">{localCurrent}hrs</p>
                          <p className="blue-text desktop-last-text">
                            Last {activityMap[activeType]} - {localPrevious}hrs
                          </p>
                      </div>
                      <div className="lower-part-right">
                         <img 
                            src={img_elli} 
                            className="ellipsis-part"  
                            alt="image of ellipsis"
                            onClick={()=>setShowMenu(!showMenu)}
                         />

                {showMenu && (
                  <div className="menu-part">
                    <p className={activeType==="daily"? "white-text" : "blue-text"}
                    onClick={() => {
                                    setLocalType("daily");
                                    setShowMenu(false);
                                  }}>
                       Daily
                    </p>
                    <p className={activeType==="weekly"? "white-text" : "blue-text"}
                       onClick={() => {
                                       setLocalType("weekly");
                                       setShowMenu(false);
                                }}>
                       Weekly
                    </p>
                    <p className={activeType==="monthly"? "white-text" : "blue-text"} 
                    onClick={() => {
                                    setLocalType("monthly");
                                    setShowMenu(false);
                                }}>
                        Monthly
                    </p>
                  </div>
                )
                }   

                  <p className="blue-text mobile-last-text">
                    Last {activityMap[activeType]} - {localPrevious}hrs</p>
                </div>
              </div>
            </div>
        </article>
    )
}