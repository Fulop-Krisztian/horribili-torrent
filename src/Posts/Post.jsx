import PropTypes from 'prop-types';



//const datarow = postdata.map()


function Post(props) {

    return (
        <tr className='post'>
            <td className='postcell1'><a>{props.title}</a></td>
            <td className='postcell2'>{props.size}</td>
            <td className='postcell3'>nothing</td>
            <td className='postcell4'>{}</td>
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
    title: " No title defined",
    size: " No size defined",
    uploader: " No uploader defined",
    timstamp: " No timestamp defined"
}

export default Post