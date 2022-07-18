global using Weather.BL;
global using Microsoft.Extensions.DependencyInjection;
global using Microsoft.EntityFrameworkCore;
using Weather.DAL;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ICities, Cities>();
builder.Services.AddScoped<HttpClient>(cl => new HttpClient());
builder.Services.AddHttpContextAccessor();

var connectionString = builder.Configuration.GetConnectionString("AppDb");

builder.Services.AddDbContext<WeatherContext>(
        options => options.UseSqlServer("name=ConnectionStrings:DefaultConnection"));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
