﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Weather.BL.Models
{
    public class Country
    {
        public string ID { get; set; }    
        public string LocalizedName { get; set; }    
    }

    public class City
    {
        public int Version { get; set; } 
        public string Key { get; set; } 
        public string Type { get; set; } 
        public int Rank { get; set; } 
        public string LocalizedName { get; set; }
        public Country Country { get; set; }
        public object AdministrativeArea { get; set; }
    }
}
