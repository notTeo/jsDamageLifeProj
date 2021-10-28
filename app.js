function project1() {

}

let startinglife = 100;
let startingshield = 100;

//const name = 'Nick';

const person = [
    name = "Nick",
    life = startinglife,
    shield = startingshield
]

//life =life - 10;
const damage = () => {
    if (shield != 0){
        shield = shield - 10;
        console.log(name, life, shield);
    }else{
        if(life > 0){
            life = life - 10;
            console.log(name, life, shield)
            //console.clear();
            }
            
            if(life <= 0){
                alert("you are dead");
            } 
    }


}

const heal = () => {
    if(life > 1){
        life = life + 10;
        console.log(name, life, shield)    
    }
    
    if (life > 100){
        alert("you already have max health");
        life = life -10; 
        console.log(name, life, shield);
    } 
}

const extrashield = () => {
    if(shield > 1){
        shield = shield + 10;
        console.log(name, life, shield)    
    }
    
    if (shield > 100){
        alert("you already have max shield");
        shield = shield -10; 
        console.log(name, life, shield);
    }  
}

console.log(person)
















