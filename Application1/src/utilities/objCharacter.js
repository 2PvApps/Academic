/*
	the purpose of this module will be to: 
	TODO - handle the character creation process
*/

'use strict';


class Stats {
	constructor(obj){
		this.health = obj.health; 
		this.damage = obj.damage; this.speed = obj.speed;
		// this.strength = obj.strength; this.agility = obj.agility; this.stamina = obj.stamina;
		// this.intellect = obj.intellect; this.spirit = obj.spirit; this.armor = obj.armor; 
		// this.defense = obj.defense; this.dodge = obj.dodge; this.parry = obj.parry; 
		// this.block = obj.block; this.resilience = obj.resilience; this.bonus_damage = bonus_damage;
		// this.bonus_health = bonus_health; this.hit_rating = hit_rating; this.crit_chance = obj.crit_chance;
		// this.haste_rating = obj.haste_rating; this.mana_regen = obj.mana_regen; this.power = obj.power;

	}
}
class Character extends Stats {
	constructor(obj){
		super(obj);
		this.name = obj.name;
	}
}
//function that logs string within array and then increments array
function attLogger(log, iDx,str) {
	log[iDx] = str;
	console.log(iDx + ': ' + log[iDx]);
	return iDx++;
}
const duel = function(char1, char2) {
	// let timer = setInterval(,);
	const log = [];
	let iDx = 0;
	iDx = attLogger(log, iDx, `start: ${char1.name} has ${char1.health} health`);
	iDx = attLogger(log, iDx, `start: ${char2.name} has ${char2.health} health`);

	const char1att = setInterval(
		function(){
			char2.health -= char1.damage;
			if(char2.health <= 0){
				clearInterval(char1att);clearInterval(char2att);
				iDx = attLogger(log, iDx, `** ${char2.name} died **`);
			}
			iDx = attLogger(log, iDx, `${char1.name} *attacks*: ${char2.name} has ${char2.health} left!`)
	}, (char1.speed*1000));
	const char2att = setInterval(
		function(){
			char1.health -= char2.damage;
			if(char1.health <= 0){
				clearInterval(char1att); clearInterval(char2att);

			}
			iDx = attLogger(log, iDx, `${char2.name} *attacks*: ${char1.name} has ${char1.health} left!`);
	}, (char2.speed*1000));
};

const obj = [1000,100,2];
const char1 = new Character({'name':'Jason','health':obj[0],'damage':obj[1],'speed':(obj[2]/2)});
const char2 = new Character({'name':'Sergio','health':obj[0],'damage':obj[1],'speed':obj[2]});
duel(char1, char2);

module.exports = {Character, duel};

/*
	let stats = {
		this.strength:obj.strength
		,this.agility:obj.agility, this.stamina:obj.stamina
		,this.intellect:obj.intellect, this.spirit:obj.spirit, this.armor:obj.armor
		,this.defense:obj.defense, this.dodge:obj.dodge, this.parry:obj.parry
		,this.block:obj.block, this.resilience:obj.resilience, this.bonus_damage:obj.bonus_damage
		,this.bonus_health:obj.bonus_health, this.hit_rating:obj.hit_rating, this.crit_chance:obj.crit_chance
		,this.haste_rating:obj.haste_rating, this.mana_regen:obj.mana_regen, this.power:obj.power
	}
*/