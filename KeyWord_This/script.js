'use strict';
// ---------------------------------------------------------------------------------this keyword-------------------------------------------------------------

console.log(this);

const getAgeKeyWordThis = function (MybirthYearKeyWordThis) {
  console.log(2022 - MybirthYearKeyWordThis);
  console.log(this);
};

getAgeKeyWordThis(2001);

const getAgeKeyWordThisArr = MybirthYearKeyWordThis => {
  console.log(2021 - MybirthYearKeyWordThis);
  console.log(this);
};

getAgeKeyWordThisArr(2001);

const userKeyWordThis387 = {
  MybirthYearKeyWordThis: 1992,
  getAgeKeyWordThis: function () {
    console.log(this);
    console.log(2022 - this.MybirthYearKeyWordThis);
  },
};

userKeyWordThis387.getAgeKeyWordThis();

const userKeyWordThis388 = {
  MybirthYearKeyWordThis: 2002,
};

userKeyWordThis388.getAgeKeyWordThis = userKeyWordThis387.getAgeKeyWordThis;
userKeyWordThis388.getAgeKeyWordThis();

const f = userKeyWordThis387.getAgeKeyWordThis;
f();
