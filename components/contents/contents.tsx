import { useRouter } from "next/router";
import { Locale } from "../../defs/i18n";
import Form from "./form/form";
import RichtextContent from "./richtext/richtext";
import ServicesContent from "./services/services";

interface Props {
    contents: any[],
}

const Contents = ({ contents }: Props) => {
    const router = useRouter();
    const locale = router.locale as Locale;

    return (
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
                            method={content.method}
                            locale={locale as Locale}
                            fields={content.fieldCollection.items}
                            successMessage={content.successMessage}
                            errorMessage={content.errorMessage}
                        />
                    )
                }
            })}
        </>
    );
}

export default Contents;
