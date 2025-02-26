import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles = [

        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Joe Rossignol",
            "title": "Alleged M4 MacBook Pro Unboxing Video Reveals These Four Upgrades",
            "description": "An alleged unboxing video for an unannounced 14-inch MacBook Pro with the M4 chip was uploaded to YouTube today by Russian channel Wylsacom. The video was later linked to on social media platform X by Bloomberg's Mark Gurman.\n\n\n\n\n\nIt is possible that this is …",
            "url": "https://www.macrumors.com/2024/10/06/alleged-m4-macbook-pro-unboxing-video/",
            "urlToImage": "https://images.macrumors.com/t/ioCiSxI7bwOKwbWI8hOW5_n9W2o=/1600x/article-new/2023/10/m3-mbp-space-black.jpg",
            "publishedAt": "2024-10-07T01:10:37Z",
            "content": "An alleged unboxing video for an unannounced 14-inch MacBook Pro with the M4 chip was uploaded to YouTube today by Russian channel Wylsacom. The video was later linked to on social media platform X b… [+1742 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "6502disassembly.com"
            },
            "author": null,
            "title": "Apple II Source Listings",
            "description": "Apple II source listings",
            "url": "https://6502disassembly.com/other-a2.html",
            "urlToImage": null,
            "publishedAt": "2024-10-07T02:13:24Z",
            "content": "(back to top)\r\nOriginal Listings\r\nSource code for some classic titles, published by the original authors.\r\n(All links go to external sites.)\r\nDisassemblies\r\nSome non-SourceGen disassemblies.\r\nCopyrig… [+23 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Andrew O'Hara)",
            "title": "A Russian YouTuber may have tested the new M4 MacBook Pro",
            "description": "A Russian YouTube channel has posted an unboxing video of what is alleged to be Apple's M4 MacBook Pro, though take it with a heaping pile of salt.An alleged photo of the M4 14-inch MacBook ProApple has long been rumored to be hosting a media event in October…",
            "url": "https://appleinsider.com/articles/24/10/07/a-russian-youtuber-may-have-tested-the-new-m4-macbook-pro",
            "urlToImage": "https://photos5.appleinsider.com/gallery/61294-126623-New-M4-MBP-xl.jpg",
            "publishedAt": "2024-10-07T00:06:48Z",
            "content": "A Russian YouTube channel has posted an unboxing video of what is alleged to be Apple's M4 MacBook Pro, though take it with a heaping pile of salt.\r\nApple has long been rumored to be hosting a media … [+2871 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Journal du geek"
            },
            "author": "Journal du Geek",
            "title": "Prime Day : soyez radin, voici 12 offres folles à saisir ce lundi matin sur Amazon ",
            "description": "Le Prime Day sur Amazon est sur le point de débuter. Quelques heures avant le début officiel de l'opération, il est possible de réaliser de belles affaires. Nous avons dressé une liste d'offres, avec une sélection des promos déjà disponibles ce lundi.",
            "url": "https://www.journaldugeek.com/bon-plan/prime-day-soyez-radin-voici-12-offres-folles-saisir-lundi-matin-amazon/",
            "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/10/Prime-Day-offres-amazon.jpg",
            "publishedAt": "2024-10-07T04:47:42Z",
            "content": "Le Prime Day 2024 sur Amazon c’est du mardi 8 au mercredi 9 octobre inclut. Pendant 48h, le marchand en ligne dévoile ses plus belles réductions de l’année, sur des milliers de produits. Comme elle l… [+7203 chars]"
        }
    ]
    constructor() {
        super();
        console.log("hello vipul");
        this.state = {
            articles: this.articles,
            loading: false

        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>defence news</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4"  key={element.url}>

                            <Newsitem  title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageurl={element.urlToImage} newsurl={element.url} />
                        </div>
                    })}

                </div>

            </div>


        )
    }
}

export default News
