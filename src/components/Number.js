import React ,{ Component }from 'react';

export default (ChildComponent) => {
    return class Number extends Component{
        state = {
            number: localStorage.getItem('number') ? JSON.parse( localStorage.getItem('number')) : 0
        };

        handleAddNumber = () =>{
            const { number } = this.state;
            const NewNumber = number + 1;
            this.setState({
                number: NewNumber
            });
            localStorage.setItem('number', NewNumber);
        };

        handleSubNumber = () =>{
            const { number } = this.state;
            const NewNumber = number - 1;
            this.setState({
                number: NewNumber
            });
            localStorage.setItem('number', NewNumber);
        };

        handleRemoveNumber = () => {
            const { number } = this.state;
            const NewNumber = number - number;

            this.setState({
                number: NewNumber
            });
            localStorage.setItem('number', NewNumber);
        };

        render(){
            const { handleAddNumber ,handleRemoveNumber, handleSubNumber } = this;
            const { number } = this.state;

            return(
                <div>
                    <ChildComponent
                        handleSubNumber={handleSubNumber}
                        handleRemoveNumber={handleRemoveNumber}
                        handleAddNumber={handleAddNumber}
                        number={number}
                        {...this.props}
                    />
                </div>
            )
        }
    }
}