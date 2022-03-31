
function Layout({children}){
    let groups = ['BTS','Twice','Red Velvet','Got7','NCT','Monsta X']
    return (
        <div className="main-container">
            <div className="announcement-bar">
                    <h1 id="announcement">coming soon</h1>
            </div>
            <div className="nav-container">  
                <div className="nav-content">
                    <div className="nav-brand">
                        <h1>kpop trading app</h1>
                    </div>
                    <div className="nav-search">
                        
                        <form>
                            <input type="text" id="search" />
                        </form>
                    </div>
                    <div className="nav-buttons">
                        <p>sell/trade</p>
                        <p>messages</p>
                        <p>notifications</p>
                        <p>profile</p>
                    </div>
                </div>
            </div>
            <div className="group-filters">
                {
                    groups.map((group)=> {
                        return (
                            <div className="filter">
                                <h2>{group}</h2>
                            </div>
                        )
                        
                    })
                }
            </div>
            <div className="content">
                {children}
            </div>
            <div className="footer">
                <p>About</p>
                <p>Support</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    )
    
}

export default Layout;