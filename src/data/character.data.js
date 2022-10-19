
class ListOfCharacters {
    constructor(){
        this.character_data = {
            heros:[
                //warrior:
                {
                    id:1,   
                    name:'Warrior',
                    img:'./images/clash_warrior.png',
                    max_health:500,
                    health:500,
                    attack: 70,
                    defense: 50,
                    selected:false,
                    alive:false
                },
                //archer:
                {
                    id:2,
                    name:'Queen Archer',
                    img:'./images/clash_queen_archer.png',
                    max_health: 260,
                    health:260,
                    attack:250,
                    defense:35,
                    selected:false,
                    alive:false
                },
                //sage: 
                {
                    id:3,
                    name:'Sage',
                    img:'./images/clash_sage.png',
                    max_health:350,
                    health:350,
                    attack:50,
                    defense:80,
                    selected:false,
                    alive:false
                },
              
            ],
        
            enemys:[
                //berserk:
                {
                    id:4,
                    name:'Berserk',
                    img: './images/clash_berserker.png',
                    max_health:110,
                    health: 110,
                    attack: 60,
                    defense:40,
                    selected:false,
                    alive:true
                },
                //dragon: 
                {
                    id:5,
                    name:'Dragon',
                    img:'./images/clash_dragon.webp',
                    max_health:80,
                    health:80,
                    attack: 100,
                    defense:40,
                    selected:false,
                    alive:true
                },
                //lava_dragon: 
                {
                    id:6,
                    name:'Lava Dragon',
                    img:'./images/clash_lava_dragon.webp',
                    max_health:80,
                    health:80,
                    attack: 130,
                    defense:30,
                    selected:false,
                    alive:true
                },
                  // giant
                {
                    id:7,
                    name:'Giant',
                    img:'./images/clash_giant.webp',
                    max_health:150,
                    health:150,
                    attack:50,
                    defense:70,
                    selected:false,
                    alive:true
                }
            ]   
        }
    }
}

export { ListOfCharacters };