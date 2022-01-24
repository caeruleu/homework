import React, { useState } from 'react'
import './App.css';

//рабочий вариант на классах:

// export default class Chat extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             nick: "",
//             comment: "",
//             nickArr: [],
//             commentArr: []
//         };
//         this.handleNick = this.handleNick.bind(this);
//         this.handleComment = this.handleComment.bind(this);
//         this.sendMessage = this.sendMessage.bind(this);
//     }

//     handleNick = (e) => {
//         e.preventDefault();
//         this.setState({nick: e.target.value});
//     }

//     handleComment = (e) => {
//         e.preventDefault();
//         this.setState({comment: e.target.value});
//     }

//     sendMessage = () => {
//         this.state.nickArr.unshift(this.state.nick);
//         this.state.commentArr.unshift(this.state.comment);

//         this.setState({nickArr: this.state.nickArr});
//         this.setState({commentArr: this.state.commentArr});
//     }

//     render() {
//         return(
//             <div>
//                 <label>Ник: </label>
//                 <input type="text" onChange={this.handleNick} value={this.state.nick}/>
//                 <div id="commentBox">
//                 {this.state.commentArr.map(
//                     (comm, i) => (
//                         <div className={i == 0 ? "newComment" : ""} key={i.toString()}> {this.state.nickArr[i]}: {comm}</div>
//                     )
//                 )}
//                 </div>
//                 <label>Комментарий:</label>
//                 <div><textarea id="comment" onChange={this.handleComment} value={this.state.comment}></textarea></div>
//                 <button onClick={this.sendMessage}>Отправить</button>
//             </div>
//         )
//     }
// }

//рабочий вариант на хуках:

export default function Chat () {
    const [nick, setNick] = useState("anon");
    const [comment, setComment] = useState();
    const [nickArr, setNickArr] = useState([]);
    const [commentArr, setCommentArr] = useState([]);

    let handleNick = (e) => {
        setNick(e.target.value);
    }

    let handleComment = (e) => {
        setComment(e.target.value);
    }

    let send = () => {
            let newNickArr = [...nickArr, nick];
            let newCommentArr = [...commentArr, comment];
        
            setNickArr(newNickArr);
            setCommentArr(newCommentArr);
    }

    return(
        <div>
            <label>Ник: </label>
            <input type="text" value={nick} onChange={handleNick}/>
            <div id="commentBox">
                {commentArr.slice(0).reverse().map(
                    (comm, i) => (
                        <div className={i === 0 ? "newComment" : ""} key={i}> {nickArr.slice(0).reverse()[i]}: {comm}</div>
                    )
                )}
            </div>
            <label>Комментарий:</label>
            <div><textarea id="comment" value={comment} onChange={handleComment}></textarea></div>
            <button onClick={send}>Отправить</button>
        </div>
    );
}