function Plant({plant: {name, image, cost, description}}) { return (
    <div className="plant">
        <p className="plant_name">{name}</p>
        <img className="plant_image" src={image} />
        <p className="plant_cost">{cost}</p>
        <p className="plant_description">{description}</p>
    </div>
);
}

export default Plant;