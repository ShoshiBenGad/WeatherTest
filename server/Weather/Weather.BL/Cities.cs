
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Weather.DAL;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Weather.BL.Models;
using Microsoft.Extensions.DependencyInjection;


namespace Weather.BL
{
    public class Cities : ICities
    {
        const string API_KEY = "fUTd25Ibxy4gpGUsp1oMV2VBK2ASAa0X";

        private HttpClient _httpClient;
        private IConfiguration _config;

        private WeatherContext _weatherContext;


        public Cities(IConfiguration config, HttpClient httpClient, WeatherContext weatherContext)
        {
            _config = config;
            _httpClient = httpClient;
            _weatherContext = weatherContext;
        }

        public int AddCityToFavorites(string userId , string cityId)
        {
            Favorite f = _weatherContext.Favorites.FirstOrDefault(c => c.CityId.Equals(cityId) &&c.UserId.Equals(userId));
            
            if (f == null)
            {
                Favorite favorite = new Favorite() {  UserId = userId, CityId = cityId };
                _weatherContext.Favorites.Add(favorite);
                _weatherContext.SaveChanges();
            }
          
            return _weatherContext.Favorites.Where(c => c.UserId.Equals(userId)).ToList().Count();
        }

        public int GetUserFavorites(string userId)
        {
            User user = _weatherContext.Users.FirstOrDefault(u => u.UserId.Equals(userId));
            if (user == null)
            {
                _weatherContext.Users.Add(new User() { UserId = userId });
                _weatherContext.SaveChanges();
                return 0;
            }
            List<Favorite> userFavorites = _weatherContext.Favorites.Where(f => f.UserId.Equals(userId)).ToList();
            return userFavorites.Count();
        }

        public async Task<object> GetCurrentWeather(string locationKey)
        {
            try
            {
                string url = "http://dataservice.accuweather.com/currentconditions/v1/" + locationKey + "?apikey=" + API_KEY;

                var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, new Uri(url));

                var result = await _httpClient.SendAsync(httpRequestMessage);

                if (result == null)
                {
                    throw new Exception("Exception");
                }
                if (result.StatusCode != HttpStatusCode.OK)
                {
                    var ex = new Exception(result.Content.ReadAsStringAsync().Result);
                    throw new Exception("StatusCode : " + result.StatusCode);
                }

                var resultContent = await result.Content.ReadAsStringAsync();

                List<CurrentWeatherResponse> response = JsonConvert.DeserializeObject<List<CurrentWeatherResponse>>(resultContent);

                return response[0];
            }
            catch (HttpRequestException ex)
            {
                throw new Exception("Exception");
            }
            catch (WebException ex)
            {
                throw new Exception("Exception");
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<object> GetCities(string textToSearch)
        {
            try
            {

                string url = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" + API_KEY + "&q=" + textToSearch;

                var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, new Uri(url));

                var result = await _httpClient.SendAsync(httpRequestMessage);

                if (result == null)
                {
                    throw new Exception("Exception");
                }
                if (result.StatusCode != HttpStatusCode.OK)
                {
                    var ex = new Exception(result.Content.ReadAsStringAsync().Result);
                    throw new Exception("StatusCode : " + result.StatusCode);
                }

                var resultContent = await result.Content.ReadAsStringAsync();

                List<City> response = JsonConvert.DeserializeObject<List<City>>(resultContent);

                return response;
            }
            catch (HttpRequestException ex)
            {
                throw new Exception("Exception");
            }
            catch (WebException ex)
            {
                throw new Exception("Exception");
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool initDB()
        {
            try
            {
                _weatherContext.Database.EnsureCreated();

                User user = new User
                {
                    UserId = "Rachel123",
                };

                User user2 = new User
                {
                    UserId = "Sara123",
                };

                Favorite favorite1 = new Favorite()
                {
                    CityId = "123456",
                    UserId = "Sara123"
                };

                Favorite favorite2 = new Favorite()
                {
                    CityId = "112233",
                    UserId = "Sara123"
                };

                Favorite favorite3 = new Favorite()
                {
                    CityId = "123456",
                    UserId = "Rachel123"
                };

                Favorite favorite4 = new Favorite()
                {
                    CityId = "147788",
                    UserId = "Rachel123"
                };
             
                _weatherContext.Users.Add(user);
                _weatherContext.Users.Add(user2);
                _weatherContext.Favorites.Add(favorite1);
                _weatherContext.Favorites.Add(favorite2);
                _weatherContext.Favorites.Add(favorite3);
                _weatherContext.Favorites.Add(favorite4);


                _weatherContext.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }

        }

    }
}