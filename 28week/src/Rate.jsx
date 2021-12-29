import React, {useState} from 'react';
import { Card } from 'antd';

export default function Rate(props) {
    const [highlighted, setHighlighted] = useState(false);
    let highlightedClass = ("highlighted");

    let handleHighlighted = () => {setHighlighted(!highlighted);}

    return(
        <div className = {`rateCard ${highlighted && highlightedClass}`} onClick = {handleHighlighted}>
            <Card className = {props.id}>
                <div className = 'cardTitle'>{props.title}</div>
                <div className = 'cardContent'>
                    <span className = 'rubles'>руб</span>
                    <span className = 'price'>{props.price}</span>
                    <span className = 'perMonth'> /мес</span>
                </div>
                <p className = 'speedUntil'>до {props.speed} мб/сек</p>
                <p className = 'amountOfTrafic'>Объем включенного трафика не ограничен</p>
            </Card>
        </div>
    );
}