import Card from "../Card";

const CardList = ( {dishList, toggleFav} ) => {

    return (
        <>
            {dishList.map( (dish, index) => 
                <div>
                    <Card key={index} dishInformation={dish} toggleFav={toggleFav} />
                </div>
            )}
        </>
    )
}

export default CardList;


