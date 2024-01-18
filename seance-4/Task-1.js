function entierEnChaine(x){
    console.log(isNaN(x))
    if(!isNaN(x)){
        let chaine = x.toString()
        console.log(chaine)
    }else{
        console.log("Erreur conversion impossible")
    }
}

//entierEnChaine(56) // résultat : “56”
//entierEnChaine(500) // résultat : “500”
//entierEnChaine({x:'15'}) // Erreur conversion impossible

function sommeTableau(t){
    if(t.length==0){
        console.log("table is empty")
        return 
    }
    let s = 0;
    for(el of t){
        s+=el
    }
    console.log(s)
    return s
}
//sommeTableau([1,2,3,4]) // résultat : 10
//sommeTableau([0,6,11,-8]) // résultat : 9
//sommeTableau([]) // résultat : table is empty


function moyenneTableau(t){
    console.log("moyenne tableau : " + sommeTableau(t) / t.length)
}

//moyenneTableau([1,2,3,4]) // résultat : 2.5
//moyenneTableau([0,6,11,-8]) // résultat : 2.25


let T = [
    {
    id : 1,
    first:"ahmed",
    last:"ben ali",
    age : 23,
    email : "ahmed.benali@gmail.com",
    address :"Tunis"
    },
    {
    id : 2,
    first:"aziz",
    last:"ameri",
    age : 44,
    email : "ahmed.benali@gmail.com",
    address :"Tunis"
    },
    {
    id : 3,
    first:"khalil",
    last: "ben lamine",
    age : 18,
    email : "ahmed.benali@gmail.com",
    address :"Tunis"
    },
    ]


    function getUserById(tab,id){

        // table empty
        if(tab.length ==0){console.log("cannot get user with id : table empty"); return}
      /*  
        for (let i=0;i<T.length;i++){
            if(T[i].id){

            }
        }*/
        for (user of tab){
            if(user.id == id){
                console.log(user)
                return 
            }
        }

        console.log("user not found with that id")

    }

    getUserById(T,1)
    getUserById([],1)
    getUserById(T,4)

    function compareUserWithAge(user1, user2) {
        if (user1.age > user2.age) {
          return 1;
        } else if (user1.age < user2.age) {
          return -1;
        }
        // a must be equal to b
        return 0;
      }
    function sortUsers(tab){
        if(tab.length ==0){console.log("cannot get user with id : table empty"); return}

       
        let sortedArr = tab.sort(compareUserWithAge)
        let namesArr = []
        for (user of sortedArr){
            namesArr.push(user.first)
        }
        console.log(namesArr)
    }
    sortUsers(T) // resultat :[‘khalil’, ‘ahmed’,’aziz’]