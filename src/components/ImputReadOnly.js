import React, { Component } from 'react';
import { formatMoney, formatPercentage } from '../helper/formatters';

export default class InputReadOnly extends Component {
    render() {
        const { color = 'black', value, percentage, label } = this.props;
        const formattedPercentage = percentage > 0 ? `(${formatPercentage(percentage)}) ` : '';
        const formattedValue = `${formatMoney(value)} ${formattedPercentage}`;

        return (
            <div className="input-field col s6 m4 l3">
                <input
                    readOnly
                    id="inputReadOnly"
                    value={formattedValue}
                    style={{ color, fontWeight: 'bold' }}
                />
                <label className="active" htmlFor="inputReadOnly">
                    {label}
                </label>
            </div>
        );
    }
}
