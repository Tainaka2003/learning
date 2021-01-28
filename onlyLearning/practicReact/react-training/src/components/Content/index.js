import React, { Component } from "react";
import './style.css';
import ContentItem from "./ContentItem";
import NewsItem from "./NewsItem";

class Content extends Component {

    state = {
        count: 0,
        game: [
            {
                name: 'Моя музыкальная одержимость',
                year: '2020',
                type: 'Школа, Повседневность',
                description: 'Максим отправляется в музыкальную школу с целью осваивать новые умения игры. Казалось бы всё нормально, но для самой школы наступило непростое время, и она не готова обучать новых музыкантов...'
            },
            {
                name: 'Бесконечный Ягуар',
                year: '2021',
                type: 'Комедия, Трэш',
                description: 'С 11 по 17 января в жизни русских визуальных новелл состоялся очередной эксперимент. У подопытных было только 2 пути - сделать новеллу за неделю и выжить или рассориться друг с другом и остаться в холоде навсегда...'
            }
        ],
        news: [
            {
                date: '1 июля 2020 года',
                message: 'В этот день мы начали работать надо новеллой "Моя музыкальная одержимость". Формально, команды тогда не существовало, и все идеи держались на человеке с ником Tainaka, но без помощи друзей задумка новеллы так и осталась бы задумкой. В разное время разработке помогали ClassniChuvak, lonelypony, Иван Котовский, Time Project, Tekusa и др.'
            },
            {
                date: '1 сентября 2020',
                message: 'Вышла новелла "Моя музыкальная одержимость", которая рассказывала про деревенскую школу из недалёкого прошлого в не самой бедной стране из региона СНГ. Релиз был воспринят тихо - возможно ожидалось скорое продолжение.'
            },
            {
                date: '19 декабря 2020',
                message: 'Формальное создание "Лучших друзей". В состав вошли Tainaka, Kurosawa, ClassniChuvak, Rantom и Иван Котовский. В последствии по приглашению первого в составе появятся "Не могу придумать ник", Daniel_27 и trufata.'
            },
            {
                date: '16 января 2021',
                message: 'Лучшие друзья приняли участие в локальном конкурсе на самую лучшую новеллу на скорость. В качестве конкурсной новеллы была представлена треш-новелла о том, как непросто делать подобного рода вещи под названием "Бесконечный Ягуар". Работа получила смешанные оценки.'
            },
            {
                date: '26 января 2021',
                message: 'Состав команды сократился. Остались Tainaka, "Не могу придумать ник" и ClassniChuvak'
            }
        ]
    }

    render() {
        const game = this.state.game
        const news = this.state.news
        return (
            <div className={"content"}>
                <ContentItem
                    name={game[1].name}
                    year={game[1].year}
                    type={game[1].type}
                    description={game[1].description}/>
                <ContentItem
                    name={game[0].name}
                    year={game[0].year}
                    type={game[0].type}
                    description={game[0].description}/>
                <NewsItem
                    date={news[4].date}
                    message={news[4].message}/>
                <NewsItem
                    date={news[3].date}
                    message={news[3].message}/>
                <NewsItem
                    date={news[2].date}
                    message={news[2].message}/>
                <NewsItem
                    date={news[1].date}
                    message={news[1].message}/>
                <NewsItem
                    date={news[0].date}
                    message={news[0].message}/>
            </div>
        )
    }
}

export default Content;
