var slideIndex = 1;
// showSlides();
showDivs(slideIndex);


function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = x.length;}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";

}

// // var slideIndex_2 = 1;
// // // showSlides();
// // showDivs_2(slideIndex_2);


// // function plusDivs_2(n) {
// //   showDivs_2(slideIndex_2 += n);
// // }

// // function showDivs_2(n) {
// //   var i;
// //   var x = document.getElementsByClassName("slideshow_2");
// //   if (n > x.length) {slideIndex_2= 1;}
// //   if (n < 1) {slideIndex_2 = x.length;}
// //   for (i = 0; i < x.length; i++) {
// //     x[i].style.display = "none";
// //   }
// //   x[slideIndex_2-1].style.display = "block";

// // }

var vueinst = new Vue({
    el: "#app",
    data: {
        title: ["Order", "Product", "Quantity", "Price", "Shipping Fee", "Total", "Shipping Date", "Rating"],  //array of strings
        info: [
            {number: "1", product: "Book", quantity: "1", price: "70.000 VND", shipping_fee: "20.000 VND", total: "90.000 VND", shipping_date: "20/08/2021", rating: "Amazing"},
            {number: "2", product: "Book", quantity: "1", price: "70.000 VND", shipping_fee: "20.000 VND", total: "90.000 VND", shipping_date: "20/08/2021", rating: "Amazing"},
            {number: "3", product: "Book", quantity: "1", price: "70.000 VND", shipping_fee: "20.000 VND", total: "90.000 VND", shipping_date: "20/08/2021", rating: "Amazing"},
            {number: "4", product: "Book", quantity: "1", price: "70.000 VND", shipping_fee: "20.000 VND", total: "90.000 VND", shipping_date: "20/08/2021", rating: "Amazing"},
            {number: "5", product: "Book", quantity: "1", price: "70.000 VND", shipping_fee: "20.000 VND", total: "90.000 VND", shipping_date: "20/08/2021", rating: "Amazing"},
            {number: "6", product: "Book", quantity: "1", price: "70.000 VND", shipping_fee: "20.000 VND", total: "90.000 VND", shipping_date: "20/08/2021", rating: "Amazing"},
            {number: "7", product: "Book", quantity: "1", price: "70.000 VND", shipping_fee: "20.000 VND", total: "90.000 VND", shipping_date: "20/08/2021", rating: "Amazing"},
            {number: "8", product: "Book", quantity: "1", price: "70.000 VND", shipping_fee: "20.000 VND", total: "90.000 VND", shipping_date: "20/08/2021", rating: "Amazing"},
            {number: "9", product: "Book", quantity: "1", price: "70.000 VND", shipping_fee: "20.000 VND", total: "90.000 VND", shipping_date: "20/08/2021", rating: "Amazing"},
            {number: "10", product: "Book", quantity: "1", price: "70.000 VND", shipping_fee: "20.000 VND", total: "90.000 VND", shipping_date: "20/08/2021", rating: "Amazing"},
        ],
        selected_page: 'home_page',
        person: {
            first_name: '',
            last_name: '',
            DOB: '',
            address: '',
            experience: '',
            hobbies: ''
        },
        selected_service: 'profile',
        title_2: ["Name", "DOB", "Nationality"],
        people: [
            {name: "Harry", DOB: "01/05/2000", nation: "Vietnam"},
            {name: "Potter", DOB: "01/05/2000", nation: "Austria"},
            {name: "Paul", DOB: "01/05/2000", nation: "England"},

        ],

        person_2: {
            name: '',
            DOB: '',
            nation: ''
        },
        color: 'darkgreen',
        markers: [
        ],
        account: {
            email: '',
            password: ''
        },
        user: {
            fullname: '',
            username: '',
            email: ''
        },
        sign_up: {
            email: '',
            username: '',
            password: '',
            fullname: '',
            first_name: '',
            last_name: '',
            dob: '',
            address: '',
            phone_number: '',

        }
    },
});
// //         methods: {
// //         add_person: function(){
// //             //this.person: đi vô data chọn person
// //             // thay vì var new_person=this.person, dùng structure bên dưới
// //             var new_person=JSON.parse(JSON.stringify(this.person_2));
// //             //cho new_person vào trong people
// //             //luôn luôn có this
// //             this.people.push(new_person);

// //         },

// //         change_color: function(){
// //             //khi nhấn nút, nếu color màu xanh thì chuyển sang vàng, ngược lại thì chuyển sang xanh
// //             if(this.color==='darkgreen'){
// //                 this.color='yellow';
// //             }
// //             else {
// //                 this.color='darkgreen';
// //             }
// //         },
// //         // get_markers: function(){
// //         //     var xhttp = new XMLHttpRequest();
// //         //     xhttp.onreadystatechange = function() {
// //         //         if (this.readyState == 4 && this.status == 200) {
// //         //             //do sth here
// //         //             let info=JSON.parse(this.responseText);
// //         //             // info: từng element có id, longitude, latitude
// //         //             // => bỏ 1 marker vô trong từng element của info
// //         //             for (var i=0; i<info.length; i++) {
// //         //                 info[i].marker= new mapboxgl.Marker()
// //         //                                         .setLngLat([info[i].longitude, info[i].latitude])
// //         //                                         .addTo(map);
// //         //             }



// //         //         }
// //         //     };
// //         //     xhttp.open("GET", "/markers", true);
// //         //     xhttp.send();
// //         // },

// //         login: function() {
// //             var xhttp = new XMLHttpRequest();
// //             var _this=this;
// //             xhttp.onreadystatechange = function() {
// //                 if (this.readyState == 4 && this.status < 400) {
// //                     //router gửi thông tin, bây giờ nhận thông tin và lưu trong 1 variable
// //                     var info_received=JSON.parse(this.responseText);
// //                     // _this.user.username=info_received.username;
// //                     // _this.user.email=info_received.email;
// //                     // _this.user.fullname=info_received.fullname;
// //                     // console.log(_this.user);

// //                     window.location.href=info_received.redirectPath;
// //                 } else if (this.readyState == 4 && this.status >= 400) {
// //                     document.getElementById("login_failed").innerHTML="Login failed!";
// //                 }
// //             };
// //             xhttp.open("POST", "/login", true);
// //             xhttp.setRequestHeader("Content-type", "application/json");
// //             xhttp.send(JSON.stringify(this.account));
// //         },

// //         sign_up_func: function() {
// //             var xhttp = new XMLHttpRequest();
// //             var _this=this;
// //             xhttp.onreadystatechange = function() {
// //                 if (this.readyState == 4 && this.status ==200) {
// //                     //router gửi thông tin, bây giờ nhận thông tin và lưu trong 1 variable
// //                     var info_received=JSON.parse(this.responseText);
// //                     // _this.user.username=info_received.username;
// //                     // _this.user.email=info_received.email;
// //                     // _this.user.fullname=info_received.fullname;
// //                     // console.log(_this.user);

// //                 }
// //                 else if (this.readyState == 4 && this.status >= 400) {
// //                     document.getElementById("signup_failed").innerHTML="Signup failed!";
// //                 }
// //             };
// //             xhttp.open("POST", "/sign_up", true);
// //             xhttp.setRequestHeader("Content-type", "application/json");
// //             xhttp.send(JSON.stringify(this.sign_up));
// //         },

// //         logout: function() {
// //             var xhttp = new XMLHttpRequest();
// //             var _this=this;
// //             xhttp.onreadystatechange = function() {
// //                 if (this.readyState == 4 && this.status < 400) {
// //                     window.location.href="/index.html";
// //                 }
// //             };
// //             xhttp.open("POST", "/logout", true);
// //             xhttp.setRequestHeader("Content-type", "application/json");
// //             xhttp.send(JSON.stringify(this.account));
// //         },

// //         get_user_info: function() {
// //             var xhttp = new XMLHttpRequest();
// //             var _this=this;
// //             xhttp.onreadystatechange = function() {
// //                 if (this.readyState == 4 && this.status == 200) {
// //                     //do sth here
// //                     var info=JSON.parse(this.responseText);
// //                     //rows (thông tin từ database) là array nên info cũng là array
// //                     _this.person.fullname=info[0].first_name;
// //                     _this.person.username=info[0].last_name;
// //                     _this.person.email=info[0].DOB;
// //                     _this.person.email=info[0].address;
// //                     _this.person.email=info[0].experience;
// //                     _this.person.email=info[0].hobbies;

// //                 }
// //             };
// //             xhttp.open("GET", "/get_profile_user", true);
// //             xhttp.send();
// //         },

// //         update_profile: function() {
// //             var xhttp = new XMLHttpRequest();
// //             var _this=this;
// //             xhttp.onreadystatechange = function() {
// //                 if (this.readyState == 4 && this.status ==200) {

// //                 }
// //             };
// //             xhttp.open("POST", "/update_user", true);
// //             xhttp.setRequestHeader("Content-type", "application/json");
// //             xhttp.send(JSON.stringify(this.person));
// //         },


// //     },
// });

// // mapboxgl.accessToken = 'pk.eyJ1IjoibGFua2hhbmgxNTA0MDQiLCJhIjoiY2t0Zmp3Nmt1MDhhZzJ2dDA3ZjZ2cnp0ZyJ9.jW35YqogvAVfi7Bcn0SJUw';
// // const map = new mapboxgl.Map({
// //     container: 'map', // container ID
// //     style: 'mapbox://styles/mapbox/streets-v11', // style URL
// //     center: [106.660172, 10.762622], // starting position [lng, lat]
// //     zoom: 12 // starting zoom
// // });
