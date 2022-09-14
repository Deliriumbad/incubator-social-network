import axios from "axios";
import {GetResponseType} from "../components/Users/UsersContainer";
import {ProfileType} from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "1b7699e2-f330-483d-8e4c-a8f8fa802aee"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {}, )

    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/`+userId)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
