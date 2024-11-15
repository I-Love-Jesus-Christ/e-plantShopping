import Plant from "./Plant";
import PlantCategory from "./PlantCategory";
function PlantGrid({plantsArray}){ return (<>{
    plantsArray.map((object_1) => {(<>
        <PlantCategory category={object_1.category} />
        <ul>
            {
                object_1.plants.map((object_2) => {(<>
                    <li><Plant plant={object_2} /></li>
                </>)})
            }
        </ul>
    </>)})
}</>)}

export default PlantGrid;