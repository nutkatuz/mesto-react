class Api {
  constructor({
    baseUrl,
    headers
  }) {
    this.baseUrl = baseUrl
    this.headers = headers
  }

  getInitialItems() {
    return fetch(`${this.baseUrl}/v1/cohort-14/cards`, {
        headers: this.headers
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  postItem(item) {
    return fetch(`${this.baseUrl}/v1/cohort-14/cards`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          name: item.name,
          link: item.link
        })
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  deleteItem(_id) {
    return fetch(`${this.baseUrl}/v1/cohort-14/cards/${_id}`, {
        method: 'DELETE',
        headers: this.headers
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  patchUserAvatar(avatar) {
    return fetch(`${this.baseUrl}/v1/cohort-14/users/me/avatar`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
          avatar: avatar
        })
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  getUserData() {
    return fetch(`${this.baseUrl}/v1/cohort-14/users/me`, {
        headers: this.headers
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  patchUserData(name, about) {
    return fetch(`${this.baseUrl}/v1/cohort-14/users/me`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
          name,
          about
        })
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  putLike(_id) {
    return fetch(`${this.baseUrl}/v1/cohort-14/cards/likes/${_id}`, {
        method: 'PUT',
        headers: this.headers
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  deleteLike(_id) {
    return fetch(`${this.baseUrl}/v1/cohort-14/cards/likes/${_id}`, {
        method: 'DELETE',
        headers: this.headers
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co',
  headers: {
      authorization: 'd53467ef-75db-4cf1-9a1c-2d2c544f18c8',
      'Content-Type': 'application/json'
  }
})

// [
//   {
//     "likes": [],
//     "_id": "5d1f0611d321eb4bdcd707dd",
//     "name": "Байкал",
//     "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//     "owner": {
//       "name": "Jacques Cousteau",
//       "about": "Sailor, researcher",
//       "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
//       "_id": "ef5f7423f7f5e22bef4ad607",
//       "cohort": "local"
//     },
//     "createdAt": "2019-07-05T08:10:57.741Z"
//   },
//   {
//     "likes": [],
//     "_id": "5d1f064ed321eb4bdcd707de",
//     "name": "Архыз",
//     "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//     "owner": {
//       "name": "Jacques Cousteau",
//       "about": "Sailor, researcher",
//       "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
//       "_id": "ef5f7423f7f5e22bef4ad607",
//       "cohort": "local"
//     },
//     "createdAt": "2019-07-05T08:11:58.324Z"
//   }
// ]