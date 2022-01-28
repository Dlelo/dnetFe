import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import  {Posts} from "../../dummydata"


export default function Feed(){
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {Posts.map(pst=>(
                    <Post key={pst.id} post={pst}/>
                ))}

            </div>
        </div>
    )
}