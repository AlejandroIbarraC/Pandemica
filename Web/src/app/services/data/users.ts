export interface Admin {
  uid: string;
  email: string;
  emailVerified: boolean;
  country: string;
  continent: string;
}

export interface HealthCenter {
  uid: string;
  email: string;
  name: string;
  phone: string;
  emailVerified: string;
  managerName: string;
  capacity: string;
  icuCapacity: string;
  country: string;
  region: string;
}

export interface IHomeView {
  confirmedCases: number;
  activeCases: number;
  deadths: number;
  recovered: number;
  nationals: number;
  foreigns: number;
  todayNewCases: number;
  todayRecovered: number;
  todayDeceased: number;
  patientsAtHome: number;
  patientsHospitalized: number;
  patientsInICU: number;
  femaleCases: number;
  maleCases: number;
  '0-12': number;
  '13-20': number;
  '21-39': number;
  '40-59': number;
  '60-79': number;
  '+80': number;

}