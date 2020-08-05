import React, { Component } from 'react';
import { calculateSalaryFrom } from './salary';

export default class CalculaSalario extends Component {
    constructor() {
        super();

        this.state = { salario: '' };
    }

    handleClick = (event) => {
        const {
            baseINSS,
            discountINSS,
            baseIRPF,
            discountIRPF,
            netSalary,
        } = calculateSalaryFrom(event.target.value);

        this.setState({
            baseINSS,
            discountINSS,
            baseIRPF,
            discountIRPF,
            netSalary,
        });
    };

    render() {
        return (
            <div>
                <h3>React Salario</h3>
                <span>Salario</span>
                <input onChange={this.handleClick} type="number" />
                <span>Base INSS</span>
                <input readOnly value={this.state.baseINSS} />
                <span>Desconto INSS</span>
                <input readOnly value={this.state.discountINSS} />
                <span>Base IRPF</span>
                <input readOnly value={this.state.baseIRPF} />
                <span>Desconto IRPF</span>
                <input readOnly value={this.state.discountIRPF} />
                <span>Salario Liquido</span>
                <input readOnly value={this.state.netSalary} />
            </div>
        );
    }
}
