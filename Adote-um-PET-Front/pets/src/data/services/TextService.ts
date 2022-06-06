import { text } from "node:stream/consumers"

export const TextService = {
    limitaTexto(texto: string, limite: number): string {
        if (texto.length > limite) {
            return texto.slice(0, limite) + " (...)";
        }

        return texto;
    }
};