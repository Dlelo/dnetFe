import "./sidebar.css"
import{RssFeed, Groups, Chat, VideoLibrary, Bookmark, Help, School, Work, Event} from "@mui/icons-material"

export default function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                  <RssFeed className="sidebarIcon"/>
                  <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                  <Chat className="sidebarIcon"/>
                  <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                  <VideoLibrary className="sidebarIcon"/>
                  <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                  <Groups className="sidebarIcon"/>
                  <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                  <Bookmark className="sidebarIcon"/>
                  <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                  <Help className="sidebarIcon"/>
                  <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                  <Work className="sidebarIcon"/>
                  <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                  <Event className="sidebarIcon"/>
                  <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                  <School className="sidebarIcon"/>
                  <span className="sidebarListItemText">Courses</span>
                </li>
                <button className="sidebarButton">Show more</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                        <span className="sidebarFriendName">Dee Don</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                        <span className="sidebarFriendName">Dee Don</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                        <span className="sidebarFriendName">Dee Don</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                        <span className="sidebarFriendName">Dee Don</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                        <span className="sidebarFriendName">Dee Don</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
                        <span className="sidebarFriendName">Dee Don</span>
                    </li>
                </ul>
            </ul>
            </div>

        </div>
    )
}