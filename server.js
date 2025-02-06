const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express(); // ← Assure-toi que `app` est défini ici

// Configuration Swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API Documentation",
      description: "API Information",
      contact: {
        name: "Developer"
      },
      servers: ["http://localhost:3000"]
    }
  },
  apis: ["server.js"]
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Route simple pour tester
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, world!" });
});

module.exports = app; // ← Exporte `app` pour que tes tests puissent l'utiliser

// Lancer le serveur seulement si ce fichier est exécuté directement
if (require.main === module) {
  app.listen(3000, () => console.log("Server running on port 3000"));
}
