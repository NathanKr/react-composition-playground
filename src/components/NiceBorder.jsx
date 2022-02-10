import './NiceBorder.css'

const NiceBorder = (props) => {
    const cName= `NiceBorder NiceBorder-${props.color}`;
    return (
        <div className={cName}>
            {props.children}
        </div>
    );
};

export default NiceBorder;