

   
     var body = document.getElementById("body") ,
      list = document.getElementsByClassName("restaurant_menu__list"),
      title = document.getElementById("title")
     , name1= ["Broiled Lobster Tail with Brown Butter Sauce" , "Homemade Tartar Sauce" ,
      " Ginger-Soy Steamed Salmon with Spicy Maple Sauce "
      ," Fish Taco Salad Bowl" ,"Seafood Paella" ,
      " Slow-Roasted Salmon with Sweet Chili Glaze and Scallions" ," Grilled Salmon" ,  " Grilled Salmon"  ]

    , name2= ["Quick Easy Fish Stew" , "Tuna Patties" ,"Shrimp Fried Rice" ,"Moqueca – Brazilian Fish Stew" 
      ,"Fish Chowder" ,"Cioppino" ,"Smoked Salmon Pasta"  , "Cioppino"]

    , src1=["Images/food00.jpg" ,"Images/food11.jpg" ,"Images/food22.jpg" , "Images/food33.jpg" ,"Images/food44.jpg"
     ,"Images/food55.jpg" ,"Images/food66.jpg" ,"Images/food77.jpg"]
    
     , src2=["Images/0.jpg" ,"Images/1.jpg" ,"Images/2.jpg" , "Images/3.jpg" ,"Images/4.jpg" ,"Images/5.jpg" ,"Images/6.jpg" ,
    "Images/7.jpg"] ,
    food = document.getElementsByClassName("food"),
    img = document.getElementsByClassName("img") ;

    
    function showlunch()
     {
        document.body.style.backgroundColor="grey";
        title.style.color = "white";
        body.style.backgroundColor="white";
        list[0].style.color = "black";
        list[1].style.color = "black";

    }

     function showdinner()
     {
        document.body.style.backgroundColor="white";
        title.style.color = "black";
        body.style.backgroundColor="grey";
        list[0].style.color = "white";
        list[1].style.color = "white";
        
      }
    
   
   
   