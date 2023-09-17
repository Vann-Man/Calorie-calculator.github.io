var availableFood = [
  "Tuna Salad",
  "Chicken Salad",
  "Chicken Bruschetta",
  "Hawaiian Pizza",
  "Vegeterian Pizza",
  "Ham and Cheese Sandwich",
  "Club Sandwich",
  "Plain Backed Potato",
  "Baked Potato with Chicken",
  "Baked Potato with Tuna",
  "Tuna Mayo Sandwich",
  "Egg Mayo Sandwich",
  "Chicken Mayo Sandwich",
  "Honey Baked Chicken Ham Sandwich",
  "Hot Dog Delight",
  "Iced Lemon Tea",
  "Iced Coffee",
  "Iced Chocolate",
  "Mocha Breeze",
  "Blueberry Blend",
  "Mango Madness",
  "Orange Supreme",
  "Banana Peach",
  "Hot Coffee",
  "Hot Cappuccino",
  "Hot Latte",
  "Hot Mocha",
  "Hot Chocolate",
  "Hot English Breakfast Tea",
  "Hot Earl Grey Tea",
  "Hot Darjeeling Tea",
  "Hot Peppermint Tea",
  "Hot Green Tea",
  "Tuna Puff",
  "Chicken Curry Puff",
  "Chicken Pie",
  "Apple Lattice",
  "Chocolate Croissant",
  "Cinnamon Croissant",
  "Peach Tart",
  "Mix Fruit Tart",
  "Kiwi Tart",
  "Strawberry Tart",
  "Chocolate Muffins",
  "Blueberry Muffins",
  "Banana Muffins",
];

var calorieList = [
  383, // tuna salad
  400, // chicken salad
  338, // chicken bruschetta
  314, // hawaiian pizza
  385, // vegeterian pizza
  352, // ham and cheese sandwich
  284, // club sandwich
  161, // plain baked potato
  610, // baked potato with chicken
  341, // baked potato with tuna
  302, // tuna mayo sandwich
  237, // egg mayo sandwich
  331, // chicken mayo sandwich
  517, // honey baked chicken ham sandwich
  150, // hot dog delight
  135, // iced lemon tea
  50, // iced coffee
  233, // iced chocolate
  302, // mocha breeze
  330, // blueberry blend
  186, // mango madness
  110, // orange supreme
  300, // banana peach
  55, // hot coffee
  150, // hot cappuccino
  190, // hot latte
  197, // hot mocha
  220, // hot chocolate
  2, // hot english breakfast tea
  2, // hot earl grey tea
  2, // hot darjeeling tea
  2, // hot peppermint tea
  2, // hot green tea
  226, // tuna puff
  359, // chicken pie
  292, // apple lattice
  240, // chocolate croissant
  130, // cinnamon croissant
  370, // peach tart
  318, // mixed fruit tart
  420, // kiwi tart
  417, // strawberry tart
  374, // chocolate muffins
  476, // blueberry muffins
  348, // banana muffins
]

$( function() {
    $( "#userSearch" ).autocomplete({
      source: availableFood
    });
} );

var foodList = document.getElementById("addedFood");
var foodToAdd = document.getElementById("userSearch");

function addFood() {
    if (foodToAdd.value !== "") {
        var li = document.createElement("li");
        li.setAttribute('id', foodToAdd.value);
        let text = document.createTextNode(foodToAdd.value);
        li.appendChild(text);
        foodList.appendChild(li);
        foodToAdd.value = "";
    }
}

function removeFood() {
    var lastElement = foodList.lastElementChild;
    foodList.removeChild(lastElement);
}

function calculateFunction() {
  var nameList = document.getElementById("addedFood").getElementsByTagName("li")
  var calculationList = [];
  for (let i = 0; i < nameList.length; i++) {
    let indexName = nameList[i].textContent;
    let search = availableFood.indexOf(indexName);
    let calorie = calorieList[search];
    calculationList.push(calorie);
  }

  var calorieIntake = calculationList.reduce(calculate);
  document.getElementById("totalCaloriesLabel").innerHTML = "Total Calories: " + calorieIntake;

  if (calorieIntake < 675) {
    document.getElementById("dietRecommend").innerHTML = "Recommended diet: You should aim for a higher calorie diet."
  } else if (674 < calorieIntake < 1000) {
    document.getElementById("dietRecommend").innerHTML = "Recommended diet: Your diet is normal and no change will be needed."
  } else {
    document.getElementById("dietRecommend").innerHTML = "Recommended diet: You should aim for a lower calorie diet."
  }
}

function calculate(total, num) {
  return total + num;
}