
// eslint-disable-next-line react/prop-types
export default function Card({ title }) {
    return (
        <>
            <div className="container row">
                <div className="card col-3" style={{ width: 400 }}>
                    <img className="card-img-top" src="../bootstrap4/img_avatar1.png" alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
        </>
    )
}
