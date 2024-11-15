module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                ptReg: ["PT Serif Regular", "sans-serif"],
                ptRegItalic: ["PT Serif Regular Italic", "sans-serif"],
                ptBold: ["PT Serif Bold", "sans-serif"],
                ptBoldItalic: ["PT Serif Bold Italic", "sans-serif"],
            },
            colors: {
                dark: "#303841",
                light: "#F5F5F5",
                primary: "#D6E6F2",
                secondary: "#FFF200"
            }
        },
    },
    plugins: [],
};