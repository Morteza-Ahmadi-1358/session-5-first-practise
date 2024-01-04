import React, {useEffect, useState} from 'react'
import Loading from './Loading'
import {getUsers} from '../database/Users'
import styles from './UsersList.module.scss'

const UsersList = () => {
    const [userList, setUserList] = useState([])
    const [refresh, setRefresh] = useState(true)
    useEffect(() => {
        setTimeout(() => { setUserList(getUsers()) }, 2000)
        return () => {
            setUserList([])
        }
    }, [refresh])
    if (userList.length === 0) {
        return <Loading />
    }
    return (
        <div>
            {
                userList.map(user => {
                    return (
                        <div className={`${styles.dv_main_content}`}>
                            <span>{user.firstname} {user.lastname}</span>
                        </div>
                    )
                })
            }
            <button className={`${styles.btn_refresh}`} onClick={() => setRefresh(!refresh)}>بارگذاری مجدد</button>
        </div>
    )
  }

export default UsersList