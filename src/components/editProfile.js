import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import styles from '../styles/editProfile.module.css'
import { editUserDetails } from '../actions'
import { useDispatch } from 'react-redux';

export default function EditProfile() {
    let nameRef = useRef('');
    let emailRef = useRef('');
    let phoneRef = useRef('');
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User id', id);
        dispatch(editUserDetails({
            nameRef, emailRef, phoneRef
        }, parseInt(id)));
        navigate('/');
    }
    return (
        <div >
            <div className={styles.wrapper}>

            </div>
            <form className={styles.container} onSubmit={handleSubmit}>
                <h1 style={{ textAlign: 'center' }}>Edit Profile</h1>
                <div>
                    Name: <input type='text' id="username" placeholder='Name' onChange={(e) => nameRef = e.target.value}></input>
                </div>
                <div>
                    Email: <input type='email' id="email" placeholder='Email' onChange={(e) => emailRef = e.target.value}></input>
                </div>
                <div>
                    Phone: <input type='phone' id="phone" placeholder='Phone' onChange={(e) => phoneRef = e.target.value}></input>
                </div>
                <div>
                    <button className={styles.btn} type='submit'>Update</button>
                    <button className={styles.btn} type='submit' onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </div>
    )
}