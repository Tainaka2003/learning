import React, { Component } from 'react';
import './styles.css'
import Card from "./Card/index";

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            news: []
        };
    }

    componentDidMount() {
        fetch(`mongodb+srv://dimos:123@cluster0-qljpi.mongodb.net/MusicShop?retryWrites=true&w=majority`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                            isLoaded: true,
                            news: result.news
                        }
                    );
                },
                (error) => {
                    this.state({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {news} = this.state;

        return (
            <div className={"main"}>
                {news.map(news =>
                    <Card
                        newsArticle={news.news}
                    />
                )}
            </div>
        )
    }
}