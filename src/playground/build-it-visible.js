class VisibilityToggle extends React.Component {
    constructor (props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    };
    toggleVisibility () {
        this.setState((prevState)=> {
            return {
                visibility: !prevState.visibility
            }
        })
    };

    render () {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                {this.state.visibility && (
                    <div>
                            <p>Hey these are some details</p>
                    </div>
                )}
                <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
            </div>
        );
    };
};

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));