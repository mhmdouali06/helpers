<?php
/*uploads the file
* @param string $fieldName ...
* @param string $uploadDir directory path for upload
* @return false|string file name or false on error
*/
function processUploadedPhoto($fieldName, $uploadDir) {
  // Check if the file was uploaded
  if (isset($_FILES[$fieldName]) && $_FILES[$fieldName]['error'] == UPLOAD_ERR_OK) {
    // Validate the file is a photo
    $file = $_FILES[$fieldName]['tmp_name'];
    $file_name = $_FILES[$fieldName]['name'];
   
    if (getimagesize($file)) {
      // Check if the file is a JPG, PNG, or GIF
      $fileType = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
      
      if ($fileType == 'jpg' || $fileType == 'png' || $fileType == 'gif'|| $fileType == 'jpeg') {
        // Check the file size
        $fileSize = filesize($file);
        if ($fileSize <= 2 * 1024 * 1024) { // 2 MB
          // Generate a unique ID for the file
          $fileId = uniqid();
        
          // Generate the new filename
          $fileName = $fileId . '.' . $fileType;
          // Check if the file already exists
          if (!file_exists($uploadDir . '/' . $fileName)) {
            // Move the file to the specified directory
            move_uploaded_file($file, $uploadDir . '/' . $fileName);
            // Store the success message in the session
            $_SESSION['message'] = "File uploaded successfully.";
            return $fileName;
          } else {
            // Store the error message in the session
            $_SESSION['message'] = "Error: File already exists.";
          }
        } else {
          // Store the error message in the session
          $_SESSION['message'] = "Error: File is too large.";
        }
      } else {
        // Store the error message in the session
        $_SESSION['message'] = "Error: File is not a JPG, PNG, or GIF.";
      }
    } else {
      // Store the error message in the session
      $_SESSION['message'] = "Error: File is not an image.";
    }
  } else {
    // Store the error message in the session
    $_SESSION['message'] = "Error: File was not uploaded.";
  }
  return false;
}
