import React, { useContext, useState } from 'react';
import SearchContext from '/src/Contexts/SearchContext.jsx';
import { formatTimestamp } from '../services/FormatTimestamp';
import Post from './Post';
import { getNonEmptyResponse } from '../services/NonEmptyResponse';
import './PostContainer.css'

function PostContainer(props) {
    const { searchResults } = useContext(SearchContext);

    getNonEmptyResponse(searchResults)
    return (
        <div className="postcontainer">
            <table className="posttable">
                <thead className="posttableheader">
                    <tr>
                        <th className="postcell1">Name</th>
                        <th className="postcell2">Size</th>
                        <th className="postcell3">Post ID</th>
                        <th className="postcell4">Time</th>
                        <th className="postcell5">Uploader</th>
                    </tr>
                </thead>

                <tbody className="posttablebody">
                    {searchResults.map((post) => (
                        <Post
                            key={post.post_id}
                            post_id={post.post_id}
                            title={post.title}
                            description={post.description}
                            user_id={post.user_id}
                            timestamp={formatTimestamp(post.timestamp)}
                            foundpost={getNonEmptyResponse(searchResults)}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PostContainer;
/*
post_id: " No post ID defined",
    title: " No title defined",
    size: " No size defined",
    uploader: " No uploader defined",
    timstamp: " No timestamp defined"
*/