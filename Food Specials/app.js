const menu = {
  _meal: '',
  _price: 0,

//function to verify that meal and price are a string and number
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        return this._price = priceToCheck;
      }
    },

//function to pull our 2 keys and print a result
    get todaysSpecials() {
      if (this._meal && this._price) {
        return `Today's special is ${this._meal} for $${this._price}!`;
      } else {
        return 'Meal or price was not set correctly!'
      }
    }
  };

//edit our 2 keys and print
  menu.meal = 'Pizza';
  menu.price = 8;
  console.log(menu.todaysSpecials);
