import countries from "world-countries";
import {
    getCountryCallingCode
} from "libphonenumber-js";

/**
 * Processes and returns structured country data for easy access.
 * @returns {Array} Array of country objects with selected fields.
 */
export const countriesData = (() => {
    return countries.map((country) => {
        const currencyKey = country.currencies ? Object.keys(country.currencies)[0] : "N/A";

        // Convert CCA2 code to flag emoji
        const flagEmoji = country.cca2 ?
            String.fromCodePoint(
                ...country.cca2
                .toUpperCase()
                .split("")
                .map((char) => 0x1F1E6 - 65 + char.charCodeAt(0))
            ) :
            "NG";

        let phoneCode = "";
        try {
            if (country.cca2) {
                phoneCode = `+${getCountryCallingCode(country.cca2)}`;
            }
        } catch (err) {
            phoneCode = "";
        }

        return {
            name: {
                common: country.name.common,
                official: country.name.official,
            },
            capital: country.capital?. [0] || "N/A",
            code: country.cca2 || "N/A",
            currency: country.currencies ? {
                code: currencyKey, // e.g., "NGN"
                name: country.currencies[currencyKey]?.name || "N/A", // "Nigerian Naira"
                symbol: country.currencies[currencyKey]?.symbol || "N/A", // "₦"
            } : {
                code: "N/A",
                name: "N/A",
                symbol: "N/A",
            },
            flag: country.cca2 ?
                `https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png` : "N/A", // Image-based flag
            flagEmoji, // Emoji-based flag
            phoneCode,
        };
    });
})();