import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Newsnotification from './components/Newsnotification';
import SideSection from './components/SideSection';
import './App.css';


function App() {
    const newsData = [
{
    topic: 'ULKOMAAT:',
    body: 'Boris Johnson: Maame vanhaan matalien palkkojen malliin',
},
{
    topic: 'PÄIVÄN TIMANTTI:',
    body: 'Perhe löysi unelmakodin yhdeltä Suomen halutuimmista asuinalueista ja teki sen vuoksi ison uhrauksen – Tältä näyttää koti, jossa sisustus on tärkeämpää kuin neliöt',
},
{
    topic: 'LKOMAAT:',
    body: 'Boris Johnson: Maame vanhaan matalien palkkojen malliin',
},

    ];

    const mainNewsData = [
    {
        header: 'Shops will be able to set their opening hours freely on 1 January',
        body: 'Shops, hair salons and barber shops will be allowed to set their opening hours freely starting on 1 January 2016, as a proposal to annul the regulations concerning shop opening hours will be approved in a presidential session on Wednesday. Such establishments will henceforth be allowed to decide freely when to open their doors to customers.',
        language: 'HS in English',
        time: '29.12.2017 5:46',
    },
    {
        header: 'Foreign-language speakers to account for almost 25% of Helsinki"s population',
        body: 'Helsinki is expecting a massive influx of immigrants. A forecast drawn up by the municipalities of the capital region indicates that the foreign-language population of Helsinki will grow by 80,000–85,000 by 2030. Nearly one-fourth, or 23 per cent, of the population is consequently forecast to speak other than Finnish, Swedish or Sami as their mother tongue.',
        language: 'HS in English',
        time: '26.05.2011 5:44',
    },
    {
        header: 'Russian tourism to Finland is on the wane',
        body: 'The flow of Russian visitors to Finland is seemingly on the wane at the eve of what is traditionally the busiest tourism season of the year, says Pasi Nurkka, chief executive of the Lappeenranta-based research and analysis company TAK Oy. He forecasts that both the number of Russian visitors and average spending per visitor will decline in comparison to the corresponding period one year earlier.',
        language: 'HS in English',
        time: '05.07.2018 5:46',
    },
    {
        header: 'Forbes: Finland is the worlds 6th best country for business',
        body: 'Forbes has ranked Finland as the world"s sixth best country for business in its annual list, the Best Countries for Business. Finland is the best country in the world in terms of individual and property rights, the second best in terms of innovation landscape and the third best in terms of corruption, the American business Magazine lists.',
        language: 'HS in English',
        time: '08.06.2016 5:25',
    },

    ];

    const sideNewsData = [
        {
            number: '1',
            topic: 'Tietovuodot | ',
            story: '11,9 miljoonan asia­­kirjan tieto­vuoto: Vero­paratiisi­kytköksiä lukuisilla julkisuuden henkilöillä – Yle: Vuodon piirissä tietoja yli 200 suomalaisesta',
        },
        {
            number: '2',
            topic: 'HS Ympäristö | ',
            story: 'Helsingin suljetulla sotilassaarella humisevat ikivanhat metsät, joissa ei käy juuri kukaan – Keskustan vieressä sijaitsevan luontoparatiisin nähnyt ei pysty unohtamaan sitä',
        },
        {
            number: '3',
            topic: 'Energia | ',
            story: 'Yli 50-vuotiaan helsinkiläis­talon maa­lämpö­hanke törmäsi ongelmiin – Ratkaisu löytyi lähi­kaupan pakaste­altaasta',
        },
        {
            number: '4',
            topic: 'Kaupunkisuunnittelu | ',
            story: 'Espooseen on nousemassa kolmen Jumbon kokoinen valtava datakeskus',
        },
        {
            number: '5',
            topic: 'Sisäänkäynti | ',
            story: 'Näin mullistui vuonna 1796 rakennettu hirsilinna – Suomalainen huippuarkkitehti remontoi viisi vuotta sukutaloaan, ja lopputulos on jotain täysin poikkeuksellista',
        },
    ]

    return (
        <div>
            <Header />
            {
                newsData.map(element => <Newsnotification topic= {element.topic} body={element.body} /> )
            }
            {
                mainNewsData.map(element => <MainSection header={ element.header } body={ element.body } language= {element.language} time={ element.time } /> )
            }
            {
                sideNewsData.map(element => <SideSection number={ element.number } topic={ element.topic } story={ element.story } />  )
            }
            
        
        </div>
    )
}

export default App;