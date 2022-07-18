using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Weather.BL.Models
{


    public class Temperature
    {
        public float Value { get; set; }   
        public string Unit { get; set; }   
        public int UnitType { get; set; }
    }

    public class TemperatureObject
    {
        public Temperature Metric { get; set; }    
        public Temperature Imperial { get; set; }    
    }


    public class CurrentWeatherResponse
    {
        public string LocalObservationDateTime { get; set; } 
        public string EpochTime { get; set; } 
        public string WeatherText { get; set; } 
        public int WeatherIcon { get; set; } 
        public bool HasPrecipitation { get; set; } 
        public string PrecipitationType { get; set; }
        public bool IsDayTime { get; set; }
        public TemperatureObject Temperature { get; set; }
        public string MobileLink { get; set; }
        public string Link { get; set; }
    }
}
