import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/esm/Table';

function All({card}) {
    return (
        <div>
            {/* <td key ={index}> */}

            <Table>
                <tbody>
                    <tr>
                    <td>
        
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
                        <Button variant="primary" >Add to Cart</Button>
                        </Card.Body>
                    </Card>
                    </td>
                    </tr>
                </tbody>    
            </Table>
                
        </div>
    );
}

export default All;