import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from "@contentful/rich-text-types";
import Image from 'next/image';

import styles from './richtext.module.css';

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
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const asset = assetBlockMap.get(node.data.target.sys.id);
                return (
                    <Image
                        src={asset.url}
                        width={asset.width}
                        height={asset.height}
                        alt={asset.description}
                        quality="100"
                    />
                );
            }
        }
    }
}

const RichtextContent = ({ richTextDocument, links }: Props) =>
    <span className={styles.richtext}>
        {documentToReactComponents(richTextDocument, renderOption(links))}
    </span>

export default RichtextContent;