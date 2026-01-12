export class MeteoService {
    
    static API_URL = "https://api.open-meteo.com/v1/forecast?latitude=44.411&longitude=8.896&hourly=temperature_2m,rain,weather_code,wind_speed_10m"

    constructor(){}

    getMeteoData(){
        fetch(MeteoService.API_URL)
        .then(response => response.json())
        .then(data => this.transformData(data))
        .then(transformedData => console.log(transformedData));
    }

    transformData(data){



        //[{time:"2026-01-17T14:00", temperaure: 14, rain: 3, code: 0, wind: 12},
        // {time:"2026-01-17T15:00", temperaure: 17 rain: 3, code: 0, wind: 12},
        // {time:"2026-01-17T16:00", temperaure: 16, rain: 3, code: 0, wind: 12}]
    }
}