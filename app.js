/* Lity demo */

function startApp() {
  //var instance = lity('https://www.youtube.com/watch?v=XSGBVzeBUbk');
}

//$(startApp);

// data from database stored here
const STATE_DATA = {
  data: [
    {
      activity: "nap",
      duration: 10,
      id: "5a12023c7a12bcb88ac5e20b",
      postHeartRate: 60,
      preHeartRate: 80,
      stress: "school, final exams"
    },
    {
      activity: "read",
      duration: 10,
      id: "5a12023c7a12bcb88ac5e20c",
      postHeartRate: 68,
      preHeartRate: 70,
      stress: "fight with spouse"
    }
  ]
};

$(document).on("lity:ready", function (event, instance) {
  /* `opener` used as an event handler, this is set to the element
  which triggered the event */
  let triggerElem = instance.opener(); // trigger is a.d3-button
  let objId = triggerElem.closest(".js-single-result").attr("id");

  console.log(objId);

  /* Write a function that accepts objId as an argument. The function
  loops through STATE_DATA.data array in app.s to look for the object with
  the correct stressor.id and associated heart rates. The function
  returns an on array of objects:

  let stressArr = [
    {typeHR: "preHeartRate", heartRate: 80},
    {typeHR: "postHeartRate", heartRate: 70}
  ];

  Next call the functions drawChart() with the stressArr object
  to draw the D3 chart
  */

})



/*
This code using Lity, to display something that's already on page
inside a Lightbox

Display the D3 chart inside this <div>, keep it hidden, then use 
data-lity inline href to load the chart inside the lightbox.

<div id="inline" style="background:#fff" class="lity-hide">
    Inline content
</div>

*/
