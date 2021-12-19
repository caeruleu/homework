import './hw1.css';
import Superhero from './superhero';

const arrSuperheroes = [{
    name: "Бэтмен",
    universe: "DC Comics",
    alterEgo: "Брюс Уэйн",
    occupation: "борец с преступностью, филантроп, миллиардер",
    friends: "Робин, Бэтгерл",
    superpowers: "интеллект, обширные познания, знания боевых искусств, ловкость",
    picture: "https://upload.wikimedia.org/wikipedia/ru/a/a2/Batman_Jim_Lee.jpg",
    }, {name: "Супермен",
    universe: "DC Comics",  
    alterEgo: "Кларк Кент",
    occupation: "борец за справедливость",
    friends: "собака Крипто",
    superpowers: "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    picture: "https://upload.wikimedia.org/wikipedia/ru/thumb/6/68/Superman01.jpg/227px-Superman01.jpg",
    }, {name: "Железный человек",
    universe: "Marvel Comics",
    alterEgo: "Тони Старк",
    occupation: "гений, миллиардер, плейбой, филантроп",
    friends: "Мстители",
    superpowers: "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    picture: "https://www.vokrug.tv/pic/person/2/2/d/b/22db573c1118bc091c4267e15258d8ce.jpeg",
    }, {name: "Человек-паук",
    universe: "Marvel Comics",
    alterEgo: "Питер Паркер",
    occupation: "борец за справедливость, студент, фотограф",
    friends: "Мстители, Фантастическая четверка, Люди Икс",
    superpowers: "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
    picture: "https://upload.wikimedia.org/wikipedia/ru/c/cb/AmazingSpiderMan50.jpg",
    }, {name: "Тор",
    universe: "Marvel Comics",
    alterEgo: "Тор Одинсон",
    occupation: "борец за справедливость, скандинавский бог",
    friends: "Мстители",
    superpowers: "все, что может бог, плюс молот Мьелнир",
    picture: "http://dic.academic.ru/pictures/wiki/files/84/Thor_Marvel_Comics.jpg",
    }];

function Superheroes() {
    return(
        <div className='Superheroes'>
            {
                arrSuperheroes.map((superhero) => 
                <Superhero 
                name={superhero.name} 
                universe={superhero.universe} 
                alterEgo={superhero.alterEgo} 
                occupation={superhero.occupation}
                friends={superhero.friends}
                superpowers={superhero.superpowers}
                picture={superhero.picture} />
                )
            }
        </div>
    )}

export default Superheroes;