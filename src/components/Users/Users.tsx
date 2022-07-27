import React from 'react';
import styles from './users.module.css';
import {UserContainerPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../../src/assets/images/men.png';
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = UserContainerPropsType

type GetResponseType = {
    items: Array<UserType>
    totalCount: number
    error?: null
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get<GetResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
                console.log(res.data.items)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get<GetResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                console.log(res.data.items)
            });
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
            if (i === 20) break;
        }

        return <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={this.props.currentPage === p ? styles.selected : ''}
                                     onClick={(e) => this.onPageChanged(p)}>{p}</span>
                    })
                }
            </div>

            {
                this.props.users.map(u => <div key={u.id}>
              <span>
                  <div>
                      <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                  </div>
                  <div>
                      {u.followed
                          ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                          : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
}