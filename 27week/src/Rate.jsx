import { Card } from 'antd';

function Rate(props) {
    let highlightedClass = (props.isHighlighted && "highlighted");
    console.log(highlightedClass);
    return(
        <div className={`rateCard ${highlightedClass}`}>
            <Card className={props.id}>
                <div className='cardTitle'>{props.title}</div>
                <div className='cardContent'>
                    <span className='rubles'>руб</span>
                    <span className='price'>{props.price}</span>
                    <span className='perMonth'> /мес</span>
                </div>
                <p className='speedUntil'>до {props.speed} мб/сек</p>
                <p className='amountOfTrafic'>Объем включенного трафика не ограничен</p>
            </Card>
        </div>
    );
}

export default Rate;