import "./style.css";
import { MeteoService } from "./meteo-service.js";

const service = new MeteoService();

service.getMeteoData();

