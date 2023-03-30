import { useDispatch } from 'react-redux';
import styles from '../styles/userinfo.module.css';
import { deleteUser } from '../actions';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const UserInfo = (props) => {
    const { user } = props;
    const dispatch = useDispatch();
    const likeRef = useRef(0);
    let isLiked = false;

    const likeUser = () => {
        console.log("Like");
        if (isLiked) {
            likeRef.current.style.backgroundColor = "white";
            isLiked = !isLiked;
        }
        else {
            likeRef.current.style.backgroundColor = "red";
            isLiked = !isLiked;
        }
    }
    const dpUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`
    return (
        <div className={styles.container}>

            <div className={styles.photo}>
                <img className={styles.dp}
                    src={dpUrl}
                    alt='dp'
                ></img>
            </div>
            <div className={styles.info}>
                <h4 className={styles.name}>{user.name}</h4>
                <div className={styles.details}>
                    <img alt='email'
                        src='https://cdn-icons-png.flaticon.com/512/646/646094.png'
                    ></img>
                    <span>{user.email}</span>
                </div>
                <div className={styles.details}>
                    <img alt='phone'
                        src='https://cdn-icons-png.flaticon.com/512/126/126341.png'
                    ></img>
                    <span>{user.phone}</span>
                </div>
                <div className={styles.details}>
                    <img alt='website'
                        src='https://cdn-icons-png.flaticon.com/512/1006/1006771.png'
                    ></img>
                    <span>{user.website}</span>
                </div>
            </div>
            <div className={styles.footer}>
                <div>
                    <img ref={likeRef}
                        src='https://cdn-icons-png.flaticon.com/512/535/535285.png'
                        alt='like'
                        onClick={likeUser}
                    ></img>
                </div>
                <div>
                    <Link to={`/editProfile/${user.id}`}>
                        <img src='https://cdn-icons-png.flaticon.com/512/1828/1828911.png'
                            alt='edit'
                        ></img>
                    </Link>
                </div>
                <div>
                    <img src='https://cdn-icons-png.flaticon.com/512/484/484611.png'
                        alt='delete'
                        onClick={() => dispatch(deleteUser(user.id))}
                    ></img>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;