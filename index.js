window.onload = function () {
    //SESSION STORAGE
    //very similar to local storage. data will expire after a session (as soon as you close the browser)
    // console.log(sessionStorage); // returns a list of methods available via session storage 
    // sessionStorage.setItem('name', 'nathan'); // sets the key value pair (name - nathan)
    // console.log(sessionStorage.setItem('name')); // prints to the console and sets the name property in session storage
    //____________________________________________________
    //LOCAL STORAGE
    //newer and mores sophisticated than cookies
    //allows key/value pairs & stores as an object
    //LS can be used to store 2MB - 100MB
    //LS never expires
    //console.log(localStorage); //prints all of the available functions 
    //localStorage.setItem('name', 'natz');
    //localStorage.setItem('age', '42');
    //localStorage.getItem('name');

    // const obj = { name: 'natz', profession: 'dev' };
    // localStorage.setItem('profile', JSON.stringify(obj));
    // console.log(JSON.parse(localStorage.getItem('profile')));

    // for (let i = 0; i < localStorage.length; i++) { 
    //     //console.log(localStorage.key(i)); // prints each value: age, name, profile
    //     localStorage.removeItem(localStorage.key(i));
    // }
    // localStorage.getItem('name'); 
    // ___________________________________________________________
    //Browser Caching options: cookie, session storage, local storage, index db, cache storage
    //Caching allows you to save: data, tokens, preferences, API calls, profit/advertising
    //Cookies are used to store small data ~4kb
    // console.dir(document);
    
    //ASSIGNING COOKIES
    // document.cookie = "name=natz";
    // document.cookie = "age=eleventy billion";
    // document.cookie = "country=wild west; path=/";

    // console.log(document.cookie);

    //SETTING COOKIES
    // const setCookie = (key, val, days) => { 
    //     let date = new Date();
    //     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    //     console.log(`${key}=${val}; expires=${date.toLocaleDateString()}`)
    //     document.cookie = `${key}=${val}; expires=${date.toLocaleDateString()}`;
    // }
    // setCookie('dinner', 'hamburger', 2);

    //RETRIEVING COOKIES 
    // const getCookie = (key) => { 
    //     const all = document.cookie.split(';');
    //     let value = null;
    //     //console.log(all);
    //     all.forEach((val) => {
    //         const cookie = val.trim();
    //         const cookieArray = cookie.split('=');
    //         if (cookieArray[0] === key) { 
    //             value = cookieArray[1];
    //         }
    //         //console.log(cookieArray);
    //     });
    //     if (value) {
    //         return value;
    //     } else { 
    //         return 'cookie not found.';
    //     }
    // }
    // console.log(getCookie('name'));

    //Optional Catch Binding
    // let obj = {};
    // try {
    //     console.log(obj.prop.prop) // the new try catch block will swallow the error: cannot read property of undefined and allows the next statement to run

    // } catch { 

    // }
    // console.log('next statement'); //returns 'next statement'

    //Symbol.description()
    // let mySymbol = Symbol('my first symbol');
    // console.log(mySymbol.description); // returns the value within the symbol ..'my first symbol'

    //String.trimStart() & String.trimEnd()
    //let str = '  i have space around me '
    //console.log(str.trimStart().trimEnd()); // removes the white space at the beginning and end of the sentence.
    //console.log(str.trimStart().trimEnd().padStart(str.length -3, '-').padEnd(str.length, '-'));

    //Array Methods flat() & flatMap()
    //flatmap() example
    // const ary = ['i love you', 'you love me'];
    // const flatten = ary.flatMap(v => v.split(''));
    // console.log(flatten); // returns one array with each indivdual letter and space


    //const ary = [1, 2, [3]]; //example of a multi-dimensional array
    //const flatten = ary.flat(); // will only flatten one level
    //console.log(flatten); // returns a one-dimesional array [1,2,3]
    
    //const ary = [1, [2, [3]]]; // example of a deeply nested array
    //const flatten = ary.flat(2); // will flatten two levels
    //const flatten = ary.flat(Infinity); // will flatten any number of levels
    //console.log(flatten); // returns a one-dimensional array with [1,2,3]

    // const ary = [1, [2, [[[[[[3]]]]]]]];
    // const total = ary.flat(Infinity).reduce((a, v) => a + v, 0)

    // console.log(total); // flattens the array and returns the sum 6 (1+2+3)
    //__________________________//
    //Object Method & Object.fromEntries()
    // const items = { tomato: 2, potato: 1, eggs: 4 }
    // console.log(Object.entries(items)); // returns 3 arrays
    // const doublePriceItems = Object.fromEntries(Object.entries(items).map(([item, price]) => {
    //     return [item, price * 2]
    // }));
    // console.log(doublePriceItems); // returns an object with item and value
    ///_________________________//
    const addButton = document.getElementById('add-btn');
    const addInput = document.getElementById('add-input')
    const listHead = document.getElementById('list');

    const finishTask = (e) => { 
        if (e.target.checked) {
            e.target.setAttribute('class', 'strike');
        } else { 
            e.target.removeAttribute('class');
        }
    }

    const addItem = (e) => {
        let inputVal = addInput.value;

        if (!inputVal) {
            return;
        }
        const template = document.getElementById('template');
        const clone = document.importNode(template.content, true);
        clone.querySelector('span').textContent = inputVal;
        clone.querySelector('input').addEventListener('click', finishTask);
        listHead.appendChild(clone);

        addInput.value = '';
    };
    addButton.addEventListener('click', addItem);

    //console.log(addButton);
};