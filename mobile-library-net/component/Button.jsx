import BaseComponent from './Base'
class Button extends BaseComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        super.componentDidMount()
        this.loadTarget({
            md: 'button',
            src: 'http://localhost:8081/#/button'
        })
    }
}

export default Button;