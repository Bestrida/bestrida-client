Notes

Lgin notes
  Login URL for app - http://www.bestridaapp.com/api/register
  ngCordova Oauth library - https://github.com/nraboy/ng-cordova-oauth
    strava oauth for ngCordova library - $cordovaOauth.strava(string clientId, string clientSecret, array appScope, object options)
  cordova plugin for in app broswer window - http://cordova.apache.org/docs/en/3.0.0/cordova/inappbrowser/inappbrowser.html

Challenge Object
{ 
  _id: '5675926c7b221ed533701436',
  segmentId: 1,
  segmentName: 'Tour de France',
  challengerId: 2711071,
  challengerName: 'Green Teletubbie',
  challengeeId: 12348243,
  challengeeName: 'Red Teletubbie',
  expires: '2015-12-25T23:27:00.000Z',
  __v: 0,
  loserName: 'Carly Fiorina',
  loserId: 2711071,
  winnerName: 'Donald Trump',
  winnerId: 12348243,
  challengeeTime: 571,
  challengeeAvgCadence: 15,
  challengeeAvgWatts: 55,
  challengeeAvgHeartrate: 95,
  challengeeMaxHeartRate: 110,
  challengerTime: 579,
  challengerAvgCadence: 10,
  challengerAvgWatts: 50,
  challengerAvgHeartrate: 100,
  challengerMaxHeartRate: 125,
  segmentCountry: 'Some Country',
  segmentCity: 'Some City',
  segmentDistance: 100,
  segmentElevationGain: 9,
  segmentAverageGrade: 5,
  segmentClimbCategory: 3,
  created: '2015-12-19T17:22:52.016Z',
  status: 'complete',
  challengeeCompleted: true,
  challengerCompleted: true 
}

Segment Object
{
  "_id":10384704,
  "name":"Zwift TT flatout (3rd Str)",
  "activityType":"VirtualRide",
  "distance":7608.6,
  "averageGrade":0,
  "climbCategory":0,
  "city":"Richmond",
  "state":"Virginia",
  "country":"United States",
  "totalElevationGain":15.8,
  "__v":0,
  "endLatLng":[37.541402,-77.441758],
  "startLatLng":[37.544041,-77.439103]
}

Active Challenge Object
{
  "_id":"567f20a8d3058f555ce4d227",
  "segmentId":1,
  "segmentName":"Segment 1",
  "challengerId":12348243,
  "challengerName":"Shan Batla 1",
  "challengeeId":2711071,
  "challengeeName":"Posh Spice 1",
  "created":"2015-12-26T23:20:08.842Z",
  "expires":"2015-12-30T23:27:00.000Z",
  "__v":0,"expired":false,
  "status":"active",
  "challengeeCompleted":false,
  "challengerCompleted":false
}