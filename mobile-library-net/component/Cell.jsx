class Cell extends BaseComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        super.componentDidMount()
        this.loadTarget({
            md: 'aui-cell',
            src: 'http://localhost:8081/#/aui-cell'
        })
    }
}

export default Cell;