import React from 'react';
import{ useLocation } from 'react-router-dom';
export default function LocationDisplay() {
    return (<div data-testid="location-display">{useLocation().pathname}</div>);
}