import {
    faCarSide,
    faTruckMoving,
    faBus,
    faBusSimple,
    faLocationDot,
    faMotorcycle,
    faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = () => {

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faCarSide} />
                        <span>Car</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTruckMoving} />
                        <span>LR Light rigid</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBus} />
                        <span>MR Medium rigid</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBusSimple} />
                        <span>HR Heavy rigid</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faMotorcycle} />
                        <span>Motorcycles R</span>
                    </div>
                </div>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faLocationDot} className="headerIcon" />
                        <input
                            type="text"
                            placeholder="Type of Licence / Car"
                            className="headerSearchInput"
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faLocationDot} className="headerIcon" />
                        <input
                            type="text"
                            placeholder="Post Code"
                            className="headerSearchInput"
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span
                            onClick={() => setOpenDate(!openDate)}
                            className="headerSearchText"> {`${format(date[0].startDate, "dd/MMMM/yyyy")} to ${format(
                                date[0].endDate,
                                "dd/MMMM/yyyy"
                            )}`}</span>
                        {openDate && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                                minDate={new Date()}
                                rangeColors={['#e66714', '#172d13', '##172d13']}
                            />
                        )}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header