import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk='
                    alt='pic'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}