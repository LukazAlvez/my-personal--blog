import '../UserPicture/styles.css'

const UserPicture = ({url, alt}) => {
    return (
        <img className='img_user' src={url} alt={alt}/>
    )
}

export default UserPicture;