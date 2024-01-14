import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Post.css'

function Post(props) {
    const postLink = `/post/${props.post_id}/${props.title}`;

    return (
        <tr className='post'>
            <td className='postcell1'>
                <Link to={postLink} className='post-link'>
                    <div>{props.title}</div>
                </Link>
            </td>
            <td className='postcell2'>{props.size}</td>
            <td className='postcell3'>{props.post_id}</td>
            <td className='postcell4'>{props.timestamp}</td>
            <td className='postcell5'>Krissssz</td>
        </tr>
    );
}

Post.propTypes = {
    post_id: PropTypes.number,
    title: PropTypes.string,
    size: PropTypes.string,
    // Add other prop types as needed
}

Post.defaultProps = {
    post_id: "  -",
    title: " No post like this was found",
    size: " -",
    uploader: " -",
    timstamp: " -"
}

export default Post;
