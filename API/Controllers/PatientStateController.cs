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
    public class PatientStateController : ApiController
    {
        [Route("api/PatientState")]
        [HttpGet]
        public IEnumerable<PatientState> Get()
        {
            PatientState ps1 = new PatientState("Active", 1, "2017-12-12");
            PatientState ps2 = new PatientState("Dead", 2, "2002-01-01");
            return new PatientState[] { ps1, ps2 };
        }

        [Route("api/PatientState/State/{name}")]
        [HttpGet]
        public string GetPatientStateFromState(string name)
        {
            return name;
        }

        [Route("api/PatientState/Patient/{id:int}")]
        [HttpGet]
        public int GetPatientStateFromPatient(int id)
        {
            return id;
        }

        [Route("api/PatientState")]
        [HttpPost]
        public void Post(PatientState patientState)
        {
            Debug.WriteLine("Inserted");
        }

        [Route("api/PatientState/State/{name}")]
        [HttpPut]
        public void PutPatientStateFromState(string name, PatientState patientState)
        {
            Debug.WriteLine("Updated from patient");
        }

        [Route("api/PatientState/Patient/{id:int}")]
        [HttpPut]
        public void PutPatientStateFromPatient(int id, PatientState patientState)
        {
            Debug.WriteLine("Updated from pathologies");
        }

        [Route("api/PatientState/State/{name}")]
        [HttpDelete]
        public void DeletePatientStateFromState(string name)
        {
            Debug.WriteLine("Deleted from patient");
        }

        [Route("api/PatientState/Patient/{id:int}")]
        [HttpDelete]
        public void DeletePatientStateFromPatient(int id)
        {
            Debug.WriteLine("Deleted from pathologies");
        }
    }
}