$.getJSON("data.json", (data) => {      // jQuery function that requests JSON file
    $.each(data, (index, spot) => {     // Loop through array 
        $("#spotsTable").append(        // Add rows to the table body 

                                        // backtick (`) + ${} for template literals
            `<tr>                      
                <td>${spot.name}</td>
                <td>${spot.description}</td>
                <td>
                    <a href= "https://www.google.com/maps?q=${spot.location}" target = "_blank"> Google Maps </a>
                </td>
            </tr>`
        );
    }
    );

});