import "./Die.css";

export default function Die() {

    return (
        <div>
            <h4 className="Die">Die Number : {Math.floor(Math.random() * 151) + 1}</h4>
        </div>
    );
}