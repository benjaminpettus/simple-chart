
const transformJson = json => {
  return {
    labels: json.data.map( city => city.city ),
    datasets: [
        {
            backgroundColor: ["#80f442", "#f45c42", "#4268f4", '#ee42f4'],
            strokeColor:["rgba(0,10,220,0.5)","rgba(220,0,10,0.5)"],
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: json.data.map(city => city.population)
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
