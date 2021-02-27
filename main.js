//These are the variables that will be used
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image ="racing.jpg";

car_1_image ="car1.png";
car_2_image ="car2.png";

car1_x = 10;
car1_y = 10;
car_1width = 120;
car_1height = 70;

car2_x = 10;
car2_y = 100;
car_2width = 120;
car_2height = 70;
//This is the function "add()"
function add()
{
    background_Img = new Image();//Defining the variable with a new image
    background_Img.onload=uploadBackground;//Setting the img to onload and call function
    background_Img.src= background_image;

    car_1Img = new Image();//Defining the car_1 with a new image
    car_1Img.onload=uploadCar_1;//Setting the car_1 to onload and call function
    car_1Img.src= car_1_image;

    car_2Img = new Image();//Defining the car_2 with a new image
    car_2Img.onload=uploadcar_2;//Setting the car_2 to onload and call function
    car_2Img.src= car_2_image;
}

function uploadBackground()
{
    ctx.drawImage(background_Img, 0, 0, canvas.width, canvas.height);
}

function uploadCar_1()
{
    ctx.drawImage(car_1Img, car1_x, car1_y, car_1width, car_1height);
}

function uploadcar_2()
{
    ctx.drawImage(car_2Img, car2_x, car2_y, car_2width, car_2height);
}

//This is for adding an event listner for "keydown"
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed = e.keyCode;
    if(keypressed == "38")
    {
        car_1up();
        console.log("left arrow key pressed");
    }
    if(keypressed == "40")
    {
        car_1down();
        console.log("down key pressed");
    }
    if(keypressed == "37")
    {
        car_1left();
        console.log("left key pressed");
    }
    if(keypressed == "39")
    {
        car_1right();
        console.log("right key pressed");
    }
    if(keypressed == "87")
    {
        car_2up();
        console.log("w key pressed");
    }
    if(keypressed == "83")
    {
        car_2down();
        console.log("s key pressed");
    }
    if(keypressed == "65")
    {
        car_2left();
        console.log("a key pressed");
    }
    if(keypressed == "68")
    {
        car_2right();
        console.log("d key pressed");
    }

}