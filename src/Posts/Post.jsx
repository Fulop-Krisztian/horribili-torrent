import PropTypes from 'prop-types';

function Post(props) {

    return (
        <tr className='post'>
            <td className='postcell1'><a>{props.title}</a></td>
            <td className='postcell2'>asdf</td>
            <td className='postcell3'>Timestamp</td>
            <td className='postcell4'>Size</td>
            <td className='postcell5'>Krissssz</td>
        </tr>
    );
}

Post.propTypes = {
    post_id: PropTypes.number,
    title: PropTypes.string,
}

Post.defaultProps = {
    post_id: " No post ID defined",
    title: " No title defined"
}

export default Post