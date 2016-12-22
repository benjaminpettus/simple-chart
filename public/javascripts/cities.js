
const transformJson = json => {
  return {
    labels: json.data.map( city => city.city ),
    datasets: [{
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1,
      data: json.data.map( city => city.population )
    }]
  }}

const renderChart = data => {
  const chartContext = document.getElementById( 'citiesChart' ).getContext( '2d' )
  new Chart( chartContext ).Bar( data )
}

fetch( '/api/cities' )
  .then( response => response.json() )
  .then( transformJson )
  .then( renderChart )
