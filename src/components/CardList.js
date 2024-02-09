import React from "react";
import Card from './Card';

function CardList({robots})
{
    return(
        <div className="tc">
            {robots.map(function (user, i){
        return( <Card key={i}
             id={robots[i].id}
              name={robots[i].name}
               username={robots[i].username}
                email={robots[i].email}
                 />
        );
    })
    }
        </div>
    );
}
 
export default CardList;