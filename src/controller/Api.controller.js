


export default class ApiRequest {

    static baseUrl = "https://habits-kenzie.herokuapp.com/api/";

    static token = JSON.parse(localStorage.getItem("@kenzie_blog-token"));
    
    

    static async userLogin(data){
        const response =  await fetch(`${this.baseUrl}userLogin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(err => console.log(err));
        
        return response 
    }



    static async updateProfile(data){
        const response =  await fetch(`${this.baseUrl}user/profile`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(err => console.log(err));
        
        return response 
    }



    static async createHabit(data){
        const response = await fetch(`${this.baseUrl}habits`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`
          },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(err => console.log(err));

        return response;
    }



    static async readAllHabits(){
        const response = await fetch(`${this.baseUrl}habits`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${this.token}`
        }
    })
    .then(response => response.json())
    .catch(err => console.error(err));

        return response;
    }



    static async readByCategory(category){
        const response =  await fetch(`${this.baseUrl}habits/category/${category}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${this.token}`
        }
    })
    .then(response => response.json())
    .catch(err => console.error(err));

        return response;
    }



    static async updateHabit(data,id){
        const response = await fetch(`${this.baseUrl}habits/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`
        },
        body: JSON.stringify(data)      
     })
    .then(response => response.json())
    .catch(err => console.log(err));

        return response;
    }



    static async completeHabit(id){
        const response =  await fetch(`${this.baseUrl}habits/complete/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`
        }
    })
    .then(response => response.json())
    .catch(err => console.log(err));

        return response;
    }

    

    static async deleteHabit(id){
        const resposne = await fetch(`${this.baseUrl}habits/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${this.token}`
        }
    })
    .then(response => response.json())
    .catch(err => console.log(err));
    
        return resposne;
    }

    
}
