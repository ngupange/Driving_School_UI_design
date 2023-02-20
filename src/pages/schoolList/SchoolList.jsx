import './schoolList.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import SearchItem from '../../components/searchItem/SearchItem'
import Footer from '../../components/footer/Footer'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

function SchoolList() {
    const location = useLocation();
    const [postcode, setPostcode] = useState(location.state.postcode);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [licClass, setLicClass] = useState(location.state.licClass);
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <div className="lsItem">
                            <h1 className="lsTitle">Search</h1>
                            <label>Licence Type</label>
                            <input placeholder={licClass} type="text"
                                onChange={(e) => setLicClass(e.target.value)} />
                        </div>
                        <div className="lsItem">
                            <label>Suburb</label>
                            <input placeholder={postcode} type="text"
                                onChange={(e) => setPostcode(e.target.value)} />
                        </div>
                        <div className="lsItem">
                            <label>Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(
                                date[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && (
                                <DateRange
                                    onChange={(item) => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            )}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Min price <small>per hour</small>
                                    </span>
                                    <input type="number" min={0} className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max price <small>per hour</small>
                                    </span>
                                    <input type="number" min={0} className="lsOptionInput" />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SchoolList