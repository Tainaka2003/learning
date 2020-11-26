let dog;
let cat;
let mouse;
let player;
let opponent;
let battle = true;

player = Number(prompt('Выберите своего война:\n1 - собачка' +
	'\n2 - кошечка\n3 - мышка\nПредупреждение! Игра находится на ' +
	'стадии разработки!', ''));
dog = {
	name: "Собачка",
	hp: 10,
	offence: 5,
	defence: 8
// план: ест косточку и усиливает атаку на +2
};
cat = {
	name: "Кошечка",
	hp: 10,
	offence: 8,
	defence: 5
// план: пьёт молоко и увеличивает защиту на +2
};
mouse = {
	name: "Мышка",
	hp: 5,
	offence: 10,
	defence: 8
// план: временная мутация увеличивает здоровье на +2
};

function getRandomInt(min, max, exp) {
	let n;
	while (true) {
		n = Math.floor(Math.random() * (max - min + 1)) + min;
		if (n !== exp) {
			return n;
		}
	}
}

function checkAlive() {
	if (dog.hp <= 0) {
		alert('Собачка проигрывает битву');
	} else if (cat.hp <= 0) {
		alert('Кошечка проигрывает битву');
	} else if (mouse.hp <= 0) {
		alert('Мышка проигрывает битву');
	}
}

switch (player) {
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
		alert('Вы никого не выбрали или ввели некорректные данные. \nБудьте внимательнее!');
		battle = false;
		break;
}

if (battle === false) {
	location.reload();
} else {
	opponent = getRandomInt(1, 3, player);
	switch (opponent) {
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
	}

	alert('Да начнётся битва!');
}