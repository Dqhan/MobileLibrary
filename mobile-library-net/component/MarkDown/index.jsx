import { useEffect } from 'react';

function MarkDown(props) {
    useEffect(() => {
        if (props.name === void 0 || props.name === "") return;
        fetch(`/api/getmd?md=${props.name}.md`)
            .then(res => {
                if (res.ok) return res.text();
                else throw new Error('request is error.');
            })
            .then(result => {
                var converter = new showdown.Converter();
                var html = converter.makeHtml(result);
                document.getElementById("md-content").innerHTML = html;
            })
    })
    return <div id='md-content'></div>
}

export default MarkDown;