import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Post.css'

const failedSearchResultMessages = [
    "Gaze upon the failure of your search, for it is dissimilar to anything we have ever known.",
    "Alas, your search yields naught but an abyss, a void deeper than the darkest of dungeons.",
    "In the realm of cyberspace, your query finds no respite. Despair, for the information eludes even the keenest eyes.",
    "Behold the futility of your digital expedition, a barren wasteland bereft of the knowledge sought.",
    "A fruitless quest unfolds before thee, as shadows of non-existence loom over the barren fields of information. Your serach was for naught.",
    "As the torch dims in the corridors of data, so too does your search falter, lost in the echoes of an unforgiving void."
  ];

function getFailedSearchResultMessage() {
    const randomIndex = Math.floor(Math.random() * failedSearchResultMessages.length);
    return failedSearchResultMessages[randomIndex];
  }
  
function Post(props) {
    const postLink = `/post/${props.post_id}/${props.title}`;

    if (props.foundpost) {
        return (
            <tr className='post'>
                <td className='postcell1 postcelldata'>
                    <Link to={postLink} className='post-link'>
                        <div>{props.title}</div>
                    </Link>
                </td>
                <td className='postcell2 postcelldata'>{props.size}</td>
                <td className='postcell3 postcelldata'>{props.post_id}</td>
                <td className='postcell4 postcelldata'>{props.timestamp}</td>
                <td className='postcell5 postcelldata'>{props.uploader}</td>
            </tr>
        );

    }
    else {
        return (
            <>
            <tr className='post nofound'>
                <td className='postcell1'>No results were returned, keep looking.</td>
                <td className='postcell2'>{props.size}</td>
                <td className='postcell3'>{props.post_id}</td>
                <td className='postcell4'>{props.timestamp}</td>
                <td className='postcell5'>{props.uploader}</td>
            </tr>
            <tr className='failedsearch' style={{backgroundColor: "var(--red-bright)"}}>
                <td className='failedSearchMessage' colSpan='5'>{props.title}</td>
            </tr>
            </>
        );
    };
}

Post.propTypes = {
    post_id: PropTypes.number,
    title: PropTypes.string,
    size: PropTypes.string,
    // Add other prop types as needed
}

Post.defaultProps = {
    post_id: "  -",
    title: getFailedSearchResultMessage(),
    size: " -",
    uploader: " -",
    timestamp: " -",
    foundpost: false,
}

export default Post;
