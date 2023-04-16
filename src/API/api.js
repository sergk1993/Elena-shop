import axios from 'axios';


const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
	headers: {
		'API-KEY': process.env.REACT_APP_API_KEY
	}
})



export const userApi = {
	getUsers(currentPage = 1, pageSize = 10,) {
		return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
	},

	subscribe(userId) {
		return instance.post(`/follow/${userId}`)
	},

	unsubscribe(userId) {
		return instance.delete(`/follow/${userId}`)
	},


}

export const authApi = {
	me() {
		return instance.get('/auth/me').then(resp => resp.data)
	},

	login(email, password, rememberMe = false) {
		return instance.post('/auth/login/', { email, password, rememberMe }).then(resp => resp.data)
	},

	logOut() {
		return instance.delete('/auth/login')
	}
}


