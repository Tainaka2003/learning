function getRandomInt(min, max) {
	return Math.floor(Math.random() *
	 (max - min)) + min;
}

function checkAlive() {
	if (dog.hp <= 0) {
		alert('Собачка проигрывает битву');
	}
	if (cat.hp <= 0) {
		alert('Кошечка проигрывает битву');
	}
	if (mouse.hp <= 0) {
		alert('Мышка проигрывает битву');
	}
}

function checkInput() {
	(player === 1 || player === 2 || player === 3) ?
	opponent = getRandomInt(1, 3) :
	opponent = 0;
}

function checkBattle() {
	if (player === 1 || player === 2 || player === 3 ||
	 opponent === 1 || opponent === 2 || opponent === 3) {
		alert('Да начнётся битва!'); 
		battle = true;
	}

	else {
		alert('Битва не состоится!'); 
		battle = false;
	}
}

let dog = {
	name: "Собачка",
	hp: 10,
	offence: 5,
	defence: 8
	// план: ест косточку и усиливает атаку на +2
}

let cat = {
	name: "Кошечка",
	hp: 10,
	offence: 8,
	defence: 5
	// план: пьёт молоко и увеличивает защиту на +2
}

let mouse = {
	name: "Мышка",
	hp: 5,
	offence: 10,
	defence: 8
	// план: временная мутация увеличивает здоровье на +2
}
// let player = Number(prompt('Выберите своего война:\n1 - собачка' + '\n2 - кошечка\n3 - мышка',''));

let player = Number(prompt('Выберите своего война:\n1 - собачка' + 
'\n2 - кошечка\n3 - мышка\nПредупреждение! Игра находится на ' + 
'стадии разработки! Если противнику выпал тот же персонаж, что ' + 
'и у Вас, следует обновить страницу, так как в такой битве Вы ' + 
'будете бить самого себя!',''));

let opponent;
let battle;

checkInput();

switch(player) {
	case 1:
		alert('Ваш воин: ' + dog.name + 
			'\nВаше здоровье: ' + dog.hp + 
			'\nВаш уровень атаки: ' + dog.offence + 
			'\nВаш уровень защиты: ' + dog.defence);
		break;
	case 2:
		alert('Ваш воин: ' + cat.name + 
			'\nВаше здоровье: ' + cat.hp + 
			'\nВаш уровень атаки: ' + cat.offence + 
			'\nВаш уровень защиты: ' + cat.defence);
		break;
	case 3:
		alert('Ваш воин: ' + mouse.name + 
			'\nВаше здоровье: ' + mouse.hp + 
			'\nВаш уровень атаки: ' + mouse.offence + 
			'\nВаш уровень защиты: ' + mouse.defence);
		break;
	default:
		alert('Вы никого не выбрали или не записали правильное' + 
			' значение! Будьте внимательнее!');
		break;
}

switch(opponent) {
	case 1:
		alert('Ваш противник: ' + dog.name + 
			'\nЕго здоровье: ' + dog.hp + 
			'\nЕго уровень атаки: ' + dog.offence + 
			'\nЕго уровень защиты: ' + dog.defence);
		break;

	case 2:
		alert('Ваш противник: ' + cat.name + 
			'\nЕго здоровье: ' + cat.hp + 
			'\nЕго уровень атаки: ' + cat.offence + 
			'\nЕго уровень защиты: ' + cat.defence);
		break;
	case 3:
		alert('Ваш противник: ' + mouse.name + 
			'\nЕго здоровье: ' + mouse.hp + 
			'\nЕго уровень атаки: ' + mouse.offence + 
			'\nЕго уровень защиты: ' + mouse.defence);
		break;
	default:
		alert('Какой Вам соперник? Обновите уже страницу!' + 
			' Ну, что же Вы?');
		break;
}

checkBattle()