import CardFront from "./../CardFront";
import CardBack from "./../CardBack";

const List = ( {dishList} ) => {

    const propStuff = ( Component, objectitem) => <Component dishInformation = {objectitem}/>;

    return (
        <>
            {dishList.map( dish => {
                const stuff = [
                    propStuff(CardFront,dish),
                    propStuff(CardBack,dish)
                ]
                return stuff;
            })}
        </>
    )
}

export default List;

