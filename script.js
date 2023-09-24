
$(function () {
 
  //Adds click function to save user input to local storage using the saveBtn.
  $(".saveBtn").on("click", function () {
    // Get the parent time block's ID
    const timeBlockId = $(this).closest(".time-block").attr("id");
    
    // Use the time block ID as a key to save user input in local storage
    const userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
  });


  // Uses dayjs to display the current day of the week, month, and day {
    function displayCurrentTime() {
      setInterval(function () {
          const currentTime = dayjs().format('dddd, MMMM D');
          $('#currentDay').text(currentTime);
      }, 1000);
  }

    //Create var containing dayjs current hour.
    var currentHour = dayjs().hour();

    //Applies a function to each time-block.
    $(".time-block").each(function(){
      //Grabs the ID of the time block then splits the id by the "-" character and grabs the index of 1, which will be the hour.
      var timeHour = parseInt($(this).attr("id").split('-')[1]);

      //if timeHour is less than current hour apply past class.
      if (timeHour < currentHour){
        $(this).addClass("past");
      }
      //if timeHour is equal to current hour apply present class.
      else if (timeHour === currentHour){
        $(this).addClass("present");
      }
      //else add class future.
      else {
        $(this).addClass("future");
      }
    })



    //Function to get user input from local storage.
    $(".time-block").each(function(){
      var timeID = $(this).attr("id");
      var savedIn = localStorage.getItem(timeID);

      if(savedIn){
        $(this).find(".description").val(savedIn);
      }
    });

  //Calls displayCurrentTime() function
  displayCurrentTime();
});
