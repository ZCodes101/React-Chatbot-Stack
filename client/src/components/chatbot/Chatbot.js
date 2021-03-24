import React, { Component } from 'react';
import axios from 'axios/index';
import Cookies from 'universal-cookie';

import { v4 as uuid } from 'uuid';

import Message from './Message';
import Card from './Card';
import QuickReplies from './QuickReplies';

import 'materialize-css/dist/css/materialize.min.css';
import '../chatbot/Chatbot.css';



const cookies = new Cookies();
class Chatbot extends Component {

    messagesEnd;
    talkInput;

    constructor(props){
        super(props);

        this.handleInputKeyPress = this._handleInputKeyPress.bind(this);
        this._handleQuickReplyPayload = this._handleQuickReplyPayload.bind(this);

        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
        
        this.state = {
            messages: [],
            showBot: true
        };

        if (cookies.get('userID') === undefined) {
            cookies.set('userID', uuid(), { path: '/' });
        }
    }
    
    async df_text_query (queryText) {
        let says = {
            speaks: 'user',
            msg: {
                text : {
                    text: queryText
                }
            }
        }
        this.setState({ messages: [...this.state.messages, says]});
        const res = await axios.post('/api/df_text_query',  {text: queryText});

        for (let msg of res.data.fulfillmentMessages) {
            says = {
                speaks: 'bot',
                msg: msg
            }
            this.setState({ messages: [...this.state.messages, says]});
        }
    };


    async df_event_query(eventName) {

        const res = await axios.post('/api/df_event_query',  {event: eventName});

        for (let msg of res.data.fulfillmentMessages) {
            let says = {
                speaks: 'bot',
                msg: msg
            }

            this.setState({ messages: [...this.state.messages, says]});
        }
    };
    

    resolveAfterXSeconds(x){
        // return new Promise(resolve => {
        //     setTimeout(() => {
        //         resolve(x);
        //     }, x * 1000);
        //     });
    }

    async componentDidMount() {
        this.df_event_query('Welcome');

    }

    componentDidUpdate(){
        this.messagesEnd.scrollIntoView({ behaviour: "smooth"});
        if ( this.talkInput ) {
            this.talkInput.focus();
        }

    }

    show(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({showBot: true});

    }

    hide(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({showBot: false});
    }



    _handleQuickReplyPayload( payload, text) {
        // event.preventDefault();
        // event.stopPropagation();

        // switch (payload) {
        //     case 'training_yes':
        //         this.df_event_query('TRAINING');
        //     default:
        //         this.df_text_query(text);
        //         break;
        // }
}


    renderCards(cards){

        return cards.map((card,i) => <Card key={i} payload={card.structValue} />);
    }

    renderOneMessage(message, i){
        if (message.msg && message.msg.text && message.msg.text.text){
            return <Message key={i} speaks={message.speaks} text={message.msg.text.text} />;
      //  }else if(message.msg && message.msg.payload && message.msg.payload.fields && message.msg.payload.fields.cards) {
              }else if(message.msg && message.msg.payload && message.msg.payload.fields.cards){


            return <div key={i}>
        <div class="chat-message clearfix" >
                  
        <a href="/" className="btn-floating btn-large waves-effect waves-light red">{message.speaks}</a>

                        </div>
                        <div style={{overflow: 'auto', overflowY: 'scroll' }}>
                            <div style={{height: 300, width:message.msg.payload.fields.cards.listValue.values.length * 270}}>
                                {this.renderCards(message.msg.payload.fields.cards.listValue.values)}
                            </div>
                            </div>
                    </div>

        }else if (message.msg &&
            message.msg.payload &&
            message.msg.payload.quick_replies
        ) {
            return <QuickReplies
            
                text={message.msg.payload.text ? message.msg.payload.text : null}
                key={i}
                replyClick={this._handleQuickReplyPayload}
                speaks={message.speaks}
                payload={message.msg.payload.fields.quick_replies.listValue.values}/>;
        }
    }






    renderMessages(stateMessages) {
        if(stateMessages) {
            return stateMessages.map((message, i) => {
                
                    return this.renderOneMessage(message,i);

            });
        }else{
            return null;
        }
    }

    _handleInputKeyPress(e){
        if(e.key === 'Enter') {
            this.df_text_query(e.target.value);
            e.target.value = '';

        }
    }

    render() {
        if(this.state.showBot){ 
        return (

            <div id="live-chat">
    <header class="clearfix">
                <a href="/"  class="chat-close" onClick={this.hide} >x</a>


                <h4>Mr. ChatBot</h4>
            </header>
            <div class="chat">
            <div class="chat-history">
                

                    {this.renderMessages(this.state.messages)}
                    <div ref={(el) => {this.messagesEnd = el; }}
                    style ={{ float: 'left', clear: "both"}} >
                    </div>
                    </div>
                </div>
                
                <input style={{margin: 0, paddingRight: '1%',paddingLef: '1%', width: '95.5%',backgroundColor:"grey" }} ref={(input) => { this.talkInput = input; }} placeholder="type a message" type="text" onKeyPress={this.handleInputKeyPress}  />
                </div>







        );
    }else {
        return (

            <div id="live-chat">
    <header class="clearfix">
                <a href="/"  class="chat-close" onClick={this.show} >Open</a>


                <h4>Mr. ChatBot</h4>
            </header>
                    <div ref={(el) => {this.messagesEnd = el; }}
                    style ={{ float: 'left', clear: "both"}}>
                    </div>
                   

            </div>
        );
        }










}









}



export default Chatbot;