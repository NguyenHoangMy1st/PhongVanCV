import React, { useEffect, useState } from 'react';
import './style.scss';
export default function AddressCard({ address, isSelected, firstName, lastName, mobile }) {
    return (
        <section>
            <div className={`address ${isSelected ? 'selected' : ''}`}>
                <p className="address-name">{`${firstName} ${lastName}`}</p>
                {/* <p className="address-p">{`${address?.streetAddress} - ${address?.city}`}</p> */}
                <p className="address-p">{`${address?.streetAddress} ${address.city}`}</p>
                <div className="address-phone">
                    <p className="address-phone-title">Phone Number:</p>
                    <p className="address-p">{mobile}</p>
                </div>
                {/* <div className="address-email">
          <p className="address-email-title">Email:</p>
          <p className="address-p">n.h.my2002@gmail.com</p>
        </div> */}
            </div>
        </section>
    );
}
