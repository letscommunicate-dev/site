import RichtextContent from "./content/richtext";
import ServicesContent from "./content/services";


interface Props {
    contents: [],
}

const Contents = ({ contents }: Props) =>
    <>
        {contents.map((content: any, i: number) => {
            if (content.__typename === 'Services') {
                return (<ServicesContent items={content.serviceCollection.items} />)
            }
            
            if (content.__typename === 'Richtext') {
                return (
                    <RichtextContent
                        key={content.id}
                        richTextDocument={content.content.json}
                        links={content.content.links}
                    />
                )
            }
        })}
    </>

export default Contents;
