import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/men.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

export type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    onPageChanged: (userId: number) => void
    followingInProgress: Array<number>
}

export const Users: React.FC<UsersPropsType> = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
        if (i === 20) break;
    }

    return <div>
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selected : ''}
                                 onClick={(e) => props.onPageChanged(p)}>{p}</span>
                })
            }
        </div>

        {
            props.users.map(u => <div key={u.id}>
              <span>
                  <div>
                        <NavLink to={'./../profile/' + u.id}>
                             <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                  className={styles.userPhoto}/>
                        </NavLink>

                  </div>
                  <div>
                      {u.followed
                          ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.unfollow(u.id)
                                        /* usersAPI.unfollow(u.id)*/
                                        /*axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "1b7699e2-f330-483d-8e4c-a8f8fa802aee"
                                        }
                                    })*/
                                        /*.then((res) => {
                                            if (res.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        });*/
                                    }}>Unfollow</button>

                          : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.follow(u.id)

                                        /*  usersAPI.follow(u.id)*/
                                        /*axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "1b7699e2-f330-483d-8e4c-a8f8fa802aee"
                                            }
                                        })*/
                                        /*.then((res) => {
                                            if (res.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        });*/
                                    }}>Follow</button>
                      }
                  </div>
              </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </div>)
        }
    </div>
}