import React, { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section>
                <form>
                <fieldset>
                    <div>
                        <label htmlFor="book-date">Choose Date</label>
                        <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                    </div>

                    {/* for time selection*/}

                    <div>
                        <label htmlFor="book-time">Choose Time:</label>
                        <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)}>
                            <option value="">Select a Time</option>
                            {
                                props.availbleTime.availbleTime.map(availbleTime => {return <option key={availbleTime}>{availbleTime}</option>})
                            }
                        </select>
                    </div>

                    {/* for number of guests*/}

                    <div>
                        <label htmlFor="book-guest">Number of Guest</label>
                        <input id="book-guest" min={1} value={guest} onChange={(e) => setGuest(e.target.value)}/>
                    </div>

                    {/*occasion type*/}

                    <div>
                        <label htmlFor="book-occasion">Occasion:</label>
                        <select id="book-occasion" key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniverserry</option>
                        <option>Engagement</option>
                        </select>
                    </div>

                    {/*submit button*/}

                    <div className="btnReceive">
                        <input aria-label="On-Click" type="submit" value={"Make Your Reservation"}/>
                    </div>
                </fieldset>
                </form>
            </section>
        </header>
    );
}

export default BookingForm;