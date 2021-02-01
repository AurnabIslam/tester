const Cov19 = new Covid19;
const ui = new UI;

Cov19.getData()
  .then(allData => {
    //allData.forEach(data => {
     //  console.log(data);
     //})
    ui.display(allData)
  })
  .catch(err => console.log(err))