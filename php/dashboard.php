<?php 
    $servername = "localhost";
    $username = "root";
    $password = "";
    $DB = "CCAS";
    $sqlquery = "SELECT nid, title FROM Notice ORDER BY nid DESC LIMIT 8";
    $headera_cons = "location:../Notice.html?";
    $counter = '1';
    
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $DB);
    
    // Check connection
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }
    $result = mysqli_query($conn, $sqlquery);
    
    if (mysqli_num_rows($result) > 0) {
        echo "Connected!";
        // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
            /* echo "id: " . $row["nid"]. " - Name: " . $row["title"] . "<br>"; */
            if($counter == '1')
            {
               $headera_cons = $headera_cons . "n=" . $row["title"];
            }
            else{
                $headera_cons = $headera_cons . "&n=" . $row["title"];
            }

            $counter++;
        }
        mysqli_close($conn);
        header($headera_cons);
        exit();
    } 
    else {
        die("Oops! Couldn't fetch results!");
    }

?>