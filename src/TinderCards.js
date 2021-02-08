import React, {useState, useEffect} from 'react'
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import database from "./firebase";

function TinderCards() {
    const [people, setPeople] = useState([]);

    //Piece of code which runs based on a condition
    useEffect(() => {
        database.collection("people")
        .onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc =>doc.data()))
            ));
    }, []);
   

    //this how to declare a variable in react way
    //its the same as: const people =[]; 
    //we trying to push a number of peoples picture in an array.
    return (
        <div>
            <h1>Tinder Cards</h1>
            <div className="tinderCards__cardContainer">
            {people.map((person) => ( 
              <TinderCard
              className="swipe"
              key={person.name} // benefit of using key allows a component to re-render
              preventSwipe={["up", "down"]}>
                <div 
                style={{ backgroundImage:`url(${person.url})` }}
                className="card">
                  <h3>{person.name}</h3>
                </div>
            </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
