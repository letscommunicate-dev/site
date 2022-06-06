import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from "@contentful/rich-text-types";
import Image from 'next/image';

interface Props {
    links: {
        assets: {
            block: []
        }
    },
    richTextDocument: Document,
}

function renderOption(links: any): Options {
    const assetBlockMap = new Map();
    for (const asset of links.assets.block) {
        assetBlockMap.set(asset.sys.id, asset);
    }

    return {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                const asset = assetBlockMap.get(node.data.target.sys.id);
                return (
                    <Image
                        src={asset.url}
                        width={asset.width}
                        height={asset.height}
                        alt={asset.description}
                    />
                );
            }
        }
    }
}

const RichtextContent = ({ richTextDocument, links }: Props) =>
    <>
        {documentToReactComponents(richTextDocument, renderOption(links))}
    </>

export default RichtextContent;