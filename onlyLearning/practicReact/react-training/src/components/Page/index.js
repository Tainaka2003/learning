import React, {Component} from "react";
import ContentItem from "./ContentItem";
import NewsItem from "./NewsItem";
import MemberItem from "./MemberItem";
import HeroesItem from "./HeroesItem";

class Content extends Component {

    constructor(props) {
        super(props)
        this.state = {
            games: [
                {
                    name: 'Настоящий друг',
                    year: '2021',
                    type: 'Приключения, Нелинейные концовки',
                    description: 'Энни живёт в счастливом и радостном мире Зоа, который населён звероподобными существами. Здесь каждый день происходят праздники, и не бывает бед. Но всё ли здесь так замечательно?..',
                    mark: '3,806 из 5,000 (31 рецензия) - топ 10 в большинстве критериев из 72',
                    cover: '',
                },
                {
                    name: 'Бесконечный Ягуар',
                    year: '2021',
                    type: 'Комедия, Трэш',
                    description: 'С 11 по 17 января в жизни русских визуальных новелл состоялся очередной эксперимент. У подопытных было только 2 пути - сделать новеллу за неделю и выжить или рассориться друг с другом и остаться в холоде навсегда...',
                    mark: '3,040 из 5,000 (33 рецензии) - 54 место из 64',
                    cover: '',
                },
                {
                    name: 'Моя музыкальная одержимость',
                    year: '2020',
                    type: 'Школа, Повседневность',
                    description: 'Максим отправляется в музыкальную школу с целью осваивать новые умения игры. Казалось бы всё нормально, но для самой школы наступило непростое время, и она не готова обучать новых музыкантов...',
                    mark: 'не участвовала в конкурсе',
                    cover: '',
                }

            ],
            annie: [
                {
                    cover: '',
                    name: 'Энни',
                    age: '18',
                    did: 'Программа, сгенерированная внутри системы виртуальной реальности Зоа. Сама о своём происхождении точно не знает. В мире Зоа ранее крепко дружила и много общалась с Джилл, однако вскоре отдаёт предпочтение починке не так давно появившемуся у неё роботу Бипу.',
                }
            ],
            beep: [
                {
                    cover: '',
                    name: 'Бип',
                    age: 'неизвестен',
                    did: 'Летающий робот-программа внутри системы виртуальной реальности Зоа. Был подобран Энни, впоследствии регулярно дорабатывался и обновлялся. Так он стал верным спутником Энни практически во всех её выходах в город и других приключениях, которые далее происходят.',
                }
            ],
            lina: [
                {
                    cover: '',
                    name: 'Лина Понд',
                    age: '12',
                    did: 'Житель виртуальной реальности Зоа. Дочь Эйнджел Понд. Не может видеться со своей матерью в реальном мире, поэтому в мире Зоа живёт вместе с приёмными родителями. Пожалуй, единственный житель Зоа, который когда-либо видел Эйнджел вживую.',
                }
            ],
            angel: [
                {
                    cover: '',
                    name: 'Эйнджел Понд',
                    age: '32',
                    did: 'Генеральный директор ZoaCorp - компании-разработчика системы виртуальной реальности Зоа. Мама Лины. Для жителей Зоа является богиней, сотворившей этот мир. Сами жители Зоа никогда не видели Эйнджел, однако она изредка встречается в их творчестве.',
                }
            ],
            jill: [
                {
                    cover: '',
                    name: 'Джилл',
                    age: '19',
                    did: 'Программа, сгенерированная внутри системы виртуальной реальности Зоа, подруга Энни. Любит гулять в городе, посещать ярмарки, праздники и другие мероприятия, которые регулярно проводятся в мире Зоа. Нередко зазывает Энни поучаствовать в этих мероприятиях.',
                }
            ],
            scenarist: [
                {
                    cover: '',
                    name: 'Сценарист',
                    age: 'не важен',
                    did: 'Сценарист конкурсной команды по скоростной разработки визуальных новелл. Просто пишет историю, самый нейтральный персонаж из четвёрки.',
                }
            ],
            artist: [
                {
                    cover: '',
                    name: 'Художник',
                    age: 'не важен',
                    did: 'Художник конкурсной команды по скоростной разработки визуальных новелл. Рисует всю графику, угнетает кодера за его низкую самооценку.',
                }
            ],
            composer: [
                {
                    cover: '',
                    name: 'Музыкант',
                    age: 'не важен',
                    did: 'Композитор конкурсной команды по скоростной разработки визуальных новелл. Пишет музыку, пытается подбодить кодера в течении всей недели.',
                }
            ],
            amogu: [
                {
                    cover: '',
                    name: 'Кодер',
                    age: 'не важен',
                    did: 'Программист конкурсной команды по скоростной разработки визуальных новелл. Делает код для новеллы, Горит со всего подряд, что не получается.',
                }
            ],
            ternox: [
                {
                    cover: '',
                    name: 'Тернокс',
                    age: 'не важен',
                    did: 'Организатор конкурса и инициатор эксперимента для команды. Ставит цель и разочаровывается в результате, несмотря на то, что команда сделала то, что от неё потребовали.',
                }
            ],
            max: [
                {
                    cover: '',
                    name: 'Максим',
                    age: '17',
                    did: 'Ученик 11 класса селькой школы в Гусеничкино. Хочет попасть в музыкальный кружок, чтобы играть в музыкальной группе на клавишных, но встречает некоторые трудности в этом.',
                }
            ],
            dasha: [
                {
                    cover: '',
                    name: 'Даша',
                    age: '16',
                    did: 'Ученица 10 класса селькой школы в Гусеничкино. Играет на ударных инструментах в музыкальной группе. В общении проста и ветренна, не особо интересуется поддержанием диалога, но не скучная.',
                }
            ],
            olesya: [
                {
                    cover: '',
                    name: 'Олеся',
                    age: '16',
                    did: 'Ученица 10 класса селькой школы в Гусеничкино. Играет на клавишных инструментах в музыкальной группе. Однако в связи с недавней травмой не может заниматься музыкальной деятельностью.',
                }
            ],
            sonya: [
                {
                    cover: '',
                    name: 'Соня',
                    age: '16',
                    did: 'Ученица 10 класса селькой школы в Гусеничкино. Играет на бас-гитаре в музыкальной группе. В общении довольно язвительна, но в целом любит пофилософствовать в любой абстрактной теме.',
                }
            ],
            teacher: [
                {
                    cover: '',
                    name: 'Учитель',
                    age: '26',
                    did: 'Учитель музыки селькой школы в Гусеничкино. Продюссирует музыкальную группу из школьниц. Резко негативно относится к принятию новых людей в коллектив.',
                }
            ],
            news: [
                {
                    date: 'Март 2021',
                    message: 'Команду покидают "Не могу придумать ник" и ClassniChuvak. "Настоящий друг" становится самой большой новеллой на своём конкурсе. Её тепло приняли, однако она не выигрывает ни в одной из номинаций.'
                },
                {
                    date: '26-28 февраля 2021',
                    message: 'Работа над следующей конкурсной работой - Настоящий друг - истории о дружбе, которая типо помогает избежать ошибок в решениях.'
                },
                {
                    date: 'Начало февраля 2021',
                    message: 'Состав команды пополняют lowls, Anastasia, Ksayan, lstchk. Новым составом команда готовится к новому конкурсу.'
                },
                {
                    date: 'Конец января 2021',
                    message: 'Состав команды сократился. Остались Tainaka, "Не могу придумать ник" и ClassniChuvak'
                },
                {
                    date: '16 января 2021',
                    message: 'Лучшие друзья приняли участие в локальном конкурсе на самую лучшую новеллу на скорость. В качестве конкурсной новеллы была представлена треш-новелла о том, как непросто делать подобного рода вещи под названием "Бесконечный Ягуар". Работа получила смешанные оценки.'
                },
                {
                    date: '19 декабря 2020',
                    message: 'Формальное создание "Лучших друзей". В состав вошли Tainaka, Kurosawa, ClassniChuvak, Rantom и Иван Котовский. В последствии по приглашению первого в составе появятся "Не могу придумать ник", Daniel_27 и trufata.'
                },
                {
                    date: '1 сентября 2020',
                    message: 'Вышла новелла "Моя музыкальная одержимость", которая рассказывала про деревенскую школу из недалёкого прошлого в не самой бедной стране из региона СНГ. Релиз был воспринят тихо - возможно ожидалось скорое продолжение.'
                },
                {
                    date: '1 июля 2020 года',
                    message: 'В этот день мы начали работать над новеллой "Моя музыкальная одержимость". Формально, команды тогда не существовало, и все идеи держались на человеке с ником Tainaka, но без помощи друзей задумка новеллы так и осталась бы задумкой. В разное время разработке помогали ClassniChuvak, lonelypony, Иван Котовский, Time Project, Rantom, Tekusa и др.'
                },
            ],
            members: [
                {
                    photo: '',
                    member: 'Ksayan',
                    role: 'Режиссёр, художник, местами сценарист и кодер',
                },
                {
                    photo: '',
                    member: 'lowls',
                    role: 'Основной сценарист',
                },
                {
                    photo: '',
                    member: 'lstchk',
                    role: 'Основной кодер',
                },
                {
                    photo: '',
                    member: 'Anastasia',
                    role: 'Дизайнер',
                },
                {
                    photo: '',
                    member: 'Tanaika03',
                    role: 'Композитор',
                },
                {
                    photo: '',
                    member: 'Здесь можешь быть ты',
                    role: 'и ты должен быть художником по спрайтам или фонам',
                }
            ],
            showGames: false,
            showNews: false,
            showMembers: false,
            showAnnie: false,
            showBeep: false,
            showAngel: false,
            showLina: false,
            showJill: false,
            showScenarist: false,
            showArtist: false,
            showComposer: false,
            showAmogu: false,
            showTernox: false,
            showMax: false,
            showDasha: false,
            showOlesya: false,
            showSonya: false,
            showTeacher: false,
        }
    }

    ToggleNews = () => {
        this.setState({showNews: true, showGames: false, showMembers: false, showAnnie: false, showBeep: false, showLina: false, showAngel: false, showJill: false, showScenarist: false, showArtist: false, showComposer: false, showAmogu: false, showTernox: false, showMax: false, showDasha: false, showOlesya: false, showSonya: false, showTeacher: false,})
    }

    ToggleGames = () => {
        this.setState({showNews: false, showGames: true, showMembers: false, showAnnie: false, showBeep: false, showLina: false, showAngel: false, showJill: false, showScenarist: false, showArtist: false, showComposer: false, showAmogu: false, showTernox: false, showMax: false, showDasha: false, showOlesya: false, showSonya: false, showTeacher: false,})
    }

    ToggleMembers = () => {
        this.setState({showNews: false, showGames: false, showMembers: true, showAnnie: false, showBeep: false, showLina: false, showAngel: false, showJill: false, showScenarist: false, showArtist: false, showComposer: false, showAmogu: false, showTernox: false, showMax: false, showDasha: false, showOlesya: false, showSonya: false, showTeacher: false,})
    }

    showAnnie = () => {
        this.setState({showNews: false, showGames: false, showMembers: false, showAnnie: true, showBeep: false, showLina: false, showAngel: false, showJill: false, showScenarist: false, showArtist: false, showComposer: false, showAmogu: false, showTernox: false, showMax: false, showDasha: false, showOlesya: false, showSonya: false, showTeacher: false,})
    }

    showBeep = () => {
        this.setState({showNews: false, showGames: false, showMembers: false, showAnnie: false, showBeep: true, showLina: false, showAngel: false, showJill: false, showScenarist: false, showArtist: false, showComposer: false, showAmogu: false, showTernox: false, showMax: false, showDasha: false, showOlesya: false, showSonya: false, showTeacher: false,})
    }

    showLina = () => {
        this.setState({showNews: false, showGames: false, showMembers: false, showAnnie: false, showBeep: false, showLina: true, showAngel: false, showJill: false, showScenarist: false, showArtist: false, showComposer: false, showAmogu: false, showTernox: false, showMax: false, showDasha: false, showOlesya: false, showSonya: false, showTeacher: false,})
    }

    showAngel = () => {
        this.setState({showNews: false, showGames: false, showMembers: false, showAnnie: false, showBeep: false, showLina: false, showAngel: true, showJill: false, showScenarist: false, showArtist: false, showComposer: false, showAmogu: false, showTernox: false, showMax: false, showDasha: false, showOlesya: false, showSonya: false, showTeacher: false,})
    }

    showJill = () => {
        this.setState({showNews: false, showGames: false, showMembers: false, showAnnie: false, showBeep: false, showLina: false, showAngel: false, showJill: true, showScenarist: false, showArtist: false, showComposer: false, showAmogu: false, showTernox: false, showMax: false, showDasha: false, showOlesya: false, showSonya: false, showTeacher: false,})
    }

    showScenarist = () => {
        this.setState({showNews: false, showGames: false, showMembers: false, showAnnie: false, showBeep: false, showLina: false, showAngel: false, showJill: false, showScenarist: true, showArtist: false, showComposer: false, showAmogu: false, showTernox: false, showMax: false, showDasha: false, showOlesya: false, showSonya: false, showTeacher: false,})
    }

    showArtist = () => {
        this.setState({showNews: false, showGames: false, showMembers: false, showAnnie: false, showBeep: false, showLina: false, showAngel: false, showJill: false, showScenarist: false, showArtist: true, showComposer: false, showAmogu: false, showTernox: false, showMax: false, showDasha: false, showOlesya: false, showSonya: false, showTeacher: false,})
    }

    showComposer = () => {
        this.setState({showNews: false, showGames: false, showMembers: false, showAnnie: false, showBeep: false, showLina: false, showAngel: false, showJill: false, showScenarist: false, showArtist: false, showComposer: true, showAmogu: false, showTernox: false, showMax: false, showDasha: false, showOlesya: false, showSonya: false, showTeacher: false,})
    }

    showAmogu = () => {
        this.setState({showNews: false, showGames: false, showMembers: false, showAnnie: false, showBeep: false, showLina: false, showAngel: false, showJill: false, showScenarist: false, showArtist: false, showComposer: false, showAmogu: true, showTernox: false, showMax: false, showDasha: false, showOlesya: false, showSonya: false, showTeacher: false,})
    }

    showTernox = () => {
        this.setState({showNews: false, showGames: false, showMembers: false, showAnnie: false, showBeep: false, showLina: false, showAngel: false, showJill: false, showScenarist: false, showArtist: false, showComposer: false, showAmogu: false, showTernox: true, showMax: false, showDasha: false, showOlesya: false, showSonya: false, showTeacher: false,})
    }

    showMax = () => {
        this.setState({showNews: false, showGames: false, showMembers: false, showAnnie: false, showBeep: false, showLina: false, showAngel: false, showJill: false, showScenarist: false, showArtist: false, showComposer: false, showAmogu: false, showTernox: false, showMax: true, showDasha: false, showOlesya: false, showSonya: false, showTeacher: false,})
    }

    showDasha = () => {
        this.setState({showNews: false, showGames: false, showMembers: false, showAnnie: false, showBeep: false, showLina: false, showAngel: false, showJill: false, showScenarist: false, showArtist: false, showComposer: false, showAmogu: false, showTernox: false, showMax: false, showDasha: true, showOlesya: false, showSonya: false, showTeacher: false,})
    }

    showOlesya = () => {
        this.setState({showNews: false, showGames: false, showMembers: false, showAnnie: false, showBeep: false, showLina: false, showAngel: false, showJill: false, showScenarist: false, showArtist: false, showComposer: false, showAmogu: false, showTernox: false, showMax: false, showDasha: false, showOlesya: true, showSonya: false, showTeacher: false,})
    }

    showSonya = () => {
        this.setState({showNews: false, showGames: false, showMembers: false, showAnnie: false, showBeep: false, showLina: false, showAngel: false, showJill: false, showScenarist: false, showArtist: false, showComposer: false, showAmogu: false, showTernox: false, showMax: false, showDasha: false, showOlesya: false, showSonya: true, showTeacher: false,})
    }

    showTeacher = () => {
        this.setState({showNews: false, showGames: false, showMembers: false, showAnnie: false, showBeep: false, showLina: false, showAngel: false, showJill: false, showScenarist: false, showArtist: false, showComposer: false, showAmogu: false, showTernox: false, showMax: false, showDasha: false, showOlesya: false, showSonya: false, showTeacher: true,})
    }

    render() {
        return (
            <div className={"cont"}>

                <header className="header">
                    <img src="https://i.ibb.co/cyxm6TY/c08e5a1ad55f0088.png" alt="c08e5a1ad55f0088" border="0"
                         width={"300px"} height={"75px"}/>
                    <button className="button" onClick={this.ToggleGames}>
                        Проекты
                    </button>
                    <button className="button" onClick={this.ToggleNews}>
                        Дневник
                    </button>
                    <button className="button" onClick={this.ToggleMembers}>
                        Состав
                    </button>
                </header>

                <nav className="nav">
                    <p className={"navCont"}>Настоящий друг</p>
                    <button className={"button"} onClick={this.showAnnie}>Энни</button>
                    <button className={"button"} onClick={this.showBeep}>Бип</button>
                    <button className={"button"} onClick={this.showLina}>Лина</button>
                    <button className={"button"} onClick={this.showAngel}>Эйнджел</button>
                    <button className={"button"} onClick={this.showJill}>Джилл</button>
                    <p className={"navCont"}>Бесконечный Ягуар</p>
                    <button className={"button"} onClick={this.showScenarist}>Сценарист</button>
                    <button className={"button"} onClick={this.showArtist}>Художник</button>
                    <button className={"button"} onClick={this.showComposer}>Музыкант</button>
                    <button className={"button"} onClick={this.showAmogu}>Кодер</button>
                    <button className={"button"} onClick={this.showTernox}>Тернокс</button>
                    <p className={"navCont"}>Моя музыкальная одержимость</p>
                    <button className={"button"} onClick={this.showMax}>Максим</button>
                    <button className={"button"} onClick={this.showDasha}>Даша</button>
                    <button className={"button"} onClick={this.showOlesya}>Олеся</button>
                    <button className={"button"} onClick={this.showSonya}>Соня</button>
                    <button className={"button"} onClick={this.showTeacher}>Учитель</button>
                </nav>

                <div className={"content"}>

                    <div className={"games"}>
                        {this.state.showGames
                        ? this.state.games.map((game, index) => {
                            return (
                                <ContentItem
                                    key={index}
                                    name={game.name}
                                    year={game.year}
                                    type={game.type}
                                    mark={game.mark}
                                    description={game.description}/>
                                    )
                                },
                            )
                            : null
                        }
                    </div>

                    <div className={"news"}>
                        {this.state.showNews
                            ? this.state.news.map((caption, index) => {
                                    return (
                                        <NewsItem
                                            key={index}
                                            date={caption.date}
                                            message={caption.message}/>
                                    )
                                },
                            )
                            : null
                        }
                    </div>

                    <div className={"members"}>
                        {this.state.showMembers
                            ? this.state.members.map((member, index) => {
                                    return (
                                        <MemberItem
                                            key={index}
                                            photo={member.photo}
                                            member={member.member}
                                            role={member.role}
                                            actual={member.actual}
                                        />
                                    )
                                },
                            )
                            : null
                        }
                    </div>

                    <div className={"heroes"}>
                        {this.state.showAnnie
                            ? this.state.annie.map((annie, index) => {
                                    return (
                                        <HeroesItem
                                            key={index}
                                            name={annie.name}
                                            did={annie.did}
                                            age={annie.age}
                                        />
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showBeep
                            ? this.state.beep.map((beep, index) => {
                                    return (
                                        <HeroesItem
                                            key={index}
                                            name={beep.name}
                                            did={beep.did}
                                            age={beep.age}
                                        />
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showLina
                            ? this.state.lina.map((lina, index) => {
                                    return (
                                        <HeroesItem
                                            key={index}
                                            name={lina.name}
                                            did={lina.did}
                                            age={lina.age}
                                        />
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showAngel
                            ? this.state.angel.map((angel, index) => {
                                    return (
                                        <HeroesItem
                                            key={index}
                                            name={angel.name}
                                            did={angel.did}
                                            age={angel.age}
                                        />
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showJill
                            ? this.state.jill.map((jill, index) => {
                                    return (
                                        <HeroesItem
                                            key={index}
                                            name={jill.name}
                                            did={jill.did}
                                            age={jill.age}
                                        />
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showScenarist
                            ? this.state.scenarist.map((scenarist, index) => {
                                    return (
                                        <HeroesItem
                                            key={index}
                                            name={scenarist.name}
                                            did={scenarist.did}
                                            age={scenarist.age}
                                        />
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showArtist
                            ? this.state.artist.map((artist, index) => {
                                    return (
                                        <HeroesItem
                                            key={index}
                                            name={artist.name}
                                            did={artist.did}
                                            age={artist.age}
                                        />
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showComposer
                            ? this.state.composer.map((composer, index) => {
                                    return (
                                        <HeroesItem
                                            key={index}
                                            name={composer.name}
                                            did={composer.did}
                                            age={composer.age}
                                        />
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showAmogu
                            ? this.state.amogu.map((amogu, index) => {
                                    return (
                                        <HeroesItem
                                            key={index}
                                            name={amogu.name}
                                            did={amogu.did}
                                            age={amogu.age}
                                        />
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showTernox
                            ? this.state.ternox.map((ternox, index) => {
                                    return (
                                        <HeroesItem
                                            key={index}
                                            name={ternox.name}
                                            did={ternox.did}
                                            age={ternox.age}
                                        />
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showMax
                            ? this.state.max.map((max, index) => {
                                    return (
                                        <HeroesItem
                                            key={index}
                                            name={max.name}
                                            did={max.did}
                                            age={max.age}
                                        />
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showDasha
                            ? this.state.dasha.map((dasha, index) => {
                                    return (
                                        <HeroesItem
                                            key={index}
                                            name={dasha.name}
                                            did={dasha.did}
                                            age={dasha.age}
                                        />
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showOlesya
                            ? this.state.olesya.map((olesya, index) => {
                                    return (
                                        <HeroesItem
                                            key={index}
                                            name={olesya.name}
                                            did={olesya.did}
                                            age={olesya.age}
                                        />
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showSonya
                            ? this.state.sonya.map((sonya, index) => {
                                    return (
                                        <HeroesItem
                                            key={index}
                                            name={sonya.name}
                                            did={sonya.did}
                                            age={sonya.age}
                                        />
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showTeacher
                            ? this.state.teacher.map((teacher, index) => {
                                    return (
                                        <HeroesItem
                                            key={index}
                                            name={teacher.name}
                                            did={teacher.did}
                                            age={teacher.age}
                                        />
                                    )
                                },
                            )
                            : null
                        }
                    </div>

                </div>
            </div>
        )
    }
}

export default Content;
