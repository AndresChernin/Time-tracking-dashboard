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
               <img src={img_link} className="activity-img-part" alt=""/>
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
                        <button
                          type="button"
                          className="ellipsis-button"
                          onClick={() => setShowMenu(!showMenu)}
                          aria-label={`Open ${title} activity menu`}
                          aria-expanded={showMenu}
                          aria-haspopup="true">
                         <img 
                            src={img_elli} 
                            className="ellipsis-part"  
                            alt=""
                           
                         />
                         </button>

                {showMenu && (
                  <div className="menu-part">
                    <button 
                      type="button"
                      className={`menu-part-button ${
                          activeType === "daily" ? "white-text" : "blue-text"
                       }`}
                      onClick={() => { 
                      setLocalType("daily"); 
                      setShowMenu(false); 
                               }}
                      aria-pressed={activeType === "daily"}>
                      Daily
                    </button>
                   
                    <button 
                      type="button"
                 className={`menu-part-button ${
        activeType === "weekly" ? "white-text" : "blue-text"
    }`}
    onClick={() => { 
        setLocalType("weekly"); 
        setShowMenu(false); 
    }}
    aria-pressed={activeType === "weekly"}
>
    Weekly
</button>
                    <button 
                      type="button"
                 className={`menu-part-button ${
        activeType === "monthly" ? "white-text" : "blue-text"
    }`}
    onClick={() => { 
        setLocalType("monthly"); 
        setShowMenu(false); 
    }}
    aria-pressed={activeType === "monthly"}
>
    Monthly
</button>
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