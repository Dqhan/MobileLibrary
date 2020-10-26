class List extends BaseComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        super.componentDidMount()
        this.loadTarget({
            md: 'aui-list',
            src: 'http://localhost:8081/#/aui-list'
        })
    }
}

export default List;