import React, {Component} from "react";
import './style.css';
import ContentItem from "./ContentItem";

class Content extends Component {

    state = {
        game: [
            { name: 'Моя музыкальная одержимость', year: '2020', type: 'Школа, Повседневность' },
            { name: 'Бесконечный Ягуар', year: '2021', type: 'Комедия, Трэш' },
        ]
    }

    render() {

        const game = this.state.game

        return (
            <div className={"content"}>
                <ContentItem name={game[0].name} year={game[0].year} type={game[0].type}>
                    <p className={"description"}>
                        Максим отправляется в музыкальную школу с целью осваивать новые умения
                        игры. Казалось бы всё нормально, но для самой школы наступило непростое время, и она не готова
                        обучать новых музыкантов...
                    </p>
                </ContentItem>
                <ContentItem name={game[1].name} year={game[1].year} type={game[1].type}>
                    <p className={"description"}>
                        С 11 по 17 января в жизни русских визуальных новелл состоялся очередной
                        эксперимент. У подопытных было только 2 пути - сделать новеллу за неделю и выжить или
                        рассориться друг с другом и остаться в холоде навсегда...
                    </p>
                </ContentItem>
            </div>
        )
    }
}

export default Content;
