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
                             <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>

                  </div>
                  <div>
                      {u.followed
                          ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                          : <button onClick={() => props.follow(u.id)}>Follow</button>
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