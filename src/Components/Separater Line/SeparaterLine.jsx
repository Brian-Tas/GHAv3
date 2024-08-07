import "./SeparaterLine.css";

function SeparaterLine(props) {
    if(props.type === 'horizontal' || props.type === 'vertical') {
        return <div className={`separater-line-${props.type}`}></div>
    } else {
        return <div className={`separater-line-horizontal`}></div>
    }
}

export default SeparaterLine;