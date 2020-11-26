import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

class Vegetables extends Component{
    constructor() {
        super();
        this.state = {
            isClicked: {}
        }
    }
    handleClick(id){
        this.setState({
            ...this.state,

            isClicked: {
                ...this.state.isClicked,
                [id]:!this.state.isClicked[id]
            }

        }
            
        )
    }
    render(){

        const products = [
            {
                id:"1",
                name:"Tomato",
                description:"Vegetable",
                image:"./images/tomato.jpeg",
                type:"vegetable",
                price:"Rs.50/k.g"
            },
            {
                id:"2",
                name:"Cauliflower",
                description:"Vegetable",
                image:"./images/cauliflower.jpg",
                type:"vegetable",
                price:"Rs.50/piece"
            },
            {
                id:"3",
                name:"Green Piece",
                description:"Vegetable",
                image:"./images/greenpiece.jpg",
                type:"vegetable",
                price:"Rs.50/k.g"
            },
            {
                id:"4",
                name:"Brinjal",
                description:"Vegetable",
                image:"./images/brinjal.jpg",
                type:"vegetable",
                price:"Rs.40/k.g"
            },
            {
                id:"5",
                name:"Lady Finger",
                description:"Vegetable",
                image:"./images/ladyfinger.jpg",
                type:"vegetable",
                price:"Rs.40/k.g"
            },
            {
                id:"6",
                name:"Lady Finger",
                description:"Vegetable",
                image:"./images/ladyfinger.jpg",
                type:"vegetable",
                price:"Rs.40/k.g"
            },
            {
                id:"7",
                name:"Lady Finger",
                description:"Vegetable",
                image:"./images/ladyfinger.jpg",
                type:"vegetable",
                price:"Rs.40/k.g"
            },
            {
                id:"8",
                name:"Lady Finger",
                description:"Vegetable",
                image:"./images/ladyfinger.jpg",
                type:"vegetable",
                price:"Rs.40/k.g"
            }
        ];
        const productList = 
        products.map((card,index)=>{ 
            // <All product={product}/>
        
        return(
            <td key ={index}>
                
            
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" height="200" src={card.image} />
                <Card.Body height="1000">
                <Card.Title>{card.name}</Card.Title>
        
                <Card.Text>{card.type} <br/>
                    {card.price}
                </Card.Text>

                <form>
                    <div className="form-group"><label>Quantity</label><br />
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </form>
                <Button variant="primary" onClick= { ()=> this.handleClick(card.id) } >{this.state.isClicked[card.id]? "Remove to Cart" : "Add to cart"}</Button>
                </Card.Body>
            </Card>
            </td>
        )

    })


        
        return(
            <Table>
                <hr/>
                <h1>Vegetable</h1>
                <hr/>
                <tbody className = "t1">
                    <tr>
                    {productList}
                    </tr>
                </tbody>
            </Table>
        )
    }
    
}
export default Vegetables;