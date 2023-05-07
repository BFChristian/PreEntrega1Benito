
const ItemListContainer = ({item}) => {
    return(
        <>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">

                        <div className="card" style={{width: '18rem'}}>
                            <img src="..." className="card-img-top" alt="imagen"/>
                            <div className="card-body">
                                <h5 className="card-title">{item}</h5>
                                <p className="card-text">texto de prueba</p>
                                <a href="#" className="btn btn-primary">Ver mas</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;