using Microsoft.AspNetCore.Mvc;
using Weather.BL;


namespace Weather.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CitiesController : ControllerBase
    {
        private ICities _cities;


        public CitiesController(ICities cities)
        {
            _cities = cities;
        }

        [HttpGet("initDB")]
        public bool initDB()
        {
            return _cities.initDB();
        }

        [HttpGet("AddCityToFavorites")]
        public int AddCityToFavorites(string userId, string cityId)
        {
            return _cities.AddCityToFavorites(userId, cityId);
        }

        [HttpGet("GetUserFavorites")]
        public int GetUserFavorites(string userId)
        {
            return _cities.GetUserFavorites(userId);
        }

        [HttpGet("GetCities")]
        public async Task<object> GetCities(string textToSearch)
        {
            try
            {
                var result = await _cities.GetCities(textToSearch);
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet("GetCurrentWeather")]
        public async Task<object> GetCurrentWeather(string locationKey)
        {
            try
            {
                var result = await _cities.GetCurrentWeather(locationKey);
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        
    }
}