import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { Document } from "@contentful/rich-text-types";

interface Props {
    richTextDocument: Document,
}

const options: Options = {
    renderNode: {}
};

const Richtext = ({ richTextDocument }: Props) =>
    <>
        {documentToReactComponents(richTextDocument)}
    </>

export default Richtext;