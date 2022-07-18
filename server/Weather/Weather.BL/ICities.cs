namespace Weather.BL
{
    public interface ICities
    {
        public bool initDB();
        public int AddCityToFavorites(string userId, string cityId);
        public int GetUserFavorites(string userId);
        public Task<object> GetCities(string textToSearch);
        public Task<object> GetCurrentWeather(string locationKey);
    }
}