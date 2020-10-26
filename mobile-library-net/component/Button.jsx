class Button extends BaseComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        super.componentDidMount()
        this.loadTarget({
            md: 'aui-button',
            src: 'http://localhost:8081/#/button'
        })
    }
}

export default Button;