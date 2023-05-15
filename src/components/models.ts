export interface PostModel {
  id: number,
  text: string,
  author: {
    email: string,
    nickname: string,
    id: string,
    profile_picture: string
  },
  createdAt: string,
  files: [],
  likesCount: number
}

/*
{
        "author": {
            "email": "t1",
            "nickname": "",
            "roles": [
                "USER"
            ],
            "id": 1,
            "createdAt": "2023-05-12T12:40:14.153768",
            "profile_picture": null
        },
        "text": "$copy Michigan",
        "id": 1,
        "createdAt": "2023-05-12T12:42:22.151599",
        "files": [],
        "likesCount": 0
    }
*/
