


function Fruits(props) {
    return(
        <div>
            {props.diet.map(f => <p key={f.id}> {f.fruitName}</p>)}
        </div>
        
    )
};

export default Fruits