import {useNavigate} from 'react-router-dom'
import './directory-item.styles.scss'
const DirectoryItem = ({category}) =>
{
    const {title,imageUrl,route} = category;
    const navigate = useNavigate();
    const navigateHandler = () => navigate(route)

    return (
        <div className='directory-item-container' onClick={navigateHandler}>
                <div className="background-image"
                    style={{backgroundImage : `url(require(${imageUrl}))`}} />
                <div className='body'>
                  <h2>{title}</h2>
                  <h4>Shop Now</h4>
                </div>
        </div>
    )
}

export default DirectoryItem;