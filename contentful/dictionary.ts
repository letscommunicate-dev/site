import { Locale } from "../defs/i18n";

export class DictionaryEntry {
    items: Map<Locale, String>;

    constructor(en_us: string, pt_br: string) {
        this.items = new Map();
        this.items.set(Locale.EN_NZ, en_us);
        this.items.set(Locale.PT_BR, pt_br);
    }

    public get(key: Locale): String | undefined {
        return this.items.get(key);
    }
}

export default (locale: Locale, key: string): String | undefined => {
    const entry = dictonary.get(key);
    return entry ? entry.get(locale) : '';
}

const dictonary = new Map<String, DictionaryEntry>();
dictonary.set('about', new DictionaryEntry('About', 'Sobre'));
dictonary.set('locale', new DictionaryEntry('Locale', 'Localização'));