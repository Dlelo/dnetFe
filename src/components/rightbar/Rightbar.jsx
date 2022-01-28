import "./rightbar.css"


export default function Rightbar(){
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="anniversaryContainer">
                    <img src="assets/images/anniversary.jpeg" class="anniversaryImg" alt="" />
                    <span className="anniversaryTag"><b>Hooli</b> and <b>4 other</b> have an anniversary today
                    </span>
                </div>
                <img className="rightbarAd" src="assets/images/ad.jpeg" alt="" />
                <h4 className="rightbarTitle">Follow</h4>
                <ul className="rightbarfollowList">
                    <li className="righbarFollow">
                    <div className="rightbarProfileImgContainer">
                        <img className="rightbarProfileImg" src="assets/person/1.jpeg" alt="" />
                        <span className="rightbarUsername">Alm Inc</span>
                    </div>
                    <div className="rightbarCategoryContainer">
                            <span className="righbarCategory">Company</span>
                            <span className="righbarCategorySpecialization">. Technology</span>
                    </div>
                    <button className="rightbarFollowButton">Follow</button>
                    <div className="rightbarTextContainer"></div>

                    </li>
                    <li className="righbarFollow">
                    <div className="rightbarProfileImgContainer">
                        <img className="rightbarProfileImg" src="assets/person/1.jpeg" alt="" />
                        <span className="rightbarUsername">Alm Inc</span>
                    </div>
                    <div className="rightbarCategoryContainer">
                            <span className="righbarCategory">Company</span>
                            <span className="righbarCategorySpecialization">. Technology</span>
                    </div>
                    <button className="rightbarFollowButton">Follow</button>
                    <div className="rightbarTextContainer"></div>

                    </li>
                    <li className="righbarFollow">
                    <div className="rightbarProfileImgContainer">
                        <img className="rightbarProfileImg" src="assets/person/1.jpeg" alt="" />
                        <span className="rightbarUsername">Alm Inc</span>
                    </div>
                    <div className="rightbarCategoryContainer">
                            <span className="righbarCategory">Company</span>
                            <span className="righbarCategorySpecialization">. Technology</span>
                    </div>
                    <button className="rightbarFollowButton">Follow</button>
                    <div className="rightbarTextContainer"></div>

                    </li>
                    <li className="righbarFollow">
                    <div className="rightbarProfileImgContainer">
                        <img className="rightbarProfileImg" src="assets/person/1.jpeg" alt="" />
                        <span className="rightbarUsername">Alm Inc</span>
                    </div>
                    <div className="rightbarCategoryContainer">
                            <span className="righbarCategory">Company</span>
                            <span className="righbarCategorySpecialization">. Technology</span>
                    </div>
                    <button className="rightbarFollowButton">Follow</button>
                    <div className="rightbarTextContainer"></div>

                    </li>


                </ul>
            </div>
        </div>
    )
}