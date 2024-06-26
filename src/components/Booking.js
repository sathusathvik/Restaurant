import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
    return(
        <BookingForm availbleTime={props.availbleTime} dispatch={props.dispatch} submitForm={props.submitForm}/>
    );
}

export default Booking;