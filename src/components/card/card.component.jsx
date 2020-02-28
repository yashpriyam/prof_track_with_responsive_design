import React from 'react';
import { withRouter } from 'react-router-dom';
//import { Switch, Route } from 'react-router-dom';
import Form from '../form/form';
import './card.styles.css';

const Card = (props) => (
//    console.log(props),
  <div className='card-container' onClick={() => props.history.push('/userform')}>
    <img
      alt='monster'
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2> {props.monster.name} </h2>
    <p> {props.monster.email} </p>
    {/* <button onClick={() => props.history.push(`${props.monster.resume}`)}>Download Resume</button>
    <button onClick={() => props.history.push(`${props.monster.task}`)}>Download Task</button> */}
    <button><a href={`${props.monster.resume}`} target="_blank" rel="noopener noreferrer">Download Resume</a></button>
    <button><a href={`${props.monster.task}`} target="_blank" rel="noopener noreferrer">Download {`${props.monster.name}'s`} Task</a></button>
    
    {/* <Link to='/'>Resume</Link> */}
  </div>
);

//class Card extends React.Component {
//    constructor(props) {
//        console.log(props);
//        super();
//        this.state = {
//            props: { props }
//        }
//    }
//    render() {
//        return (
//            <div className='card-container' onClick={() => this.state.props.history.push('/userform')}>
//                <img
//                  alt='monster'
//                  src={`https://robohash.org/${this.state.props.monster.id}?set=set2&size=180x180`}
//                />
//                <h2> {this.state.props.monster.name} </h2>
//                <p> {this.state.props.monster.email} </p>
//                {/* <button onClick={() => props.history.push(`${props.monster.resume}`)}>Download Resume</button>
//                <button onClick={() => props.history.push(`${props.monster.task}`)}>Download Task</button> */}
//                <button><a href={`${this.state.props.monster.resume}`} target="_blank" rel="noopener noreferrer">Download Resume</a></button>
//                <button><a href={`${this.state.props.monster.task}`} target="_blank" rel="noopener noreferrer">Download {`${this.state.props.monster.name}'s`} Task</a></button>
//
//                {/* <Link to='/'>Resume</Link> */}
//            </div>            
//        )
//    }
//}

export default withRouter(Card);