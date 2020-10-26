class Search extends BaseComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        super.componentDidMount()
        this.loadTarget({
            md: 'aui-search',
            src: 'http://localhost:8081/#/aui-search'
        })
    }
}

export default Search;