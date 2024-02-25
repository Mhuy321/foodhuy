


fetch("https://api.myjson.online/v1/records/abcb050c-f85f-4d4c-adde-e7059527f5d4")
    .then((response) => response.json())
    .then((data) => {
        console.log("🚀 ~ .then ~ data:", data.data)
        let htmlProduct = "";
        //  for(let i = 0; i<data.length; i++){
        //     document.write(data[i].namePro +  ": ngày sản xuất:" + data[i].dateCreated + ", " )
        //  }
        for (let i = 0; i < data.data.length; i++) {
            htmlProduct += `
    <div class="card">
    <img class="img-pro" src="${data.data[i].image}" alt="Avatar">
    <div class="container">
        <h4><b>${data.data[i].namePro}</b></h4>
    </div>
</div>


    `
        }
        document.getElementById("all-card").innerHTML = htmlProduct;
    })

