class DefaultFilter extends BaseComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        super.componentDidMount()
        this.loadTarget({
            md: 'aui-defaultFilter',
            src: 'http://localhost:8081/#/aui-defaultFilter'
        })
    }
}

export default DefaultFilter;