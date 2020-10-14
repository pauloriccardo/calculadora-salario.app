import React, { Component } from 'react';
import InputFullSalary from './components/InputFullSalary';
import { calculateSalaryFrom } from './helper/salary';
import InputReadOnly from './components/ImputReadOnly';
import ProportionBar from './components/ProportionBar';

const COLOR_INSS = '#e67e22';
const COLOR_IRPF = '#C0392B';
const COLOR_NET_SALARY = '#16A085';

export default class App extends Component {
    constructor() {
        super();

        this.state = { fullSalary: '' };
    }

    handleFullSalaryChange = (newValue) => {
        this.setState({
            fullSalary: newValue,
        });
    };

    render() {
        const { fullSalary } = this.state;
        const salaryObject = calculateSalaryFrom(fullSalary);
        const {
            baseINSS,
            discountINSS,
            baseIRPF,
            discountIRPF,
            netSalary,
            percentageINSS,
            percentageIRPF,
            percentageNetSalary,
        } = salaryObject;

        return (
            <div className="container">
                <h3>Calcule seu salário</h3>
                <div className="row">
                    <InputFullSalary
                        currentValue={fullSalary}
                        onSalaryChange={this.handleFullSalaryChange}
                    />
                </div>
                <div className="row">
                    <InputReadOnly label="Base Inss:" value={baseINSS} />

                    <InputReadOnly
                        label="Desconto Inss:"
                        value={discountINSS}
                        percentage={percentageINSS}
                        color={COLOR_INSS}
                    />

                    <InputReadOnly label="Base IRPF:" value={baseIRPF} />

                    <InputReadOnly
                        label="Desconto IRPF:"
                        value={discountIRPF}
                        percentage={percentageIRPF}
                        color={COLOR_IRPF}
                    />

                    <InputReadOnly
                        label="Salário Liquido:"
                        value={netSalary}
                        percentage={percentageNetSalary}
                        color={COLOR_NET_SALARY}
                    />
                </div>
                <div>
                    <ProportionBar
                        inss={percentageINSS}
                        irpf={percentageIRPF}
                        netSalary={percentageNetSalary}
                        colorINSS={COLOR_INSS}
                        colorIRPF={COLOR_IRPF}
                        colorNetSalary={COLOR_NET_SALARY}
                    />
                </div>
            </div>
        );
    }
}
