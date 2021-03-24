import React, {Component} from "react";
import ContentItem from "./ContentItem";
import NewsItem from "./NewsItem";
import MemberItem from "./MemberItem";

class Content extends Component {

    constructor(props) {
        super(props)
        this.state = {
            games: [
                {
                    name: 'Бесконечный Ягуар',
                    year: '2021',
                    type: 'Комедия, Трэш',
                    description: 'С 11 по 17 января в жизни русских визуальных новелл состоялся очередной эксперимент. У подопытных было только 2 пути - сделать новеллу за неделю и выжить или рассориться друг с другом и остаться в холоде навсегда...',
                    cover: '',
                },
                {
                    name: 'Моя музыкальная одержимость',
                    year: '2020',
                    type: 'Школа, Повседневность',
                    description: 'Максим отправляется в музыкальную школу с целью осваивать новые умения игры. Казалось бы всё нормально, но для самой школы наступило непростое время, и она не готова обучать новых музыкантов...',
                    cover: '',
                }

            ],
            news: [
                {
                    date: '26 января 2021',
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
                    message: 'В этот день мы начали работать надо новеллой "Моя музыкальная одержимость". Формально, команды тогда не существовало, и все идеи держались на человеке с ником Tainaka, но без помощи друзей задумка новеллы так и осталась бы задумкой. В разное время разработке помогали ClassniChuvak, lonelypony, Иван Котовский, Time Project, Rantom, Tekusa и др.'
                },
            ],
            members: [
                {
                    photo: '',
                    member: 'Tanaika03',
                    role: 'Кодер',
                },
                {
                    photo: '',
                    member: 'He Mory npu9ymaTb Huk',
                    role: 'Художник по фонам в "Бесконечном Ягуаре"',
                },
                {
                    photo: '',
                    member: 'ClassniChuvak',
                    role: 'Композитор "Бесконечного Ягуара" и "Музыкальной одержимости"',
                }
            ],
            showGames: false,
            showNews: false,
            showMembers: true,
        }
    }

    ToggleGames = () => {
        this.setState({showGames: true})
        this.setState({showNews: false})
        this.setState({showMembers: false})
    }

    ToggleNews = () => {
        this.setState({showNews: true})
        this.setState({showGames: false})
        this.setState({showMembers: false})
    }

    ToggleMembers = () => {
        this.setState({showNews: false})
        this.setState({showGames: false})
        this.setState({showMembers: true})
    }

    render() {
        return (
            <div className={"cont"}>

                <header className="header">
                    <img src="https://i.ibb.co/cyxm6TY/c08e5a1ad55f0088.png" alt="c08e5a1ad55f0088" border="0"
                         width={"300px"} height={"75px"}/>
                    <button className="button" onClick={this.ToggleGames}>
                        Наши проекты
                    </button>
                    <button className="button" onClick={this.ToggleNews}>
                        Наши новости
                    </button>
                    <button className="button" onClick={this.ToggleMembers}>
                        Состав команды
                    </button>
                </header>

                <nav className="nav">

                </nav>

                <div className={"content"}>
                    <div className={"games"}>
                        {this.state.games.map((game, index) => {
                                    return (
                                        <ContentItem
                                            key={index}
                                            name={game.name}
                                            year={game.year}
                                            type={game.type}
                                            description={game.description}/>
                                    )
                                },
                            )
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
                </div>
            </div>
        )
    }
}

export default Content;
