$.getJSON("data.json", (data) => {
    $.each(data, (index, spot) => {
        $("#spotsTable").append(

            `<tr>
                <td>${spot.name}</td>
                <td>${spot.description}</td>
                <td>
                    <a href= "https://www.google.com/maps?q=${spot.location}" target = "_blank"> Google Maps
                </td>
            </tr>`
        );
    }
    );

});