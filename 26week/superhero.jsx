import './hw1.css';

function Superhero(props) {
    return(
        <div className='superheroCard'>
            <img className="superheroPic" src={props.picture} />
            <div>Имя: {props.name}</div>
            <div>Вселенная: {props.universe}</div>
            <div>Альтер Эго: {props.alterEgo}</div>
            <div>Занятие: {props.occupation}</div>
            <div>Друзья: {props.friends}</div>
            <div>Суперсилы: {props.superpowers}</div>
        </div>
    )
}

export default Superhero;