import Post from "./Post";

function PostContainer(props) {
    if (props.renderposts) {
        return (
            <div className="postcontainer">
                <table className="posttable">
                    <thead className="posttableheader">
                        <tr>
                            <th className="postcell1">Name</th>
                            <th className="postcell2">Size</th>
                            <th className="postcell3"></th>
                            <th className="postcell4">Time</th>
                            <th className="postcell5">Uploader</th>
                        </tr>
                    </thead>
                    <tbody className="posttablebody">
                        <Post post_id="1" />
                        <Post post_id="2" />
                        <Post post_id="3" />
                        <Post post_id="1" />
                        <Post />
                        <Post post_id="1" title=""/>
                        <Post post_id="1" />
                        <Post post_id="1" />
                        <Post post_id="1" />
                        <Post post_id="1" />
                        <Post post_id="1" />
                        <Post post_id="1" />
                        <Post post_id="1" />
                        <Post post_id="1" />
                        <Post post_id="1" />
                        <Post post_id="1" />
                    </tbody>
                </table>
            </div>
        );
    }
    else {
        return
    }
}

export default PostContainer