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

  function findStressorById(stressorId) {
    /* The stress id in the HTML has a prefix of `id-`. According
    to CSS specs an Id is not allowed to begin with a number.
    The object Id value from Mongo will have the a prefix of `id-` added
    so that DOM manipulation works correctly with jQuery and D3. */
    let stressor = STATE_DATA.data.find(function (element) {
      /* Compare the stressor Id from the STATE_DATA with
      a prefix of `id-` to the Id in HTML. */
      return `id-${element.id}` === stressorId;
    });
    console.log(stressor);

    let chartData = [
      {typeHR: "preHeartRate", heartRate: stressor.preHeartRate},
      {typeHR: "postHeartRate", heartRate: stressor.postHeartRate}
    ];
    console.log(chartData);
    return chartData;

  }
  /* Save chart data to variable. Use as argument to call D3 chart
  functions. */
  let d3ChartArg = findStressorById(objId);

  drawChart(d3ChartArg);
  resizeChart(d3ChartArg);

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

/* Need event handler for `lity:close` or `lity:remove`. A new <svg>
with a D3 chart is appended at the bottom of the page each time the lightbox
is opened, closed, then opened again. */
$(document).on("lity:close", function (event, instance) {
  console.log("Lity lightbox closed");

  /* Lity appends a new <div> to the bottom of the DOM to handle the
  lightbox behavior. Target the <div> with the classes `.lity.lity-opened`.
  From that <div> travese down the DOM to div.chart-container. Use
  jQuery's .empty() method to remove all child <svg> elements.
  */
  let it = $(".lity.lity-opened").find(".chart-container").children().length;
  console.log(it);

  $(".lity.lity-opened").find(".chart-container").empty();

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
