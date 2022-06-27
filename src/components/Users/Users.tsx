import React from 'react';
import styles from './users.module.css';
import {UserContainerPropsType} from "./UsersContainer";

type UsersPropsType = UserContainerPropsType

export const Users: React.FC<UsersPropsType> = (props) => {

   if(props.users.length === 0) {
       props.setUsers([
           {
               id: 1,
               photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
               followed: false,
               fullName: 'Vit',
               status: 'student',
               location: {city: 'Minsk', country: 'Belarus'}
           },
           {
               id: 2,
               photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
               followed: true,
               fullName: 'Ann',
               status: 'it-specialist',
               location: {city: 'Moscow', country: 'Russia'}
           },
           {
               id: 3,
               photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
               followed: false,
               fullName: 'Alex',
               status: 'doctor',
               location: {city: ' Kiev', country: 'Ukraine'}
           },
           {
               id: 4,
               photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
               followed: true,
               fullName: 'Hohol',
               status: 'it-ludoman',
               location: {city: 'Batymi', country: 'Georgia'}
           },
       ]);
   }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
              <span>
                  <div>
                      <img src={u.photoUrl} className={styles.userPhoto}/>
                  </div>
                  <div>
                      {u.followed
                          ? <button onClick={ () => props.unfollow(u.id) }>Unfollow</button>
                          : <button onClick={ () => props.follow(u.id) }>Follow</button>
                      }
                  </div>
              </span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </div>)
        }
    </div>
}