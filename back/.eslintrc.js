module.exports = {
    env: {
      node: true, // Esto añade las variables globales de Node.js
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    rules: {
      // Puedes añadir reglas personalizadas aquí
    },
  };
  