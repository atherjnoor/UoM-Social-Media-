<?php
function isValidString($str)
{
    return (isset($str) && $str !== "" && strpos($str, ' ') === false);
}
function isValidDob($dob)
{
    // Check if the format is yyyy-mm-dd using regex
    if (!preg_match("/^\d{4}-\d{2}-\d{2}$/", $dob)) {
        return false;
    }

    // Split the date into year, month, and day
    list($year, $month, $day) = explode('-', $dob);

    // Check if it's a valid date (accounts for months with fewer than 31 days)
    return checkdate((int) $month, (int) $day, (int) $year);
}

function isValidFullname($fullname)
{
    return (isset($fullname) && preg_match("/^[a-zA-Z- ]+$/", $fullname)); // Allows letters, spaces, and hyphens
}
function isValidUmnetid($umnetid)
{
    return (isset($umnetid) && ctype_alnum($umnetid)); // Only letters and numbers
}
?>