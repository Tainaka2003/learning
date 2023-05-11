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

            ],
            max: [
                {
                    cover: 'https://i.ibb.co/jV9KMPB/full-height.png',
                    name: 'Соня',
                    age: '16',
                    first: 'Невыученные уроки',
                    did: 'Ученица 11 класса селькой школы.',
                    role: 'Бас-гитара',
                    other: 'В общении довольно язвительна, но в целом любит пофилософствовать на любую абстрактную тему.'                }
            ],
            lex: [
                {
                    cover: 'https://i.ibb.co/jV9KMPB/full-height.png',
                    name: 'Соня',
                    age: '16',
                    first: 'Невыученные уроки',
                    did: 'Ученица 11 класса селькой школы.',
                    role: 'Бас-гитара',
                    other: 'В общении довольно язвительна, но в целом любит пофилософствовать на любую абстрактную тему.'                }
            ],
            dasha: [
                {
                    cover: 'https://i.ibb.co/jV9KMPB/full-height.png',
                    name: 'Соня',
                    age: '16',
                    first: 'Невыученные уроки',
                    did: 'Ученица 11 класса селькой школы.',
                    role: 'Бас-гитара',
                    other: 'В общении довольно язвительна, но в целом любит пофилософствовать на любую абстрактную тему.'                }
            ],
            olesya: [
                {
                    cover: 'https://i.ibb.co/jV9KMPB/full-height.png',
                    name: 'Соня',
                    age: '16',
                    first: 'Невыученные уроки',
                    did: 'Ученица 11 класса селькой школы.',
                    role: 'Бас-гитара',
                    other: 'В общении довольно язвительна, но в целом любит пофилософствовать на любую абстрактную тему.'                }
            ],
            sonya: [
                {
                    cover: 'https://i.ibb.co/jV9KMPB/full-height.png',
                    name: 'Соня',
                    age: '16',
                    first: 'Невыученные уроки',
                    did: 'Ученица 11 класса селькой школы.',
                    role: 'Бас-гитара',
                    other: 'В общении довольно язвительна, но в целом любит пофилософствовать на любую абстрактную тему.'
                }
            ],
            liza: [
                {
                    cover: 'https://i.ibb.co/jV9KMPB/full-height.png',
                    name: 'Соня',
                    age: '16',
                    first: 'Невыученные уроки',
                    did: 'Ученица 11 класса селькой школы.',
                    role: 'Бас-гитара',
                    other: 'В общении довольно язвительна, но в целом любит пофилософствовать на любую абстрактную тему.'                }
            ],
            teacher: [
                {
                    cover: 'https://i.ibb.co/jV9KMPB/full-height.png',
                    name: 'Соня',
                    age: '16',
                    first: 'Невыученные уроки',
                    did: 'Ученица 11 класса селькой школы.',
                    role: 'Бас-гитара',
                    other: 'В общении довольно язвительна, но в целом любит пофилософствовать на любую абстрактную тему.'                }
            ],
            news: [
                {
                    date: 'Июль 2022',
                    message: 'Начало работы над проектом',
                }
            ],
            members: [

            ],
            showPage: '',
        }
    }

    ToggleNews = () => {this.setState({ showPage: 'news'})}
    ToggleDown = () => {this.setState({ showPage: 'games'})}
    ToggleMedia = () => {this.setState({ showPage: 'games'})}
    ToggleMembers = () => {this.setState({ showPage: 'members'})}
    showMax = () => {this.setState({ showPage: 'max'})}
    showOlexy = () => {this.setState({ showPage: 'lex'})}
    showDasha = () => {this.setState({ showPage: 'dasha'})}
    showOlesya = () => {this.setState({ showPage: 'olesya'})}
    showSonya = () => {this.setState({ showPage: 'sonya'})}
    showLiza = () => {this.setState({ showPage: 'liza'})}
    showTeacher = () => {this.setState({ showPage: 'teacher'})}

    render() {
        return (
            <div className={"cont"}>

                <header className="header">
                    <img src="https://i.ibb.co/cyxm6TY/c08e5a1ad55f0088.png" alt="c08e5a1ad55f0088" border="0"
                         width={"300px"} height={"75px"}/>
                         <div className="buttonCont">
                    <button className="button" onClick={this.ToggleDown}>Скачать</button>
                    <button className="button" onClick={this.ToggleMedia}>Контент</button>
                    <button className="button" onClick={this.ToggleNews}>Дневник</button>
                    <button className="button" onClick={this.ToggleMembers}>Контакты</button>
                         </div>
                </header>

                <nav className="nav">
                    <p className={"navCont"}>Персонажи</p>
                    <button className={"button"} onClick={this.showMax}>Максим</button>
                    <button className={"button"} onClick={this.showOlexy}>Алексей</button>
                    <button className={"button"} onClick={this.showDasha}>Даша</button>
                    <button className={"button"} onClick={this.showOlesya}>Олеся</button>
                    <button className={"button"} onClick={this.showSonya}>Соня</button>
                    <button className={"button"} onClick={this.showLiza}>Лиза</button>
                    <button className={"button"} onClick={this.showTeacher}>Учитель</button>
                </nav>

                <div className={"content"}>

                    <div className={"games"}>
                        {this.state.showPage === 'games'
                            ? this.state.games.map((game, index) => {
                                return (
                                    <ContentItem
                                        key={index}
                                        name={game.name}
                                        year={game.year}
                                        type={game.type}
                                        mark={game.mark}
                                        description={game.description}
                                        cover={game.cover}/>
                                    )
                                },
                            )
                            : null
                        }
                    </div>

                    <div className={"news"}>
                        {this.state.showPage === 'news'
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
                        {this.state.showPage === 'members'
                            ? this.state.members.map((member, index) => {
                                return (
                                    <MemberItem
                                        key={index}
                                        photo={member.photo}
                                        member={member.member}
                                        role={member.role}
                                        actual={member.actual}/>
                                    )
                                },
                            )
                            : null
                        }
                    </div>

                    <div className={"heroes"}>
                        {this.state.showPage === 'max'
                            ? this.state.max.map((max, index) => {
                                    return (
                                        <HeroesItem key={index} name={max.name} did={max.did} age={max.age} first={max.first} role={max.role} other={max.other} cover={max.cover}/>
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showPage === 'lex'
                            ? this.state.teacher.map((lex, index) => {
                                    return (
                                        <HeroesItem key={index} name={lex.name} did={lex.did} age={lex.age} first={lex.first} role={lex.role} other={lex.other} cover={lex.cover}/>
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showPage === 'dasha'
                            ? this.state.dasha.map((dasha, index) => {
                                    return (
                                        <HeroesItem key={index} name={dasha.name} did={dasha.did} age={dasha.age} first={dasha.first} role={dasha.role} other={dasha.other} cover={dasha.cover}/>
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showPage === 'olesya'
                            ? this.state.olesya.map((olesya, index) => {
                                    return (
                                        <HeroesItem key={index} name={olesya.name} did={olesya.did} age={olesya.age} first={olesya.first} role={olesya.role} other={olesya.other} cover={olesya.cover}/>
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showPage === 'sonya'
                            ? this.state.sonya.map((sonya, index) => {
                                    return (
                                        <HeroesItem key={index} name={sonya.name} did={sonya.did} age={sonya.age} first={sonya.first} role={sonya.role} other={sonya.other} cover={sonya.cover}/>
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showPage === 'liza'
                            ? this.state.teacher.map((liza, index) => {
                                    return (
                                        <HeroesItem key={index} name={liza.name} did={liza.did} age={liza.age} first={liza.first} role={liza.role} other={liza.other} cover={liza.cover}/>
                                    )
                                },
                            )
                            : null
                        }
                        {this.state.showPage === 'teacher'
                            ? this.state.teacher.map((teacher, index) => {
                                    return (
                                        <HeroesItem key={index} name={teacher.name} did={teacher.did} age={teacher.age} first={teacher.first} role={teacher.role} other={teacher.other} cover={teacher.cover}/>
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
