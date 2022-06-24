import { Router } from "next/router";
import { Locale } from "../defs/i18n";
import Form from "./content/form";
import RichtextContent from "./content/richtext";
import ServicesContent from "./content/services";


interface Props {
    contents: [],
    router: Router
}

const Contents = ({ contents, router }: Props) =>
    <>
        {contents.map((content: any, i: number) => {
            if (content.__typename === 'Services') {
                return (
                    <ServicesContent
                        key={content.id + i}
                        items={content.serviceCollection.items}
                    />)
            }
            
            if (content.__typename === 'Richtext') {
                return (
                    <RichtextContent
                        key={content.id + i}
                        richTextDocument={content.content.json}
                        links={content.content.links}
                    />
                )
            }
            
            if (content.__typename === 'Form') {
                return (
                    <Form
                        id={content.id}
                        key={content.id + i}
                        action={content.action}
                        locale={router.locale as Locale}
                        fields={content.fieldCollection.items}
                        successMessage={content.successMessage}
                        errorMessage={content.errorMessage}
                    />
                )
            }
        })}
    </>

export default Contents;
