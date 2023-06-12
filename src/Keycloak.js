import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8180",
 realm: "hubbulle",
 clientId: "kinco"
});


export default keycloak;