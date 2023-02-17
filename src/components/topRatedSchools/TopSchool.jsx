import "./topSchool.css"

const TopSchool = () => {
    return (
        <div className="topsection">
            <div className="topItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                    alt=""
                    className="itemImg"
                />
                <span className="itemName">Cains Driving School</span>
                <span className="itemCity">Cains</span>
                <span className="hourlyRate">Starting from <span className="price">$65</span> per hour</span>
                <div className="averageRating">
                    <button>9.2</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="topItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/412367287.jpg?k=574a19fccef740a5299a9863d55861f7ed0e7a6146cb0a57fdecb5d211a12e39&o=&hp=1"
                    alt=""
                    className="itemImg"
                />
                <span className="itemName">Peace Driving School</span>
                <span className="itemCity">Towoomba</span>
                <span className="hourlyRate">Starting from <span className="price">$70</span> per hour</span>
                <div className="averageRating">
                    <button>7.9</button>
                    <span>Very Good</span>
                </div>
            </div>
            <div className="topItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
                    alt=""
                    className="itemImg"
                />
                <span className="itemName">Pimpama Driving School</span>
                <span className="itemCity">Pimpama</span>
                <span className="hourlyRate">Starting from <span className="price">$50</span> per hour</span>
                <div className="averageRating">
                    <button>9.0</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className="topItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
                    alt=""
                    className="itemImg"
                />
                <span className="itemName">Marsden Driving School</span>
                <span className="itemCity">Marsden</span>
                <span className="hourlyRate">Starting from <span className="price">$90</span> per hour</span>
                <div className="averageRating">
                    <button>6.9</button>
                    <span>Good</span>
                </div>
            </div>
        </div>
    )
}

export default TopSchool;