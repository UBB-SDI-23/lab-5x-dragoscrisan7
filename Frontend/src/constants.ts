const PROD_BACKEND_API_URL = "https://sdi-2023-example.strangled.net";
const DEV_BACKEND_API_URL = "http://13.50.240.137:8000";

export const BACKEND_API_URL =
	process.env.NODE_ENV === "development" ? DEV_BACKEND_API_URL : PROD_BACKEND_API_URL;

