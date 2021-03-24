import React, {Component} from 'react'
import TrackList from "./components/TrackList";
import Events from "./components/Events";
import Artist from "./components/Artist";
import ListenNew from "./components/ListenNew";
import SupportBlock from "./components/SupportBlock";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: [
                {
                    count: '1',
                    title: 'Безболезненно',
                    feat: '',
                    duration: '4:13',
                },
                {
                    count: '2',
                    title: 'Beverly Hills',
                    feat: '',
                    duration: '4:13',
                },
                {
                    count: '3',
                    title: 'Бродяга–дождь',
                    feat: '',
                    duration: '4:13',
                },
                {
                    count: '4',
                    title: 'Двусмысленно',
                    feat: '',
                    duration: '4:13',
                },
                {
                    count: '5',
                    title: 'Безболезненно',
                    feat: '',
                    duration: '4:13',
                },
                {
                    count: '6',
                    title: 'Beverly Hills',
                    feat: '',
                    duration: '4:13',
                },
                {
                    count: '7',
                    title: 'Бродяга–дождь',
                    feat: '',
                    duration: '4:13',
                },
                {
                    count: '8',
                    title: 'Двусмысленно',
                    feat: '',
                    duration: '4:13',
                },
            ],
            event: [
                {
                    number: '11',
                    month: 'февраля',
                    city: 'Владивосток',
                    place: 'Фетисов-Арена',
                },
                {
                    number: '20',
                    month: 'февраля',
                    city: 'Рязань',
                    place: 'Deep-Арена',
                },
                {
                    number: '21',
                    month: 'февраля',
                    city: 'Пенза',
                    place: 'Росток Холл',
                },
                {
                    number: '14',
                    month: 'мая',
                    city: 'Уфа',
                    place: 'Уфа-Арена',
                },
                {
                    number: '15',
                    month: 'мая',
                    city: 'Магнитогорск',
                    place: 'Магнитогорск-Арена',
                },
                {
                    number: '16',
                    month: 'мая',
                    city: 'Челябинск',
                    place: 'Трактор-Арена',
                },
                {
                    number: '28',
                    month: 'мая',
                    city: 'Ульяновск',
                    place: 'Арена Волга Спорт',
                },
            ],
            artist: [
                {
                    description: 'Российская поп-певица. Стала известна в 2017 году с песнями «Чак» и «Анестезия». Широкую популярность получила в конце 2018 года после выхода трека «Life».',
                }
            ],
            newMusic: [
                {
                    name: 'Новая песня',
                    type: 'Сингл',
                    year: '2020'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div className={"trackList"}>
                    <p className={"caption"}>
                        ТРЕК–ЛИСТ
                    </p>
                    {this.state.song.map((song, index) => {
                            return (
                                <TrackList
                                    key={index}
                                    count={song.count}
                                    title={song.title}
                                    feat={song.feat}
                                    duration={song.duration}/>
                            )
                        },
                    )
                    }
                    <p className={"allSongs"}>
                        Все композиции
                    </p>
                </div>


                <div className={"eventsList"}>
                    {this.state.event.map((event, index) => {
                            return (
                                <Events
                                    key={index}
                                    number={event.number}
                                    month={event.month}
                                    city={event.city}
                                    place={event.place}/>
                            )
                        },
                    )
                    }
                </div>


                <div className={"artist"}>
                    <p className={"artistCaption"}>
                        Об артисте
                    </p>
                    {this.state.artist.map((artist, index) => {
                            return (
                                <Artist
                                    key={index}
                                    description={artist.description}/>
                            )
                        }
                    )
                    }
                    <p className={"details"}>
                        Подробнее
                    </p>
                </div>


                <div className={"listenNew"}>
                    <p className={"caption"}>
                        Новое
                    </p>
                    {this.state.newMusic.map((newMusic) => {
                            return (
                                <ListenNew
                                    name={newMusic.name}
                                    type={newMusic.type}
                                    year={newMusic.year}
                                />
                            )
                        }
                    )
                    }
                </div>

                <div className={"supportBlock"}>
                    <p className={"caption"}>
                        Поддержи релиз
                    </p>
                    <p className={"subcaption"}>
                        Размести в своих аккаунтах
                    </p>
                    <SupportBlock />
                </div>
            </div>
        )
    }
}

export default App;
