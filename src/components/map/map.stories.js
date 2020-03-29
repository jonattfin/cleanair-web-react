import React from 'react';

import Map from './index';

export default {
  title: 'Map',
  component: Map,
}

export const withData = () => <Map {...getProps()}/>
export const withoutData = () => <Map/>

function getProps() {
  return {
    payload: {
      sensors: [
        {
          "sensorId": "f64129a2-b2cb-4368-a645-b576728b2a9d",
          "position": "46.75312526151298,23.63106498151075",
          "comments": "",
          "type": "3",
          "description": "Strada Borhanciului",
          "status": "ACTIVE"
        },
        {
          "sensorId": "4ba28dd9-34d6-4653-919f-ab4d172cec48",
          "position": "46.73833025709931,23.49196391852518",
          "comments": "",
          "type": "3",
          "description": "Florilor",
          "status": "ACTIVE"
        },
        {
          "sensorId": "66beabbc-756e-4d15-a477-b1edfcf83af9",
          "position": "46.71038333029715,23.627815246582028",
          "comments": "pulse.eco Wi-Fi v2. sensor at Feleacu",
          "type": "3",
          "description": "Feleacu",
          "status": "ACTIVE"
        },
        {
          "sensorId": "5c1af7f9-9c7f-4215-802e-f8a109876570",
          "position": "46.76838,23.58505",
          "comments": "pulse.eco Wi-Fi v2. sensor at Gi",
          "type": "3",
          "description": "Petru Maior",
          "status": "ACTIVE"
        },
        {
          "sensorId": "0e9bd2d5-3db7-4b6e-b221-e860a85e9bd6",
          "position": "46.75037281064007,23.59234667785215",
          "comments": "",
          "type": "3",
          "description": "Constantin Noica",
          "status": "NOT_CLAIMED"
        },
        {
          "sensorId": "c48c8361-7d5f-41ac-8b38-e003f16033ff",
          "position": "46.751910652309995,23.52364197572485",
          "comments": "pulse.eco Wi-Fi v2 sensor at Ciresilor",
          "type": "3",
          "description": "Ciresilor",
          "status": "ACTIVE"
        },
        {
          "sensorId": "a3e37fe2-45da-4542-9e96-632472483c15",
          "position": "46.762725272140905,23.553373311508096",
          "comments": "pulse.eco Wi-Fi v2. sensor at Parcul Rozelor Manastur",
          "type": "3",
          "description": "Parcul Rozelor",
          "status": "ACTIVE"
        },
        {
          "sensorId": "de377c2b-dbab-4d7c-a327-43e1849f4967",
          "position": "46.775058, 23.626991",
          "comments": "pulse.eco Wi-Fi v2. Sensor at str. Dunarii",
          "type": "3",
          "description": "Dunarii",
          "status": "ACTIVE"
        },
        {
          "sensorId": "da2f5909-2472-4b72-829b-a0623542ed1f",
          "position": "46.749890816986806,23.578149423340133",
          "comments": "",
          "type": "3",
          "description": "Sergiu Celibidache",
          "status": "ACTIVE"
        },
        {
          "sensorId": "60784373-82e1-4239-8080-d12942317920",
          "position": "46.78607171568119,23.610986501964558",
          "comments": "",
          "type": "3",
          "description": "Câmpul Pâinii",
          "status": "ACTIVE"
        },
        {
          "sensorId": "6d0c813f-179b-4ca1-a6d0-a7da89f4eb2c",
          "position": "46.75661383365983,23.615221813167064",
          "comments": "",
          "type": "3",
          "description": "Alverna",
          "status": "NOT_CLAIMED"
        },
        {
          "sensorId": "dc5daf39-5e80-4c7c-a2f4-ff99cbf58784",
          "position": "46.78802432530651,23.616716265678402",
          "comments": "pulse.eco Wi-Fi v2. sensor at Bulgaria-Clujului",
          "type": "3",
          "description": "Campina",
          "status": "ACTIVE"
        },
        {
          "sensorId": "497ce5f8-fcc7-42f8-8607-20a921dba07a",
          "position": "46.77216387326324,23.598437292487066",
          "comments": "",
          "type": "3",
          "description": "Dobrogeanu Gherea",
          "status": "NOT_CLAIMED"
        },
        {
          "sensorId": "d58bdedb-bd8f-461e-ad79-07d19bebb47c",
          "position": "46.767620784093666,23.600777907883764",
          "comments": "pulse.eco Wi-Fi v2. sensor at Milton Lehrer",
          "type": "3",
          "description": "Milton Lehrer",
          "status": "ACTIVE"
        },
        {
          "sensorId": "05560729-d2b3-4b79-873d-d24dfd1e45c8",
          "position": "46.7220268639691,23.569482327129208",
          "comments": "",
          "type": "3",
          "description": "Vlad Mugur",
          "status": "ACTIVE"
        },
        {
          "sensorId": "90658647-2bed-447a-a8c5-a0e808d4567f",
          "position": "46.76537,23.60502",
          "comments": "pulse.eco Wi-Fi v2. sensor at Linka",
          "type": "3",
          "description": "Constantin Brâncuși",
          "status": "ACTIVE"
        },
        {
          "sensorId": "dedaa8e2-8e89-4c4a-b54c-86ae6284e854",
          "position": "46.753470380074475,23.609704971313477",
          "comments": "pulse.eco Wi-Fi v2. sensor at Nicolae Titulescu",
          "type": "3",
          "description": "Fagului",
          "status": "ACTIVE"
        },
        {
          "sensorId": "c07e3490-7c61-46c5-bb65-86b54cc12508",
          "position": "46.7700926231214,23.54769592935729",
          "comments": "",
          "type": "3",
          "description": "Donath 140",
          "status": "ACTIVE"
        },
        {
          "sensorId": "4778bc89-0f2d-44e6-9718-4fa12c3d8ed0",
          "position": "46.77566,23.59061",
          "comments": "pulse.eco Wi-Fi v2. sensor at Decebal",
          "type": "3",
          "description": "Decebal",
          "status": "NOT_CLAIMED"
        },
        {
          "sensorId": "5ca362b3-a3f6-4556-aef6-39489db5fd44",
          "position": "46.75822034319221,23.545644048693152",
          "comments": "",
          "type": "3",
          "description": "Calea Floresti",
          "status": "ACTIVE"
        },
        {
          "sensorId": "867abc99-8b01-4b39-a2ec-55510cc4add2",
          "position": "46.76340509544231,23.59857047436271",
          "comments": "",
          "type": "3",
          "description": "Nicolae Iorga",
          "status": "NOT_CLAIMED"
        },
        {
          "sensorId": "281acc50-ea9b-463e-afbb-50063a22f9f5",
          "position": "46.754576,23.627849",
          "comments": "pulse.eco Wi-Fi v2. sensor at Antim Ivireanu",
          "type": "3",
          "description": "Antim Ivireanu",
          "status": "ACTIVE"
        },
        {
          "sensorId": "aec1a643-8281-4483-8c9d-9a34fce8547b",
          "position": "46.7578,23.5733",
          "comments": "pulse.eco Wi-Fi v2. sensor at Octavian Goga",
          "type": "3",
          "description": "Octavian Goga",
          "status": "ACTIVE"
        },
        {
          "sensorId": "cd2b5d78-e0e7-4be1-9ae0-ff28f0e73ba7",
          "position": "46.754624556791214,23.597925144032416",
          "comments": "",
          "type": "3",
          "description": "Augustin Presecan",
          "status": "ACTIVE"
        },
        {
          "sensorId": "472b26a6-8ab2-4ae8-b517-8ba9948f83f2",
          "position": "46.74465,23.582",
          "comments": "pulse.eco Wi-Fi v2. sensor at Tudor Arghezi",
          "type": "3",
          "description": "Tudor Arghezi",
          "status": "NOT_CLAIMED"
        },
        {
          "sensorId": "d6c27d53-8d74-4ff9-a5d8-bede448244c8",
          "position": "46.763918,23.602591",
          "comments": "pulse.eco Wi-Fi v2. sensor at Brasov",
          "type": "3",
          "description": "Brasov",
          "status": "ACTIVE"
        },
        {
          "sensorId": "5213f2c1-4c6f-443c-b378-211f76a2ad7d",
          "position": "46.741460256473125,23.478486228792004",
          "comments": "",
          "type": "3",
          "description": "Profesor Dumitru Mocanu",
          "status": "ACTIVE"
        },
        {
          "sensorId": "2918473f-5043-4aa5-967a-d9d80e9e1a05",
          "position": "46.78221,23.561",
          "comments": "pulse.eco Wi-Fi v2. sensor at Tudor Vladimirescu",
          "type": "3",
          "description": "Tudor Vladimirescu",
          "status": "NOT_CLAIMED"
        },
        {
          "sensorId": "522ad249-96b8-47b7-a63e-8dba638cef6e",
          "position": "46.75220738507341,23.60242402770877",
          "comments": "",
          "type": "3",
          "description": "Theodor Capidan",
          "status": "ACTIVE"
        },
        {
          "sensorId": "d7875ccd-5d0b-4a96-9c9b-c75fbcb36196",
          "position": "46.76756076883432,23.63665209457263",
          "comments": "pulse.eco Wi-Fi v2. sensor at Soporului 8A",
          "type": "3",
          "description": "Soporului",
          "status": "ACTIVE"
        },
        {
          "sensorId": "c9def55b-ac01-4ad1-8da6-af5d923e2bb0",
          "position": "46.757187399814974,23.575516991491746",
          "comments": "Gheorghe Dima",
          "type": "3",
          "description": "Gheorghe Dima",
          "status": "NOT_CLAIMED"
        },
        {
          "sensorId": "31ee5bf9-5666-4d5f-ba7f-4c9cca246319",
          "position": "46.75605202251909,23.616226974700112",
          "comments": "pulse.eco Wi-Fi v2. sensor at Pintea Viteazul",
          "type": "3",
          "description": "Alverna",
          "status": "ACTIVE"
        },
        {
          "sensorId": "f1f121fe-e142-4c81-85aa-943f4e798aab",
          "position": "46.77154,23.58767",
          "comments": "pulse.eco Wi-Fi v2. sensor at Vasile Goldis",
          "type": "3",
          "description": "Vasile Goldis",
          "status": "NOT_CLAIMED"
        },
        {
          "sensorId": "5cf6ecc0-8fd4-4e3a-a28f-1ae4bbe61bd5",
          "position": "46.76366,23.5862",
          "comments": "pulse.eco Wi-Fi v2. sensor at IonCreanga",
          "type": "3",
          "description": "IonCreanga",
          "status": "NOT_CLAIMED"
        },
        {
          "sensorId": "49dcf36f-a2dc-48d5-a02a-0bd38ccc60b4",
          "position": "46.74376419826819,23.565092188737992",
          "comments": "",
          "type": "3",
          "description": "Edgar Quinet",
          "status": "ACTIVE"
        },
        {
          "sensorId": "dbf8655d-d3a5-4a05-bddf-979b5ad3e24d",
          "position": "46.76764,23.58029",
          "comments": "pulse.eco Wi-Fi v2. sensor at MihaiEminescu",
          "type": "3",
          "description": "MihaiEminescu",
          "status": "NOT_CLAIMED"
        },
        {
          "sensorId": "66f067fb-8634-44ef-a12b-86592e153671",
          "position": "46.77074,23.58584",
          "comments": "pulse.eco Wi-Fi v2. sensor at GeorgeBaritiu",
          "type": "3",
          "description": "GeorgeBaritiu",
          "status": "NOT_CLAIMED"
        },
        {
          "sensorId": "89894faa-572f-4104-b97d-0b9b85cf9261",
          "position": "46.757359,23.556366",
          "comments": "pulse.eco Wi-Fi v2. sensor at Manastur, Primaverii",
          "type": "3",
          "description": "Primaverii",
          "status": "ACTIVE"
        },
        {
          "sensorId": "7e8821c2-15f3-4073-949b-2df9112a0d44",
          "position": "46.780113,23.587217",
          "comments": "pulse.eco Wi-Fi v2. sensor at Vasile Lupu",
          "type": "3",
          "description": "Vasile Lupu",
          "status": "ACTIVE"
        },
        {
          "sensorId": "87c3e45d-f67e-4a28-8199-20748ba3e0ee",
          "position": "46.774526264886596,23.612254082883506",
          "comments": "",
          "type": "3",
          "description": "Aleea Godeanu",
          "status": "NOT_CLAIMED"
        },
        {
          "sensorId": "ee2663a7-96c1-4116-aa96-997381eb5632",
          "position": "46.74440823526109,23.568866935962703",
          "comments": "",
          "type": "3",
          "description": "Moricz Zsigmond",
          "status": "ACTIVE"
        },
        {
          "sensorId": "c92366b5-ef57-4c93-97d2-c962c9cf8fbe",
          "position": "46.775362446377976,23.635875178649396",
          "comments": "",
          "type": "3",
          "description": "Galati",
          "status": "ACTIVE"
        },
        {
          "sensorId": "23db8195-a4d5-4212-9fb0-975df5760b0e",
          "position": "46.77876043148148,23.581359020890545",
          "comments": "pulse.eco Wi-Fi sensor v2 at Miron Costin",
          "type": "3",
          "description": "Miron Costin",
          "status": "ACTIVE"
        },
        {
          "sensorId": "0cf57309-7a29-4e54-82fb-9ce6da958dd0",
          "position": "46.78190767489561,23.579471596897616",
          "comments": "",
          "type": "3",
          "description": "Magaziei",
          "status": "ACTIVE"
        },
        {
          "sensorId": "439fc4d1-6919-45ff-a552-847bf6c081ef",
          "position": "46.762292386736156,23.61862599849701",
          "comments": "pulse.eco Wi-Fi v2. sensor în Gheorgheni, Al. Azuga",
          "type": "3",
          "description": "Aleea Azuga",
          "status": "ACTIVE"
        },
        {
          "sensorId": "b350e7d0-49b2-44d5-ae1f-ec32cb0aebc5",
          "position": "46.780727510667205,23.602969781623713",
          "comments": "",
          "type": "3",
          "description": "Bucuresti",
          "status": "ACTIVE"
        }
      ]
    }
  }
}
