import Service from "../../defs/service";

interface Props {
    items: [Service],
}

const ServicesContent = ({ items }: Props) =>
    <>
        {items.map((item, i) => (
            <div key={i}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
            </div>
        ))}
    </>

export default ServicesContent;
