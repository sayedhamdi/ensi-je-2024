let t = [1,4,21,25,5]


//call back function
function compareFunc(a,b){
    if (a>b){ return 1}
    if(b>a){
        return -1
    }
    return 0
}
// high order method 
console.log(t.sort(compareFunc))


function afficher(n){
    n = n+1
}
// ForEach method


let tableau1 = t.forEach(afficher)

console.log(tableau1)



// map  is a function not procedure //   [1,2,3] => mapfunction +1 => [ 2,3,4]  

let salaries = [200,150,480,1500, 300]


let salaries2024 = salaries.map(salary =>salary +100 )

console.log(salaries,salaries2024)

// arrow function 

function sayHello(){
    console.log("hello")
}

let sayHello1 = (name)=> {
    console.log("hello "+ name )
}

sayHello1("sami")



function somme (a,b){
    return a+b
}
function prod(a,b){
    return a*b
}

function afficherResultat(a,b,fnc){
    let res = fnc(a,b)
    console.log("resulat est : "+ res)
}


afficherResultat(3,2,prod)


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

let namesCapitalzed = T.map(person => person.first)
              .map(name=>name[0].toUpperCase() + name.slice(1))

console.log(namesCapitalzed)


// filter 


let futurePotentialPresidents = T.filter(person =>  person.age > 30 || person.first=="kais")

function filterListe(T){
    tJdid = []
    for (el of T){
        if(el.age > 30){
            tJdid.append(el)
        }
    }
    return tJdid
}
console.log(futurePotentialPresidents)