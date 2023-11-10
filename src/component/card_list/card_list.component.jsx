import { Component } from "react";
import './card.list.container.css';
class CardList extends Component
{
    render(){
        const {listcomponent } = this.props;
        return (<div className="card-list">

            {listcomponent.map((mon) => {
                const{name,email,id} =mon;
                return(
                 <div className="cardcontainer">
                    <img alt={`listcomponent ${name}`} src={`https://robohash.org/${id*3}?set=set2&size=180x180`}/>

                   <h2>{name}</h2> 
                   <p>{email}</p>
                    </div>
            )})}
            </div>

            );
    }


}


export default CardList