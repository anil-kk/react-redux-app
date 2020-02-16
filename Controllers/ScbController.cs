using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using RestSharp;

namespace scbclient.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ScbController : ControllerBase
    {
        private static readonly string[] Regions = new[]
        {
            "Stockholm", "Halmstad", "Varberg", "Kungsbacka", "Göteborg", "Lund", "Bostad", "Malnö", "Karlstad", "Laholm"
        };

        private readonly ILogger<ScbController> _logger;

        public ScbController(ILogger<ScbController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Population> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Population
            {
                Year = DateTime.Now.AddDays(index),
                Gender = "Male",
                Count = rng.Next(100, 1000),
                Region = Regions[rng.Next(Regions.Length)]
            })
            .ToArray();
        }

        [HttpPost]
        public string Post(SearchSelection searchSelection)
        {
            var client = new RestClient("http://api.scb.se");
            var request = new RestRequest("OV0104/v1/doris/en/ssd/BE/BE0101/BE0101H/FoddaK", Method.POST);
            request.RequestFormat = DataFormat.Json;

            var regionSelection = new Selection()
            {
                filter = "all",
                values = new List<string>() { "*" }
            };
            regionSelection.Update(searchSelection.Regions);

            var regionQuery = new Query() { code = "Region", selection = regionSelection };


            var genderSelection = new Selection()
            {
                filter = "all",
                values = new List<string>() { "*" }
            };
            genderSelection.Update(searchSelection.Genders);
            var genderQuery = new Query() { code = "Kon", selection = genderSelection };


            var yearSelection = new Selection()
            {
                filter = "item",
                values = new List<string>() { "*" }
            };
            yearSelection.Update(searchSelection.Years);
            var yearQuery = new Query() { code = "Tid", selection = yearSelection };


            var finalQuery = new ScbRootObject() { query = new List<Query>() { regionQuery, genderQuery, yearQuery }, response = new Response() { format = "json" } };

            request.AddJsonBody(finalQuery);

            var response = "{data: {data:[]}}";

            try
            {
                var res = client.Execute(request);
                response = res.Content;
            }
            catch (Exception ex)
            {
                return response;
            }

            return string.IsNullOrEmpty(response) ? "{data: {data:[]}}" : response;
        }
    }

    public class SearchSelection
    {
        public List<string> Regions { get; set; }
        public List<string> Genders { get; set; }
        public List<string> Years { get; set; }
    }

    public class Population
    {
        public DateTime Year { get; set; }
        public string Gender { get; set; }
        public int Count { get; set; }
        public string Region { get; set; }
    }

    public class Selection
    {
        public string filter { get; set; }
        public List<string> values { get; set; }

        public void Update(List<string> items)
        {
            if (items.Any())
            {
                this.filter = "item";
                this.values.Remove("*");
                this.values.AddRange(items);
            }
        }
    }

    public class Query
    {
        public string code { get; set; }
        public Selection selection { get; set; }
    }

    public class Response
    {
        public string format { get; set; }
    }

    public class ScbRootObject
    {
        public List<Query> query { get; set; }
        public Response response { get; set; }
    }
}
