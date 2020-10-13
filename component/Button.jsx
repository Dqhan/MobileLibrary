import BaseComponent from './Base'
class Button extends BaseComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        super.componentDidMount()
        this.loadTarget({
            md: 'button',
            src: 'https://youzan.github.io/vant/mobile.html#/zh-CN/button#dai-ma-yan-shi'
        })
    }
}

export default Button;