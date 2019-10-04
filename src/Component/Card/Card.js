import React from 'react';
import '../Card/Card.css';
import logo from './logo.png'
import master from './master-card.jpeg'

const Items = [{ numero: '7253 3256 7895 1245', class: '5422', CARDHOLDER: 'CARDHOLDER', date: '11/50' }]

class Card extends React.Component {
    constructor(props){
        super(props) 
        this.state= {
            name:'********************',
            Number:'****************',
            date:'****',
        }
    }
    nameChange = (e) => {
        if (!e.target.value.match(/[^a-z]/i) && e.target.value.length<21)
        this.setState({
            name: e.target.value,  
        })
    }
 NumberChange = (e) => {
    if ((!e.target.value.match(/[^^0-9 ]/i) && e.target.value.length<17))
            this.setState({
                Number: e.target.value,
            })
        }
        dateChange = (e) => {
            if ((!e.target.value.match(/[^^0-9]/i) && e.target.value.length<5 && e.target.value.slice(0,2)<13))
            this.setState({
                date: e.target.value,
            })
        }
    
    

    render() {
        console.log(this.state.name)
        return (
            <div>
                <div className='card-container'>
                    {Items.map((el, i) =>
                        <div key={i}> 
                            <h1 className='title'>CREDIT CARD</h1>
                            <div><img className="Puce" src={logo} alt="puce" /></div>
                            <div className="info-card">
                                <div className="numbe-info">
                                    <h2 className="Number-card">{String(this.state.Number).padEnd(16,'*').match(/.{1,4}/g).join('  ')}</h2>
                                    <div className="information">
                                        <div>
                                            <p>5422</p>
                                            <p>{String(this.state.name.toUpperCase()).padEnd(20,'*')}</p>
                                        </div>
                                        <div>
                                            <p className="month year">MONTH/YEAR</p>
                                            <div className="date">
                                                <p className="month">VALID <br />THRU></p>
                                                <p className="year-number">{String(this.state.date).padEnd(4,'*').match(/.{1,2}/g).join('/')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <img className="master" src={master} allt="master-card" alt="card" />
                            </div>
                        </div>
                    )}

                </div>
                <input className="input" type="text" placeholder="Credit Card Number" onChange={this.nameChange}></input>
                <input className="input" type="text" placeholder="Holder Name" onChange={this.NumberChange} ></input>
                <input className="input" type="text" placeholder="Month and Year" onChange={this.dateChange}></input>
            </div>
        );
    }
}

export default Card;
