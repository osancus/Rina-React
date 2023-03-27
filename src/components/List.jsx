import { FunctionComponent } from "react";

const List = (props) => {
    return (
        <div className="holder">
            <ul>
                {props.items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;
