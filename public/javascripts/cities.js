const randomColorGenerator = function () {
  return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
};

const transformJson = json => {
  return {
    labels: json.data.map( city => city.city ),
    datasets: [
        {
            backgroundColor: "rgba(0,10,220,0.5)",
            strokeColor:["rgba(0,10,220,0.5)","rgba(220,0,10,0.5)"],
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: json.data.map(city => city.population)
        },
        {
            type: 'line',
            backgroundColor: "rgba(220,0,10,0.5)",
            strokeColor:["rgba(0,10,220,0.5)","rgba(220,0,10,0.5)"],
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: json.data.map(city => city.median_home_price)
        },
        {
            type: 'line',
            backgroundColor: "green",
            strokeColor:["rgba(0,10,220,0.5)","rgba(220,0,10,0.5)"],
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: json.data.map(city => city.median_income)
        }]
  }
}

const renderChart = data => {
  const chartContext = document.getElementById( 'citiesChart' ).getContext( '2d' )
  new Chart.Bar( chartContext , {
    data: data
  });
}

fetch( '/api/cities' )
  .then( response => response.json() )
  .then( transformJson )
  .then( renderChart )
