export default class Content extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        
        //     var text = document.getElementById("md-content").value;
        //     var converter = new showdown.Converter();
        //     var html = converter.makeHtml(text);
        // document.getElementById("result").innerHTML = html;
        var name = 'button';
        fetch(`/api/getmd?md=${name}.md`)
        .then(res=>{
            if(res.ok)return res.blob();
            else throw new Error('request is error.');
        })
        .then(blob=>{
            var a =blob;
        })
    }

    render(){
        return <div id='md-content'></div>
    }
}