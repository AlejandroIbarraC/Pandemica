﻿using API.Source.Entities;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    public class EnforcesController : ApiController
    {
        [Route("api/Enforces")]
        [HttpGet]
        public IEnumerable<Enforces> Get()
        {
            Enforces e1 = new Enforces("Costa Rica", 1, "2015-10-10", "2020-06-12");
            Enforces e2 = new Enforces("Nicaragua", 2, "1998-03-15", "2010-12-12");
            return new Enforces[] { e1, e2 };
        }

        [Route("api/Enforces/Country/{name}")]
        [HttpGet]
        public string GetEnforcesFromCountry(string name)
        {
            return name;
        }

        [Route("api/Enforces/Measurement/{id:int}")]
        [HttpGet]
        public int GetEnforcesFromMeasurement(int id)
        {
            return id;
        }

        [Route("api/Enforces")]
        [HttpPost]
        public void Post(Enforces enforces)
        {
            Debug.WriteLine("Inserted");
        }

        [Route("api/Enforces/Country/{name}")]
        [HttpPut]
        public void PutContactFromPerson(string name, Enforces enforces)
        {
            Debug.WriteLine("Updated from country");
        }

        [Route("api/Enforces/Measurement/{id:int}")]
        [HttpPut]
        public void PutContactFromPatient(int id, Enforces enforces)
        {
            Debug.WriteLine("Updated from measurement");
        }

        [Route("api/Enforces/Country/{name}")]
        [HttpDelete]
        public void DeleteContactFromPerson(string name)
        {
            Debug.WriteLine("Deleted from country");
        }

        [Route("api/Enforces/Measurement/{id:int}")]
        [HttpDelete]
        public void DeleteContactFromPatient(int id)
        {
            Debug.WriteLine("Deleted from measurement");
        }
    }
}